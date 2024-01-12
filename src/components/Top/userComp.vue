<script setup lang="ts">

</script>


<template>
    <div class="flex gap-2">
        <button @click="$router.push('/login')" class="bg-slate-300 rounded-md py-1 px-1 w-12 h-8 cursor-pointer hover:text-white hover:bg-slate-500">登录 </button>
        <button @click="$router.push('/register')" class="bg-slate-300 rounded-md py-1 px-1 w-12 h-8 cursor-pointer hover:text-white hover:bg-slate-500">注册 </button>
    </div>
</template>


<style lang="scss" scoped></style>