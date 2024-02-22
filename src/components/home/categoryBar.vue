<script setup lang="ts">

</script>


<template>
    <div class="w-full flex justify-center bg-white">
        <ul class="flex gap-24 py-5 px-10">
            <li class="flex flex-col items-center justify-center w-20 object-cover cursor-pointer ">
                <img src="/public/images/category/phone.png" alt="" title="手机">
            </li>
            <li class="flex items-center justify-center w-40 object-cover cursor-pointer ">
                <img src="/public/images/category/computer.png" alt="" title="电脑">
            </li>
            <li class="flex items-center justify-center w-28 object-cover cursor-pointer ">
                <img src="/public/images/category/pad.png" alt="" title="平板">
            </li>
            <li class="flex items-center justify-center w-32 object-cover cursor-pointer ">
                <img src="/public/images/category/watch.png" alt="" title="手表">
            </li>
            <li class="flex items-center justify-center w-36 object-cover cursor-pointer ">
                <img src="/public/images/category/tv.png" alt="" title="电视">
            </li>

            <li class="flex items-center justify-center w-32 object-cover cursor-pointer ">
                <img src="/public/images/category/pod.png" alt="" title="耳机">
            </li>
            <li class="flex items-center justify-center w-32 object-cover cursor-pointer ">
                <img src="/public/images/category/homePod.png" alt="" title="音响">
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>
div {
    ul {
        li {
            transition: all .2s ease-in-out;

            &:hover {
                transform: scale(1.1);
            }
        }
    }
}
</style>