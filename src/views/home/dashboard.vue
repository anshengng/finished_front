<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
const modules = [EffectFade, Navigation, Pagination]
let showSideBar = ref(false)
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 250) {
        showSideBar.value = true
    } else {
        showSideBar.value = false
    }
})
</script>


<template>
    <div class="swiper w-full h-[1000px] bg-cyan-400">
        <swiper :effect="'fade'" :navigation="true" :pagination="{
            clickable: true,
        }" :modules="modules" class="mySwiper">
            <swiper-slide><img class="swiper-item" src="/images/swiper1.jpg" /></swiper-slide>
            <swiper-slide><img class="swiper-item" src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
            <swiper-slide><img class="swiper-item" src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide>
        </swiper>
    </div>
    <main class="relative w-[63%] min-h-[1500px] bg-pink-300">
        <div>
            <div class="category">
                <CategoryBar></CategoryBar>
            </div>
        </div>
        <div class="fixed right-[1px] bottom-[20px]">
            <SideBar v-if="showSideBar"></SideBar>
        </div>
    </main>
</template>


<style lang="scss" scoped>
.mySwiper {
    @apply h-full;
}

.swiper-item {
    @apply h-full object-cover;
}
</style>