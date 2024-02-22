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
                        content: '',
                        img: '/public/images/category/phone.png'
                    },
                    {
                        id: 2,
                        title: '电脑',
                        content: '',
                        img: '/public/images/category/phone.png'
                    },
                    {
                        id: 3,
                        title: '平板',
                        content: '',
                        img: '/public/images/category/phone.png'
                    },
                    {
                        id: 4,
                        title: '手表',
                        content: '',
                        img: '/public/images/category/phone.png'
                    },
                    {
                        id: 5,
                        title: '电视',
                        content: '',
                        img: '/public/images/category/phone.png'
                    },
                    {
                        id: 6,
                        title: '耳机',
                        content: '',
                        img: '/public/images/category/phone.png'
                    },
                    {
                        id: 7,
                        title: '音响',
                        content: '',
                        img: '/public/images/category/phone.png'
                    }
                ]
            }
        }
    },
] as MockMethod[]