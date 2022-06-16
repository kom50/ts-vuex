/* eslint-disable */
declare module '*.vue' {
  interface ComponentCustomProperties {
    store: "Store";
  }
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component


} 