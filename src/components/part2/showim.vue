<template>
  <div class="container">
    <div class="image-container" v-for="(image, index) in images" :key="index">
      <img :src="image.src" :style="{ opacity: image.opacity }" @click="toggleImageOpacity(index)" class="images">
      <p v-if="image.showText" class="centered-text" :style="{ color: `rgba(255, 255, 255, ${image.textOpacity})` }">{{ image.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: '../assets/mail/im1.png', opacity: 1, showText: false, text: '无贫困', textOpacity: 0 },
        { src: '../assets/mail/im2.png', opacity: 1, showText: false, text: '零饥饿', textOpacity: 0 },
		{ src: '../assets/mail/im3.png', opacity: 1, showText: false, text: '良好健康与福祉', textOpacity: 0 },
		{ src: '../assets/mail/im4.png', opacity: 1, showText: false, text: '优质教育', textOpacity: 0 },
		{ src: '../assets/mail/im15.png', opacity: 1, showText: false, text: '陆地生物', textOpacity: 0 },
		{ src: '../assets/mail/im6.png', opacity: 1, showText: false, text: '清洁饮水和卫生设施', textOpacity: 0 },
		{ src: '../assets/mail/im7.png', opacity: 1, showText: false, text: '经济适用和清洁能源', textOpacity: 0 },
		{ src: '../assets/mail/im8.png', opacity: 1, showText: false, text: '体面工作和经济增长', textOpacity: 0 },
		{ src: '../assets/mail/im9.png', opacity: 1, showText: false, text: '产业、创新和基础设施', textOpacity: 0 },
		{ src: '../assets/mail/im10.png', opacity: 1, showText: false, text: '减少不平等', textOpacity: 0 },
		{ src: '../assets/mail/im11.png', opacity: 1, showText: false, text: '可持续城市和社区', textOpacity: 0 },
		{ src: '../assets/mail/im12.png', opacity: 1, showText: false, text: '负责任消费和生产', textOpacity: 0 },
		{ src: '../assets/mail/im13.png', opacity: 1, showText: false, text: '气候行动', textOpacity: 0 },
		{ src: '../assets/mail/im14.png', opacity: 1, showText: false, text: '水下生物', textOpacity: 0 },
		{ src: '../assets/mail/im17.png', opacity: 1, showText: false, text: '促进目标实现的伙伴关系', textOpacity: 0 },
		{ src: '../assets/mail/im5.png', opacity: 1, showText: false, text: '性别平等', textOpacity: 0 },
		{ src: '../assets/mail/im16.png', opacity: 1, showText: false, text: '和平、正义与强大机构', textOpacity: 0 },
      ]
    }
  },
  methods: {
   toggleImageOpacity(index) {
     this.animateOpacity(index, 1, 0.5, 1000, () => {
       this.images[index].showText = true; // 将 showText 设置为 true
       this.animateTextOpacity(index, 0, 1, 1000);
     });
   },
    animateOpacity(index, start, end, duration, callback) {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const opacity = start + (end - start) * (progress / duration);
        this.images[index].opacity = opacity;
        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else {
          if (callback && typeof callback === 'function') {
            callback();
          }
        }
      };
      window.requestAnimationFrame(step);
    },
    animateTextOpacity(index, start, end, duration) {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const opacity = start + (end - start) * (progress / duration);
        this.images[index].textOpacity = opacity;
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
}

.image-container {
  position: relative;
  width: 30%;
  margin-bottom: 10px;
}

.centered-text {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
}
.images {
  width: 300px;
}
</style>