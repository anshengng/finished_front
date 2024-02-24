<script setup lang="ts">
import { getCategory } from '@/apis/category';

const res = await getCategory()

</script>

<template>
    <div class="w-screen flex justify-center bg-white">
        <!-- width 63% -->
        <div class="w-[63%] h-full bg-white flex items-center">
            <div class="w-full flex items-center gap-24">
                <!-- logo -->
                <img src="/images/icon.png" alt="" @click="$router.push('/')" class="cursor-pointer">

                <ul class="flex gap-16 justify-center text-lg">
                    <li v-for="item in res.data" :key="item.id" class="cursor-pointer hover:text-orange-500">{{ item.title
                    }}
                    </li>
                </ul>
            </div>
            <div class="mr-4">
                <UserComp></UserComp>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>