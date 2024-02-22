import { http } from "@/plugins/axios";
export interface ICategory {
    id: number
    title: string
    content: string
    img: string
}

export async function getCategory() {
    return http.request<ICategory[]>({
        url: `goods/category`,
    })
}
