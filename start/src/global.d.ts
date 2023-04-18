import type * as components from '@/components'
declare module 'vue' {
  export interface GlobalComponents {
    CButton: typeof components.CButton
    
  }

  interface ComponentCustomProperties {

  }
}

declare global {
  const __DEV__: boolean
}

export { }
