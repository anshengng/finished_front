<script setup lang="ts">
import userStore from '@/store/userStore'
import utils from '@/utils'
import menuStore from '@/store/menuStore';
import Notification from '@/components/Notification.vue';
import BreadCrumbs from '@/components/BreadCrumbs.vue';
import { ref } from 'vue';

let isFullScreen = false
const menus = menuStore()
menus.init() // 记得初始化

const user = userStore()
const userInfo = user.userInfo
let showMessage = ref<boolean>(false)

const showMsg = () => {
    showMessage.value = !showMessage.value
}

document.documentElement.addEventListener('click', () => {
    showMessage.value = false
})

//使用esc退出全屏时记得改变isFullScreen的值(无法使用TypeError: Permissions check failed)
// document.documentElement.addEventListener('fullscreenchange', (e) => {
//     clickFull()
// })

const clickFull = () => {
    if (!isFullScreen) {
        isFullScreen = true
        document.documentElement.requestFullscreen()
    } else {
        isFullScreen = false
        document.exitFullscreen()
    }
}
console.log(userInfo);

</script>


<template>
    <div class="pt-2 px-8 flex justify-between items-center bg-white">
        <div class="flex items-start">
            <i @click="menus.toggleState" :class="menus.close ? 'fas fa-caret-right' : 'fas fa-caret-left'"
                class="mr-3 cursor-pointer"></i>
            <BreadCrumbs />
        </div>
        <div class="h-full flex justify-center items-center relative  cursor-pointer pb-4 pt-2">
            <div class="flex flex-col items-center mr-7 message">
                <i class="fas fa-message text-gray-500 text-2xl pt-1" @click.stop="showMsg">
                    <span class="hidden">通知</span>
                </i>
                <Notification v-show="showMessage" />
            </div>
            <div class="text-2xl mr-7 text-gray-500 message">
                <i class="fab fa-delicious" @click="clickFull">
                    <span class="hidden">全屏</span>
                </i>
            </div>
            <div class="group">
                <div class="flex justify-center items-center">
                    <img :src="userInfo.avator" class="w-10 h-10 rounded-full object-cover">
                    <span class="ml-4 text-lg">机烛</span>
                </div>
                <div class="hidden group-hover:block absolute top-10 mt-2 border-2 shadow-md rounded-xl bg-white z-10">
                    <div class="my-2">
                        <a class="border-b py-2 px-3 hover:bg-slate-400 cursor-pointer">个人中心</a>
                    </div>
                    <div class="my-2">
                        <a class="border-b py-2 px-3 hover:bg-slate-400 cursor-pointer">会员中心</a>
                    </div>
                    <div class="my-2">
                        <a class="px-3 py-2 hover:bg-slate-400 cursor-pointer" @click="utils.user.userLogout">退出登录</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.message {
    @apply relative;

    i {
        &:hover {
            span {
                @apply block absolute w-12 text-lg top-10 -left-1 bg-white;
            }
        }
    }
}
</style>