<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
const modules = [Keyboard, Scrollbar, Navigation, Pagination]
</script>


<template>
    <div class="swiper w-screen h-[550px] bg-cyan-400">
        <swiper :slidesPerView="1" :centeredSlides="false" :slidesPerGroupSkip="1" :grabCursor="true" :keyboard="{
            enabled: true,
        }" :breakpoints="{
    '769': {
        slidesPerView: 2,
        slidesPerGroup: 2,
    },
}" :scrollbar="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper ">
            <swiper-slide><img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" /></swiper-slide>
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
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}

.swiper-slide img {
    display: block;
    width: 100%;
}

@media only screen and (min-width: 769px) {
    .swiper-slide:first-child {
        transition: transform 100ms;
    }

    .swiper-slide:first-child img {
        transition: box-shadow 500ms;
    }

    .swiper-slide.swiper-slide-active:first-child {
        transform: translateX(50%);
        z-index: 2;
    }

    .swiper-slide.swiper-slide-active:first-child img {
        box-shadow: 0px 32px 80px rgba(0, 0, 0, 0.35);
    }

    .swiper-slide:nth-child(2) {
        transition: transform 100ms;
    }

    .swiper-slide.swiper-slide-next:nth-child(2) {
        transform: translateX(55%);
        z-index: 1;
    }

    .swiper[dir="rtl"] .swiper-slide.swiper-slide-active:first-child {
        transform: translateX(-50%);
    }

    .swiper[dir="rtl"] .swiper-slide.swiper-slide-next:nth-child(2) {
        transform: translateX(-55%);
    }
}

.mySwiper {
    @apply h-[600px]
}
</style>