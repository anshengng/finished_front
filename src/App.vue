<script setup lang="ts">
import { Suspense } from 'vue';

// import userinfo from '@/apis/user'

// const response  = await userinfo()
// console.log(response);
</script>

<template>
  <!-- 添加灰背景 -->
  <div class=" w-[screen-50px] bg-slate-100"> 
    <!-- 等待加载完成在渲染 -->
    <Suspense>
      <router-view></router-view>
    </Suspense>
    <div class="w-full flex justify-center">
      <FooterBar></FooterBar>
    </div>
  </div>
</template>

<style scoped></style>
