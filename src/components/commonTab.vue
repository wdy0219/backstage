<template>
  <div class="tabs">
    <el-tag
      :key="tag.name"
      size="small"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      tags: state => state.tab.tabLists
    })
  },
  methods: {
    ...mapMutations({
      close: "closeTab"   // 可以直接获取mutations方法的并传参，但试试直接用字符串的方式
    }),
    handleClose(tag) {
      this.close(tag);
    },
    changeMenu(item) {    // 点击tag也可以跳转路由
      if (this.$route.name != item.name) {
        this.$router.push({name: item.name})
      }else {
        return false
      }
      this.$store.commit('selectMenu', item)    // 补充：点击tag面包屑同步改变，这才合理
    }
  } 
};
</script>

<style lang="scss" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>