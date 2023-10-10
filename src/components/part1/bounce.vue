<template>
  <div>
    <div class="bon_text bon_text-1" id="bon_text-1">
		<br><br>
      从闻名遐迩的“启点”
	  <br><br>
    </div>
    <img class="image-animation image-animation-1" src="../assets/bounce/image1.png" alt="Your Image1">
 
    <div class="bon_text bon_text-2" id="bon_text-2">
		<br><br>
      到晋升“顶流”的“蓉宝”
	  <br><br>
    </div>
    <img class="image-animation image-animation-2" src="../assets/bounce/image2.png" alt="Your Image2">
   
    <div class="bon_text bon_text-3" id="bon_text-3">
		<br><br>
      再到突破设限的“科梦”
	  <br><br>
    </div>
    <img class="image-animation image-animation-3" src="../assets/bounce/image3.png" alt="Your Image3">

  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import WOW from 'wow.js';
import 'animate.css';

export default {
  setup() {
    const wow = ref(null);

    onMounted(() => {
      wow.value = new WOW().init();

      const images = document.querySelectorAll('.image-animation');

     const handleScroll = () => {
       for (let i = 1; i <= 3; i++) {
         const bonText = document.querySelector(`#bon_text-${i}`);
         const image = document.querySelector(`.image-animation-${i}`);
     
         const windowHeight = window.innerHeight;
         const scrollPosition = window.pageYOffset;
     
         const bonTextTop = bonText.getBoundingClientRect().bottom + scrollPosition;
     
         if (scrollPosition + windowHeight > bonTextTop) {
           image.classList.add('animate__animated', 'animate__bounceInUp');
         } else {
           image.classList.remove('animate__animated', 'animate__bounceInUp');
         }
       }
     };

      window.addEventListener('scroll', handleScroll);

      // 初始化时触发一次
      handleScroll();
    });

    return {
      wow,
    };
  },
};
</script>

<style>
.image-animation {
  width: 300px;
  height: 330px;
  transition: transform 1s;
}

.bon_text {
  font-size: 30px;
  color: black;
  height: 200px;
  font-family: "SIYUAN";
  
}

/* 添加 WOW.js 默认样式 */
.wow {
  visibility: hidden;
}
</style>