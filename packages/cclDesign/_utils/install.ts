import type { App, ComponentOptions, Component } from 'vue'

export function install<T extends Component>(component: T) {
  ;(component as Record<string, unknown>).install = (app: App) => {
    component.name && app.component(component.name, component)
  }
  return component
}
