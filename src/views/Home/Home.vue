<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">特朗普</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2020-10-1</span></p>
          <p>上次登录地点：<span>广州</span></p>
        </div>
      </el-card>
      <!-- 有空换成可排序的表格 -->
      <el-card shadow="hover" style="height:522px; margin-top:20px">
        <el-table :data="tableData">
            <el-table-column show-overflow-tooltip v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="16">
      <div class="num">
        <el-card
          shadow="hover"
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>

      <el-card shadow="hover">
        <echart style="height: 280px;" :chartData="echartData.order"></echart>
      </el-card>

      <div class="graph">
        <el-card shadow="hover">
          <echart style="height: 260px;" :chartData="echartData.user"></echart>
        </el-card>
        <el-card shadow="hover">
          <echart style="height: 260px;" :chartData="echartData.video" :isAxisChart="false"></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Echart from '../../components/EChart'

export default {
  components: {
        Echart
  },

  data() {
    return {
      userImg: require("../../assets/images/head_img.jpg"),
      countData: [  // 光有mock数据不行，还要给表头写个数据
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "今日收藏订单",
          value: 234,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "今日未支付订单",
          value: 122,
          icon: "s-goods",
          color: "#5ab1ef"
        },
        {
          name: "本月支付订单",
          value: 11234,
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "本月收藏订单",
          value: 534,
          icon: "star-on",
          color: "#ffb980"
        },
        {
          name: "本月未支付订单",
          value: 12,
          icon: "s-goods",
          color: "#5ab1ef"
        }
      ],
      tableData: [],
      tableLabel: {
          name: '水果',
          todayBuy: '今日购买',
          monthBuy: '本月购买',
          totalBuy: '总购买'
      },
      echartData: {   // 给三个图表数据统一放一块
          order: {
              xData: [],
              series: []    // 存放项目
          },
          user: {
              xData: [],
              series: []
          },
          video: {
              series: []
          }
      }
    }
  },

  methods: {
    getTableData() {
      this.$http.get("/home/getData").then(res => {  
        // console.log(res.data);
        // 表格
        res = res.data
        this.tableData = res.data.tableData   
        // console.log(this.tableData);

        // 应该是封装个EChart的，每个单独写数据跟方法重复了，这里就写判断方法和传递数据给封装的子组件
        // 订单折线图
        const order = res.data.orderData    // 两个res
        this.echartData.order.xData = order.date    // x轴类目
        let keyArray = Object.keys(order.data[0])   // 避免命名太多，series中的name就用键名来替代
        // console.log(keyArray);
        keyArray.forEach(key => {
            this.echartData.order.series.push({
                name: key === 'Apple' ? '苹果' : key,   // 把后端传来的英文名改成中文名
                data: order.data.map(item => item[key]),
                type: 'line'
            })
        })

        // 用户柱状图
        this.echartData.user.xData = res.data.userData.map(item => item.date)
        this.echartData.user.series.push({
          name: '新增用户',
          data: res.data.userData.map(item => item.new),
          type: 'bar'
        })
        this.echartData.user.series.push({
          name: '活跃用户',
          data: res.data.userData.map(item => item.active),
          type: 'bar'
        })

        // 视频饼图
        this.echartData.video.series.push({
          data: res.data.videoData,
          type: 'pie'
        })
      });
    }
  },

  created() {
      this.getTableData()
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home.scss";
</style>