/*
 * @Date: 2023-03-23 13:42:28
 * @LastEditors: coderYang
 * @LastEditTime: 2023-03-23 14:33:22
 * @FilePath: /ftaptool/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'

createApp(App).use(router).use(store).mount('#app')

console.log(import.meta.env)
