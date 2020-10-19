export default {
    getMenu: config => {
        const { username, password } = JSON.parse(config.body)
        console.log(JSON.parse(config.body))
        // 先判断用户是否存在
        if (usrename === 'admin' || username === 'wp') {
            // 判断账号密码是否对应
            if (username === 'admin' && password === '123456') {
                return {
                    code: 2000,
                    data: {
                        menu: [
                            {
                                path: '/',
                                name: 'home',
                                label: 's-home',
                                url: 'Home/Home'
                            },
                            {
                                path: '/video',
                                name: 'video',
                                label: '视频管理页',
                                icon: 'video-play',
                                url: 'VideoManage/UserManage'
                            },
                            {
                                path: '/user',
                                name: 'user',
                                label: '用户管理页',
                                icon: 'user',
                                url: 'UserManage/UserManage'
                            },
                            {
                                label: '其他',
                                icon: 'location',
                                children: [
                                    {
                                        path: '/page1',
                                        name: 'page1',
                                        label: '页面1',
                                        icon: 'setting',
                                        url: 'Other/PageOne'
                                    },
                                    {
                                        path: '/page2',
                                        name: 'page2',
                                        label: '页面2',
                                        icon: 'setting',
                                        url: 'Other/PageTwo'
                                    }
                                ]
                            }
                        ],
                        message: '获取成功'
                    }
                }
            }else if (username === 'wp' && password ==='123456') {
                return {
                    code: 2000,
                    data: {
                        menu: [
                            {
                                
                            }
                        ]
                    }
                }
            }
        }else {
            return {
                code: -999,
                data: {
                    message: '用户不存在',
                }
            }
        }
    }
}