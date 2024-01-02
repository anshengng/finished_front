<script setup lang="ts">
import { getCategory } from '@/apis/category';

const res = await getCategory()

</script>

<template>
    <!-- width 63% -->
    <div class="w-[63%] h-full bg-cyan-200 flex items-center">
        <div >icon</div>
        <div class="w-full">
            <ul class="flex gap-20 justify-center">
                <li v-for="item in res.data" :key="item.id" class="cursor-pointer">{{ item.title }}</li>
            </ul>
        </div>
        <div class="mr-4">
            <UserComp></UserComp>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>