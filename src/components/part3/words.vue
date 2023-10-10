<template>
  <div>
    <canvas ref="canvas"></canvas>
    <div class="wordcloud-container" ref="echartsContainer"></div>
  </div>
</template>

<script>
import wordcloud from 'wordcloud';
import * as echarts from 'echarts';

export default {
  mounted() {
    const canvas = this.$refs.canvas;
    const echartsContainer = this.$refs.echartsContainer;

    const width = 1000;
    const height = 1000;
    canvas.width = width;
    canvas.height = height;

const words2 = [
	  { text: '成都', size: 8 },
	  { text: '大熊猫', size: 6 },
	  { text: '蓉宝', size: 8 },
	  { text: '科梦', size: 5 },
	  { text: '启点', size: 4 },
	  { text: 'Panda', size: 7 },
	  { text: 'Rongbao', size: 7 },
	  { text: 'cute', size: 6 },
	  { text: 'cool', size: 7 },
	  { text: '萌', size: 6 },
	  { text: '酷', size: 5 },
	  { text: 'Chengdu', size: 8 },
	  { text: 'FISU', size: 7 },
	  { text: '可爱', size: 9 },
	  { text: 'giant panda', size: 7 },
	  { text: '憨态可掬', size: 6 },
	  { text: 'lovely', size: 7 },
	  { text: 'China', size: 7 },
	  { text: '读书', size: 8 },
  	  { text: '电影院', size: 7 },
  	  { text: '音乐会', size: 8 },
  	  { text: '博物馆', size: 6 },
  	  { text: '画廊', size: 5 },
  	  { text: '游乐场', size: 7 },
  	  { text: '剧院', size: 7 },
  	  { text: '绘画', size: 6 },
  	  { text: '书法', size: 7 },
  	  { text: '编曲', size: 7 },
  	  { text: '远足', size: 6 },
	  { text: '四川', size: 7 },
	    { text: '川菜', size: 6 },
	    { text: '宽窄巷子', size: 6 },
	    { text: '锦里', size: 7 },
	    { text: '蜀绣', size: 6 },
	    { text: '青城山', size: 7 },
	    { text: '熊猫基地', size: 8 },
	    { text: '熊猫保护', size: 7 },
	    { text: '熊猫繁育', size: 7 },
	    { text: '熊猫之都', size: 7 },
	    { text: '文化之都', size: 7 },
	    { text: '旅游景点', size: 7 },
	    { text: '世界自然遗产', size: 8 },
	    { text: '生态环境', size: 6 },
	    { text: '饮食文化', size: 7 },
	    { text: '独特风情', size: 6 },
	    { text: '地标建筑', size: 7 },
	    { text: '历史文化', size: 7 },
	    { text: '人文景观', size: 7 },
];
    const colors = ['#506050','#A0C0A8', '#BBDOE4', '#BFA7D9', '#DABCA4','#C8D8B8','#E0E8C8','#E5E8DA','#3B5173','#E3EFFD','#5D87A8','#DCEEFA','#6A6BAB','#8988C4','#A3A5DE',"#BCC7F43"];

    const options2 = {
      list: words2.map((word) => [word.text, word.size]),
      gridSize: Math.round(4 * canvas.width / 1024), // 调整网格大小
      weightFactor: function (size) {
        return Math.pow(size, 2) * canvas.width / 1024;
      },
      fontFamily: 'Arial, Helvetica, sans-serif',
      color: function () {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      },
      rotateRatio: 0.5,
      backgroundColor: 'transparent',
      shape: '../assets/bounce/image3.png', // 设置形状图像的URL
    };

    wordcloud(canvas, options2);

    const chart = echarts.init(echartsContainer);

    const wordsEcharts = words2.map((word) => ({
      name: word.text,
      value: word.size,
    }));
    const seriesEcharts = [
      {
        type: 'wordCloud',
        shape: 'circle',
        left: 'center',
        top: 'center',
        width: '60%',
        height: '100%',
        textStyle: {
          normal: {
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'bold',
            color: function () {
              const randomIndex = Math.floor(Math.random() * colors.length);
              return colors[randomIndex];
            },
          },
        },
        data: wordsEcharts,
      },
    ];
    const optionEcharts = {
      series: seriesEcharts,
    };

    chart.setOption(optionEcharts);
  },
};
</script>