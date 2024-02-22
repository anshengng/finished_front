import { ICategory, getCategory } from "@/apis/category";
import { IGood, getGoods } from "@/apis/goods";
import { ref } from "vue";


export async function useGoodList() {
    let goodList = ref<IGood[]>([])
    let categoryList = ref<ICategory[]>([])

    const getCategoryList = async () => {
        const res = await getCategory()
        categoryList.value = res.data
    }

    const getGoodList = async () => {
        const res = await getGoods()
        goodList.value = res.data
    }

    return {
        goodList,
        categoryList,
        getGoodList,
        getCategoryList
    }
}
