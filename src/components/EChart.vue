<template>
  <div style="height: 100%;" ref="echart"></div>
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    chartData: {    // 尝试props验证方式
      type: Object,
      default() {
        return {
          xData: [],
          series: []
        }
      }
    },
    isAxisChart: {   // 有没有坐标轴变量判断
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      echart: null,   // EChart需要个容器，还需要初始化，用个变量指明容器不容易出错
      /* option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
    ]
}; */
      axisOption: {   // 有坐标轴的图表 写一些固定参数，主要数据还是来自于父组件
        legend: {
          textStyle: {
            color: '#333'
          }
        },
        grid: {
          left: '20%'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: 
          {
            type: "category",
            data: [],
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            },
            axisLabel: {
              color: '#333'
            }
          },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            }
          }
        ],
        color: [
          '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80','#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa','#07a2a4','#9a7fd1','#588dd5',
          '#f5994e','#c05050','#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
        ],
        series: []  // 
      },
      normalOption: {   // 没坐标轴的图表
        tooltip: {
          trigger: 'item'
        },
        color: ['#0f78f4','#dd536b','#9462e5','#a6a6a6','#e1bb22','#39c362','#3ed1cf'],
        series: []
      }
    };
  },

  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;   // 用计算属性判断输出对应图表的配置，就是源码初始化要的option
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse   // 判断折叠菜单
    }
  },

  watch: {  // 监听一下，传入数据就调用渲染图表方法
    chartData: {
      handler: function() {
        this.initChart();
      },
      deep: true
    },   
    isCollapse() {  // 监听折叠菜单，触发图标resize
      setTimeout(() => {
        this.resizeChart()
      }, 300)
    }
  },

  methods: {
    initChart() {   // 初始化
      this.initChartData();
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);  // 如果没有容器，用ref找到DOM元素，更高效一些
        this.echart.setOption(this.options);
      }
    },
    initChartData() {   // 初始化图表数据，先判断一下图表类型，再渲染数据 
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
      } else {
        this.normalOption.series = this.chartData.series    
      }
    },
    resizeChart() {   // 图表自适应方法
      this.echart ? this.echart.resize() : ''
    }
  },

  mounted() {
    window.addEventListener('resize', this.resizeChart)
  },

  destroyed() { // 避免内存泄漏
    window.removeEventListener('resize', this.resizeChart)
  }
};
</script>

<style lang="scss" scoped>
</style>