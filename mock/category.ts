import { Random } from 'mockjs';
import { MockMethod } from "vite-plugin-mock"

export default [
    {
        url: '/goods/category',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: '请求成功',
                data: new Array(6).fill(0).map((_r, index) => {
                    return {
                        id: index,
                        title: Random.ctitle(2,5),
                        content: Random.cparagraph(),
                    }
                })
            }
        }
    },
] as MockMethod[]