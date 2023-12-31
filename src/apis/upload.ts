import { http } from "@/plugins/axios";
export interface IUpload {
    url: string
}

export async function ImageUpload(data:FormData) {
    return http.request<IUpload>({
        url: `image`,
        method: 'post',
        data
    })
}
