<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#7a7a52"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <h3 v-show="!isCollapse">伊甸园水果后台管理系统</h3>
    <h3 v-show="isCollapse">伊甸园</h3>
    <!-- 单层菜单 -->
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <!-- 多层菜单 index为下拉菜单唯一标志，跟vue的key差不多，不过我本次只用了一个下拉菜单 -->
    <el-submenu index="index" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>

      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="(subItem, subIndex) in item.children"
          :key="subIndex"
          @click="clickMenu(subItem)"
        >
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home"
        },
        {
          path: "/video",
          name: "video",
          label: "视频管理",
          icon: "video-play"
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user"
        },
        {
          label: "其他",
          icon: "user",
          children: [
            // 二级页面
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting"
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting"
            }
          ]
        }
      ]
    };
  },

  methods: {
    clickMenu(item) {
      if (this.$route.name != item.name) {
        this.$router.push({name: item.name})  // data里设置了name属性就用name做路由跳转
      }else {
        return false
      }
      
      this.$store.commit("selectMenu", item);
    }
  },

  computed: {
    noChildren() {
      return this.menu.filter(item => !item.children);
    },
    hasChildren() {
      return this.menu.filter(item => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse   // 是否折叠侧边栏，默认false，判断变量和修改方法在vuex中，方便别的组件修改
    },
    menu() {
      return this.$store.state.tab.menu
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #ffffff;
    text-align: center;
    line-height: 48px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>