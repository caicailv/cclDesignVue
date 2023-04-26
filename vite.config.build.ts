import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { visualizer } from 'rollup-plugin-visualizer'
import { resolve } from 'path'
import { copyFileSync } from 'fs'
// @ts-ignore
import { name, version } from './packages/ccl-design/package.json'

let buildDir = resolve(__dirname, './dist')
let componentDir = resolve(__dirname, './packages/ccl-design')
export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      dts({
        skipDiagnostics: true /** 是否跳过类型诊断 */,
        staticImport: true /** 是否将动态引入转换为静态 */,
        outputDir: buildDir /** 可以指定一个数组来输出到多个目录中 */,
        insertTypesEntry: true /** 是否生成类型声明入口 */,
        cleanVueFileName: true /** 是否将 '.vue.d.ts' 文件名转换为 '.d.ts' */,
        copyDtsFiles: true /** 是否将源码里的 .d.ts 文件复制到 outputDir */,
        include: ['./packages/ccl-design'] /** 手动设置包含路径的 glob */,
        /** 构建后回调钩子 */
        afterBuild: copyPackageJSON,
      }),

      visualizer(),
    ],
    build: {
      target: 'modules' /** 这是指 支持原生 ES 模块、原生 ESM 动态导入 */,
      minify: true /** 压缩代码 */,
      chunkSizeWarningLimit: 2 /** 打包的组件超过 2kb 警告提示 */,
      reportCompressedSize: true /** 启用 gzip 压缩大小报告 */,
      emptyOutDir: false,
      outDir: buildDir /** 指定输出路径 */,
      lib: {
        name: 'ccl-design',
        entry: resolve(
          __dirname,
          './packages/ccl-design/main.ts'
        ) /** 打包入口 */,
      },
      rollupOptions: {
        external: ['vue'] /** 确保外部化处理那些你不想打包进库的依赖 */,
        output: [
          {
            format: 'es',
            exports: 'named',
            dir: 'dist',
            sourcemap: false,
            entryFileNames: 'index.js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            inlineDynamicImports: false,
            manualChunks: undefined,
            preserveModules: true,
          },
        ],
      },
    },
  }
})

/** 打包结束之后将一些静态文件进行移入 */
const copyPackageJSON = (): void => {
  const files = [
    { input: './packages/ccl-design/README.md', outDir: './dist/README.md' },
    {
      input: './packages/ccl-design/package.json',
      outDir: './dist/package.json',
    },
    {
      input: './packages/ccl-design/LICENSE',
      outDir: './dist/LICENSE',
    },
    {
      input: './CHANGELOG.md',
      outDir: './dist/CHANGELOG.md',
    },
  ]

  files.forEach((item) => {
    copyFileSync(item.input, item.outDir)
  })

  console.warn(`\n ${name} ${version} 版本打包成功 \n`)
}
