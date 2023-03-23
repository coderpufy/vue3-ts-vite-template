<!--
 * @Date: 2023-03-23 13:49:51
 * @LastEditors: coderYang
 * @LastEditTime: 2023-03-23 14:45:45
 * @FilePath: /ftaptool/src/views/helloHello.vue
-->
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useHomeStore from '@/store/modules/homeStore'
import { testAPI } from '@/service/modules/home'

const homeStore = useHomeStore()

const { name } = storeToRefs(homeStore)

const changeName = () => {
  homeStore.changeName('你好啊，李银河~~')
}

testAPI().then((res) => {
  console.log(res)
})
</script>

<template>
  <div>Home: {{ name }}</div>
  <el-button @click="changeName">修改name</el-button>
</template>

<style scoped></style>
