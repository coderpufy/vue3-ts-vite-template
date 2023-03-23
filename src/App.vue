<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="container"></div>
    <el-button type="primary">按钮1 </el-button>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
.wrapper {
  .container {
    width: 300px;
    height: 300px;
    background-color: red;
  }
}
</style>
