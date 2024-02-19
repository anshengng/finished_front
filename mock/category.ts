import { MockMethod } from "vite-plugin-mock"

export default [
    {
        url: '/goods/category',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: '请求成功',
                data: [
                    {
                        id: 1,
                        title: '手机',
                        content: ''
                    },
                    {
                        id: 2,
                        title: '电脑',
                        content: ''
                    },
                    {
                        id: 3,
                        title: '电视',
                        content: ''
                    },
                    {
                        id: 4,
                        title: '手表',
                        content: ''
                    },
                    {
                        id: 5,
                        title: '平板',
                        content: ''
                    },
                    {
                        id: 6,
                        title: '无人机',
                        content: ''
                    },
                    {
                        id: 7,
                        title: '服务中心',
                        content: ''
                    }
                ]
            }
        }
    },
] as MockMethod[]