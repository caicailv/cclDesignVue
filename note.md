- 一些心得

### 为 vue3 setup 组件添加 name

```html
<script lang="ts" setup name="CButton"></script>
```

使用`vite-plugin-vue-setup-extend`插件,在 vite 中引入

### 添加 commitizen/commitlint/husky 配置, 规范提交信息

husky 是用来执行 commitlint 的,commitlint 会检查当前的提交是否符合规范,
commitizen 是使提交信息符合规范的工具,它会在提交时引导你填写提交信息

### 如何让组件在使用时能显示绿色,

在使用者项目中添加个.d.ts 文件,其中去写这个组件

### 只读常量

STATUSES 常量中的每个元素都是只读的字面量类型，不能被修改。这种类型推断可以避免对常量数组中的元素进行不必要的修改，从而提高代码的可维护性和可靠性

```ts
export const STATUSES = ['normal', 'success', 'warning', 'danger'] as const
```
