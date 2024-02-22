import { http } from "@/plugins/axios";
export interface IGood {
    id: number
    name: string
    description: string
    price: number
    stock: number
    img: string
    categoryId: number
}


export async function getGoods() {
    return http.request<IGood[]>({
        url: `goods/list`,
    })
}
