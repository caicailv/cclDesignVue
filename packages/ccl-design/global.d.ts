import type * as components from './components'

/**
 * Volar 插件实现代码提示
 *
 * https://github.com/johnsoncodehk/volar/blob/master/extensions/vscode-vue-language-features/README.md
 */

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CButton: typeof components.CButton
  }

  interface ComponentCustomProperties {
    // FMessage: typeof components.FMessage
    // FNotification: typeof components.FNotification
  }
}

// declare global {
//   const __DEV__: boolean
// }

export {}
