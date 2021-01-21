// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
import ECharts from 'vue-echarts'

// 手动引入 ECharts 各模块来减小打包体积

// 注册 ECharts
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/component/polar'
// import 'echarts/lib/chart/pie'
import 'echarts'

export default async ({ Vue }) => {
  // something to do
  Vue.component('v-chart', ECharts)
}
