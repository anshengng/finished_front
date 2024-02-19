<script setup lang="ts">


</script>


<template>
    <div class="w-full">
        <div class="w-full h-20 flex justify-center">
            <TopBar></TopBar>
        </div>
        <div class="min-h-[800px] flex flex-col items-center">
            <router-view ></router-view>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>