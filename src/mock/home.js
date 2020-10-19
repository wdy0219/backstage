import Mock from 'mockjs'

let List = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    Lemon:Mock.Random.float(100,8000,0,2),
                    Banana:Mock.Random.float(100,8000,0,2),
                    Apple:Mock.Random.float(100,8000,0,2),
                    Mango:Mock.Random.float(100,8000,0,2),
                    Durian:Mock.Random.float(100,8000,0,2),
                    Pear:Mock.Random.float(100,8000,0,2),
                })
            )
        }
 
        return {
            code: 2000,
            data: {
                videoData: [
                    {
                        name: 'Lemon',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'Banana',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'Apple',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'Mango',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'Durian',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'Pear',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    }
                ],
                userData: [
                    {
                        date: '周一',
                        new: Mock.Random.integer(10, 100),
                        active: Mock.Random.integer(200, 1000)
                    },
                    {
                        date: '周二',
                        new: Mock.Random.integer(10, 100),
                        active: Mock.Random.integer(200, 1000)
                    },
                    {
                        date: '周三',
                        new: Mock.Random.integer(10, 100),
                        active: Mock.Random.integer(200, 1000)
                    },
                    {
                        date: '周四',
                        new: Mock.Random.integer(10, 100),
                        active: Mock.Random.integer(200, 1000)
                    },
                    {
                        date: '周五',
                        new: Mock.Random.integer(10, 100),
                        active: Mock.Random.integer(200, 1000)
                    },
                    {
                        date: '周六',
                        new: Mock.Random.integer(10, 100),
                        active: Mock.Random.integer(200, 1000)
                    },
                    {
                        date: '周日',
                        new: Mock.Random.integer(10, 100),
                        active: Mock.Random.integer(200, 1000)
                    }
                    
                ],
                tableData: [
                    {
                        name: 'Lemon',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(10000, 100000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
                    },
                    {
                        name: 'Banana',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(10000, 100000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
                    },
                    {
                        name: 'Apple',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(10000, 100000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
                    },
                    {
                        name: 'Mango',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(10000, 100000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
                    },
                    {
                        name: 'Durian',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(10000, 100000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
                    },
                    {
                        name: 'Pear',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(10000, 100000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
                    }
                ],
                orderData: {
                    date: [
                        "2020100" + Mock.Random.natural(0,9),
                        "2020100" + Mock.Random.natural(0,9),
                        "2020100" + Mock.Random.natural(0,9),
                        "2020100" + Mock.Random.natural(0,9),
                        "2020100" + Mock.Random.natural(0,9),
                        "2020100" + Mock.Random.natural(0,9),
                        "2020100" + Mock.Random.natural(0,9)
                    ],
                    data: [                       
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Lemon: Mock.Random.float(1000, 10000, 0, 2),
                            Banana: Mock.Random.float(1000, 10000, 0, 2),
                            Apple: Mock.Random.float(1000, 10000, 0, 2),
                            Mango: Mock.Random.float(1000, 10000, 0, 2),
                            Durian: Mock.Random.float(1000, 10000, 0, 2),
                            SpringBoot: Mock.Random.float(1000, 10000, 0, 2),
                        }
                        
                    ]
                }
            }


        }
    }
}