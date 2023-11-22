<script setup lang="ts">
import { Suspense } from 'vue';

// import userinfo from '@/apis/user'

// const response  = await userinfo()
// console.log(response);
</script>

<template>
  <!-- 等待加载完成在渲染 -->
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<style scoped></style>
