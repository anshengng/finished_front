import { MockMethod } from "vite-plugin-mock"

export default [
    {
        url: '/goods/list',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: '上传成功',
                data: [
                    {
                        id: 1,
                        name: '商品1',
                        price: 10000,
                        stock: 100,
                        categoryId: 1,
                        img: '/public/images/category/phone.png',
                        description: '测试dw啥u那个康师傅'
                    },
                    {
                        id: 2,
                        name: '商品1',
                        price: 1000,
                        stock: 100,
                        categoryId: 1,
                        img: '/public/images/category/phone.png',
                        description: '测试'
                    },
                    {
                        id: 3,
                        name: '商品1',
                        price: 10000,
                        stock: 100,
                        categoryId: 1,
                        img: '/public/images/category/phone.png',
                        description: '测试dw啥u那个康师傅'
                    },
                    {
                        id: 4,
                        name: '商品1',
                        price: 1000,
                        stock: 100,
                        categoryId: 1,
                        img: '/public/images/category/phone.png',
                        description: '测试'
                    },
                    {
                        id: 5,
                        name: '商品1',
                        price: 1000,
                        stock: 100,
                        categoryId: 1,
                        img: '/public/images/category/phone.png',
                        description: '测试'
                    }, {
                        id: 6,
                        name: '商品1',
                        price: 10000,
                        stock: 100,
                        categoryId: 1,
                        img: '/public/images/category/phone.png',
                        description: '测试dw啥u那个康师傅'
                    },
                    {
                        id: 7,
                        name: '商品1',
                        price: 1000,
                        stock: 100,
                        categoryId: 1,
                        img: '/public/images/category/phone.png',
                        description: '测试'
                    },
                    {
                        id: 8,
                        name: '商品1',
                        price: 10000,
                        stock: 100,
                        categoryId: 1,
                        img: '/public/images/category/phone.png',
                        description: '测试dw啥u那个康师傅'
                    },
                    {
                        id: 9,
                        name: '商品1',
                        price: 1000,
                        stock: 100,
                        categoryId: 1,
                        img: '/public/images/category/phone.png',
                        description: '测试'
                    },
                    {
                        id: 10,
                        name: '商品1',
                        price: 1000,
                        stock: 100,
                        categoryId: 1,
                        img: '/public/images/category/phone.png',
                        description: '测试'
                    }
                ]
            }
        }
    },
] as MockMethod[]