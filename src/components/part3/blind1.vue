<template>
  <div>
    <div class="card-container">
      <transition-group name="rotate-transition">
        <div class="card" :class="{ clicked: card.isClicked, darken: card.isClicked || card.darken }" v-for="(card, index) in cards" :key="index" @click="handleClick(card, index)">
          <div class="card-inner">
            <div class="card-front">
              <img v-bind:src="card.imageSrcFront" :style="{ width: imageSize, height: imageSize }" />
            </div>
            <div class="card-back">
              <img v-bind:src="card.imageSrcBack" :style="{ width: imageSize, height: imageSize }" />
            </div>
          </div>
        </div>
      </transition-group>
    </div>
   <div class="zoom-image-container" v-if="zoomImage" @click="resetCards">
     <img v-bind:src="zoomImageSrc" :style="{ width: '450px', height: '600px' }" />
     <div class="zoom-image-text">{{ zoomImageText }}</div>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { isClicked: false, imageSrcFront: '../assets/blindbox/card-face.png', imageSrcBack: '../assets/blindbox/card-back1.jpg' ,text:'黑破脸'},
        { isClicked: false, imageSrcFront: '../assets/blindbox/card-face.png', imageSrcBack: '../assets/blindbox/card-back2.jpg' ,text:'黄花三块瓦脸'},
        { isClicked: false, imageSrcFront: '../assets/blindbox/card-face.png', imageSrcBack: '../assets/blindbox/card-back3.jpg' ,text:'黄花三块瓦脸' },
        { isClicked: false, imageSrcFront: '../assets/blindbox/card-face.png', imageSrcBack: '../assets/blindbox/card-back4.jpg' ,text:'红谱式脸'},
        { isClicked: false, imageSrcFront: '../assets/blindbox/card-face.png', imageSrcBack: '../assets/blindbox/card-back5.jpg' ,text:'黑十字门蝴蝶脸'},
        { isClicked: false, imageSrcFront: '../assets/blindbox/card-face.png', imageSrcBack: '../assets/blindbox/card-back6.jpg' ,text:'黑碎花脸'}
      ],
      imageSize: '100%',
      zoomImage: false,
      zoomImageSrc: '',
      clickedIndex: -1 // 记录被点击的卡片的索引，默认为-1表示没有卡片被点击
    };
  },
  methods: {
    handleClick(card, index) {
	 this.zoomImageText = card.text;
      this.cards.forEach((c, i) => {
        if (c === card) {
          c.isClicked = true;
          this.clickedIndex = i; // 更新被点击的卡片索引
        } else {
          c.isClicked = false;
        }
      });
      this.zoomImageSrc = card.imageSrcBack;
      this.zoomImage = true;
      setTimeout(() => {
        this.cards.forEach((c, i) => {
          if (i !== this.clickedIndex) {
            c.darken = true;
          } else {
            c.darken = false;
          }
        });
      }, 0);
    },
    resetCards() {
      this.zoomImage = false;
      this.cards.forEach((c) => {
        c.isClicked = false;
        c.darken = false;
      });
    }
  }
};
</script>

<style>
.rotate-transition-enter-active,
.rotate-transition-leave-active {
  transition: transform 3s;
}

.rotate-transition-enter,
.rotate-transition-leave-to {
  transform: rotateY(-180deg);
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px;
}

.card {
  width: 300px;
  height: 450px;
  perspective: 1000px;
  margin: 10px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 3s;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card-front {
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(-180deg);
  transition: transform 3s;
}

.clicked .card-inner {
  transform: rotateY(180deg);
}

.card.darken {
  filter: brightness(50%);
}

.zoom-image-container {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.zoom-image-text {
  position: absolute;
  top: 98%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color:black;
  z-index: 1; /* 设置层级，使文字显示在图片上方 */
  background-color: white;
  width: 450px;
  height: 80px;
}
</style>