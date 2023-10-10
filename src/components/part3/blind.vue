<template>
  <div class="card-container">
    <transition-group name="rotate-transition">
      <div
        class="card"
        :class="{ clicked: card.isClicked }"
        v-for="(card, index) in cards"
        :key="index"
        @click="handleClick(card)"
      >
        <div class="card-inner">
          <div class="card-front">
            <img
              v-bind:src="card.imageSrcFront"
              :style="{ width: imageSize, height: imageSize }"
            />
           
          </div>
          <div class="card-back">
            <img
              v-bind:src="card.imageSrcBack"
              :style="{ width: imageSize, height: imageSize }"
            />
            <p class="card-text">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </transition-group>
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
      imageSize: '100%' // 根据需求设置图片的大小，这里设置为100%
    };
  },
  methods: {
    handleClick(card) {
      card.isClicked = true;
    }
  }
};
</script>

<style>
	.card-text {
	  position: absolute;
	  top: 90%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  text-align: center;
	  font-size: 30px;
	  font-family: "SIYUAN";
	  height: 50px;
	  width: 100%;
	  background-color:#FFDD55 ;
	}
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
</style>