<template>
  <div class="water-wave">
    <div class="boll-container">
		<div class="boll1">
			<div ref="liquidEchart1" style="width: 200px; height: 200px" >
			</div>
			<div class="boll-text">全市地铁站50米范围公交站配置比例</div>
		</div>
  
       <div class="boll2">
      	    <div ref="liquidEchart2" style="width: 200px; height: 200px" >
      	     </div>
			  <div class="boll-text">成都中心城区绿色出行分担率</div>
       </div>
	   
	   
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import 'echarts-liquidfill'

export default defineComponent({
  name: 'WaterWave',
  setup() {
    const liquidEchart1 = ref<HTMLElement | null>(null)
    const liquidEchart2 = ref<HTMLElement | null>(null)

    onMounted(() => {
      initLiquidEchart(liquidEchart1, 0.91, '#00A5E2', '全市地铁站50米范围公交站配置比例') // 第一个水球显示 "全市地铁站50米范围公交站配置比例"
      initLiquidEchart(liquidEchart2, 0.69, '#08B04B', '成都中心城区绿色出行分担率') // 第二个水球显示 "成都中心城区绿色出行分担率"
    })
      
    const initLiquidEchart = (container: any, value: number, color: string, label: string) => {
      const myChart = echarts.init(container.value)
      
      myChart.setOption({
        title: {
          text: '',
          textStyle: {
            color: '#888',
            fontFamily: 'Microsoft YaHei',
            fontSize: 24,
            fontWeight: '400',
            align: 'center',
            baseline: 'middle',
            position: 'inside',
            verticalAlign: 'middle',
          },
          left: 'center',
          top: '20%',
        },
        series: [
          {
            type: 'liquidFill',
            radius: '78%',
            waveAnimation: true,
            center: ['50%', '50%'],
            color: [color], // 设置水球的颜色
            data: [value],
            amplitude: 10,
            itemStyle: {
              opacity: 1,
              shadowBlur: 0,
            },
            backgroundStyle: {
              borderWidth: 1,
              borderColor: '#96C24E',
              color: '#fff',
            },
            label: {
              show: true,
              position: 'inside',
              textStyle: {
                color: 'white',
                insideColor: '#fff',
                fontSize: 30,
                fontWeight: 600,
              },
              formatter: (params: any) => {
                return `${(params.value * 100).toFixed(1)}%`
              },
            },
            outline: {
              show: false,
            },
          },
        ],
        tooltip: {
          trigger: 'item',
          formatter: (params: any) => {
            return label; // 在鼠标悬停时显示水球的文字
          },
        },
      })
    }

    return { liquidEchart1, liquidEchart2 }
  },
})
</script>

<style>
  .boll1 {
    float: left;
  }
  
  .boll2 {
    float: right;
  }
  .boll-text{
	  font-size: 20px;
	  text-align: center;
	  width: 200px;
	  font-family: "SIYUAN";
  }

</style>