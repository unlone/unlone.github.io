<template>
  <div>
    <div ref="chartRef" style="width:700px;height:400px;" ></div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import * as echarts from 'echarts';

export default defineComponent({
  name: 'EChartsDemo',
  setup() {
    const chartRef = ref(null);

    onMounted(() => {
      const myChart = echarts.init(chartRef.value);
      const option = {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#00A5E2' }, // 渐变色的起始颜色
          { offset: 1, color: '#08B04B' } // 渐变色的结束颜色
        ]),
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '10%', // 调整左边距
          right: '10%', // 调整右边距
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['2022年产业规模', '2022年项目投资', '2023年产业规模（计划）', '2023年项目投资（计划）'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              color: 'white', // 设置文字颜色
              fontSize: 14, // 设置文字大小
              interval: 0 // 设置刻度标签显示全部，即每列都显示
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: 'white', // 设置文字颜色
              fontSize: 14 // 设置文字大小
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '50%', // 调整柱状图的宽度
            data: [2500, 250, 2600, 250],
            
          }
        ]
      };
      myChart.setOption(option);
    });

    return {
      chartRef
    };
  }
});
</script>

<style>

</style>