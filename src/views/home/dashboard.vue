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

</script>


<template>
    <div class="swiper w-screen h-[700px] bg-cyan-400">
        <swiper :spaceBetween="30" :effect="'fade'" :navigation="true" :pagination="{
            clickable: true,
        }" :modules="modules" class="mySwiper">
            <swiper-slide class="z-1"><img class="swiper-item" src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
            <swiper-slide><img class="swiper-item" src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide>
            <swiper-slide><img class="swiper-item" src="/images/swiper1.jpg" /></swiper-slide>
        </swiper>
    </div>
    <main class="relative w-[63%] min-h-[1500px] bg-pink-300">
        <div>
            <div class="category"></div>
        </div>
        <div class="fixed right-[1rem] bottom-[20px]">
            <SideBar></SideBar>
        </div>
    </main>
</template>


<style lang="scss" scoped>
.mySwiper {
    @apply h-full pr-3;
}
.swiper-item {
    z-index: 1;
    @apply h-full object-cover;
}

</style>