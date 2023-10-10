<template>
  <div class="or-container">
    <div
      class="box"
      :class="eleindex == i ? 'eleactive' : ''"
      v-for="(ele, i) in piclist"
      :key="i"
      @mouseenter="enter(i)"
      @mouseleave="out(i)"
    >
      <img :src="ele.img" />
      <div class="text-overlay" :class="eleindex == i ? 'show-text' : ''">
        <span>{{ ele.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eleindex: -1,
      piclist: [
        { bg: '../assets/accordion/image1.png', img: '../assets/accordion/image1.png', text: '成都大熊猫繁育研究基地二期“熊猫塔”' },
        { bg: '../assets/accordion/image2.png', img: '../assets/accordion/image2.png', text: '成都宽窄巷子的MAOin成都熊猫天团' },
        { bg: '../assets/accordion/image3.png', img: '../assets/accordion/image3.png', text: '成都熊猫国际旅游度假区' },
        { bg: '../assets/accordion/image4.png', img: '../assets/accordion/image4.png', text: '独立熊猫IP驻场音乐剧作品《熊猫》' },
      ],
    };
  },
  methods: {
    enter(i) {
      this.eleindex = i;
    },
    out() {
      this.eleindex = -1;
    },
  },
};
</script>

<style>
/* Accordion styles */
.or-container {
  display: flex;
  width: 100%;
  padding: 4% 2%;
  box-sizing: border-box;
  height: 500px;
}
.or-container:before {
  background-color: rgba(0, 0, 0, 0.4);
}

.box {
  position: relative; /* Add relative positioning to the box */
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  line-height: 0;
  margin-right: 5px; /* Add margin between the boxes */
}

.box:last-child {
  margin-right: 0;
}

.box > img {
  width: 100%;
  height: 400px; /* Set the image height to 400px */
  -o-object-fit: cover;
  object-fit: cover;
  transition: 0.5s;
}

.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 0; /* Adjust the top and bottom padding */
  background-color: rgba(0, 0, 0, 0); /* Set the background color to transparent */
  color: #fff;
  font-size: 20px; /* Increase the font size */
  text-align: center;
  margin-bottom: 10px;
  transition: 0.5s;
  opacity: 0;
}

.show-text {
  background-color: rgba(0, 0, 0, 0); /* Set the background color to semi-transparent */
  opacity: 1;
}

.box > span {
  font-size: 30px; /* Increase the font size */
  display: block;
  text-align: center;
  height: 100px; /* Increase the height */
  line-height: 100px; /* Set the line height to match the height */
}

.eleactive {
  flex: 2 1 30%; /* Increase the flex-grow value */
}

.eleactive > img {
  width: 100%;
  height: 100%;
}
/* end */
</style>