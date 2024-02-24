<script setup lang="ts">
import { useGoodList } from '@/composable/goods/useGoods';
import router from '@/router';


const { categoryList, getCategoryList, goodList, getGoodList } = await useGoodList()

await getGoodList()
await getCategoryList()

const goodDetail = (id: number) => {
    router.push({
        path: '/detail',
        query: {
            id: id
        }
    })

}
</script>


<template>
    <img src="/public/images/homeBox/phone-banner.png" alt="" class="w-full mt-4">
    <div class="w-full bg-slate-100 my-3 flex flex-col" v-for="item in categoryList.slice(0, 3)" :key="item.id">
        <div class="banner w-full">
            <div class="box-head my-3 font-light text-2xl flex justify-between items-center">
                <p>{{ item.title }}</p>
                <div class="font-light text-lg cursor-pointer">
                    查看更多
                    <i class="fas fa-right-from-bracket opacity-50"></i>
                </div>
            </div>
        </div>
        <div class="w-full grid grid-cols-5 cursor-pointer my-2">
            <div class="w-[280px] bg-white flex flex-col justify-center items-center rounded-md goods_box my-2"
                v-for="item in goodList" :key="item.id" @click="goodDetail(item.id)">
                <img :src="item.img" alt="" class="w-[65%] h-full my-3 object-contain">
                <p class="text-sm mt-1">{{ item.name }}</p>
                <p class="font-thin text-xs my-1">{{ item.description }}</p>
                <p class="price font-sans text-xs my-1 mb-4 text-orange-600">{{ item.price }}元起</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.goods_box {
    transition: all .3s linear;
}

.goods_box:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
    transform: translate3d(0, -4px, 0);
}
</style>