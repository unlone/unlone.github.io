<template>
  <el-timeline class="timeline">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'"
      :timestamp="activity.timestamp"
      placement="top"
    >
      <el-card>
        <div class="image-container">
          <img :src="activity.image" alt="Image">
        </div>
        <div class="activity-details">
          <h4 class="title">{{ activity.title }}</h4>
          <p class="content">{{ activity.content }}</p>
        </div>
      </el-card>
<!--      <div class="tiem_text">
        {{activity.text}}
      </div> -->
    </el-timeline-item>
  </el-timeline>
</template>
<script lang="ts" setup>
  const activities = [
    {
      title: '1990 北京亚运会 - 盼盼',
      content: '“盼盼”寓意盼望和平、友谊，盼望取得优异的成绩。当时，北京的大街小巷和电视媒体几乎都会出现这个左手举着金牌，右手大拇指点赞的大熊猫，他承载着中国人民的好客意向，更也是承载着国人的祝福。',
      timestamp: '',
	  text:"1990",
      image: '../assets/timeline/image1.png'
    },
    {
      title: '2008 北京奥运会 - 晶晶',
      content: '福娃的色彩与灵感源于奥林匹克五环，晶晶代表的是五环里黑色的一环。晶晶原型是来自广袤森林的大熊猫，象征着人与自然的和谐共存。他的头部纹饰源自宋瓷上的莲花瓣造型。',
      timestamp: '',
	  text:"2008",
      image: '../assets/timeline/image2.png'
    },
    {
      title: '2022 北京冬奥会 - 冰墩墩',
      content: '“冰”象征着纯洁、坚韧，“墩墩”寓意敦厚、健康、活泼。该形象将熊猫形象与富有超能量的冰晶外壳相结合。朝气蓬勃的冰墩墩迅速成为北京冬奥会的“顶流”。正式开幕当日，线上线下官方旗舰店售卖的冰墩墩商品均被一抢而空，出现面临一“墩”难求的局面。',
      timestamp: '',
	  text:"2022",
      image: '../assets/timeline/image3.png'
    },
  ]
</script>
<style scoped>
  /* `el-timeline`的容器`padding` */
  .timeline {
    padding: 50px;
    background-color: transparent;
  }
  /* 右侧`el-timeline-item`的样式，将原始时间轴组件整体移动到右半侧 */
  .timeline-right {
    left: 50%;
    width: 50%;
  }
  /* 左侧`el-timeline-item`的样式，同上，仅是为了方便下面的CSS样式修改 */
  .timeline-left {
    left: 50%;
    width: 50%;
  }
  /* 针对左侧内容修改样式，注意这里使用的scss */
  .timeline-left :deep(.el-timeline-item__wrapper) {
    right: 100%;
    padding: 0 19px 0 0;
    text-align: center;
  }
  /* 图片样式 */
  img {
    max-width: 100%;
    height: auto;
    margin-left: 350px;
  }
  /* 图片容器居中 */
  .image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  /* 标题样式 */
  .title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
    color: black;
    background-color: transparent;
    font-family: "SIYUAN";
  }
  /* 内容样式 */
  .content {
    font-size: 18px;
    line-height: 1.5;
    font-family: "SIYUAN";
  }
  /* 修改 timestamp 样式 */
  .timeline-left .el-timeline-item__timestamp {
    transform: translateX(-50%);
    font-weight: bold;
    font-size: 24px;
    color: white;
    font-family: "SIYUAN";
  }
  .el-card {
    background-color: transparent;
    border-color: transparent;
  }
  /* time-text 样式 */
  .timeline-right .time_text {
    position: absolute;
    top: 50%;
    left: -50%;
    transform: translateY(-50%);
    color: white;
    font-weight: bold;
    font-size: 24px;
    font-family: "SIYUAN";
  }
  .timeline-left .time_text {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    color: white;
    font-weight: bold;
    font-size: 24px;
    font-family: "SIYUAN";
  }
</style>