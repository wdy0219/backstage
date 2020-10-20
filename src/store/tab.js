import Cookie from 'js-cookie'

export default {
    state: {
        menu: [],
        currentMenu: null,
        isCollapse: false,
        tabLists: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home"
              }
        ]
    },
    mutations: {
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        clearMenu(state) {
            state.menu = [],
            Cookie.remove('menu')
        },
        addMenu(state, router) {
            if (!Cookie.get('menu')) {
                return
            }
            let menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            let currentMenu = [
                {
                    path: '/',
                    component: () => import(`@/views/Main`),
                    children: []
                }
            ]
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`@/views/${item.url}`)
                        return item
                    })
                    currentMenu[0].children.push(...item.children)
                }else {
                    item.component = () => import(`@/views/${item.url}`)
                    currentMenu[0].children.push(item)
                }
            })
            router.addRoutes(currentMenu)
        },
        selectMenu(state, val) {    // val使用点击事件触发方法传进来的值，每次点击传递都不一样，面包屑采用赋值，tab采用追加
            if (val.name !== 'home') {
                state.currentMenu = val     // 实现头部面包屑
                let result = state.tabLists.findIndex(item => item.name === val.name) // 去重，找不到返回-1
                result === -1 ? state.tabLists.push(val) : ''   // 实现tab显示效果
            }else {
                state.currentMenu = null
            }
        },
        closeTab(state, val) {      // 删除tag
            let result = state.tabLists.findIndex(item => item.name === val.name)
            state.tabLists.splice(result, 1)
        },
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse    // 取反 切换侧边栏收缩
        }
    },
    actions: {},
}