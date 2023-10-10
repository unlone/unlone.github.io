<template>
  <div>
	  <div class="test"></div>
	  
    <h1 class="wow animate__animated animate__fadeOutBottomLeft">Hello, Vue 3!</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import 'animate.css';
import WOW from 'wow.js';

export default {
  setup() {
    const wow = ref(null);

    onMounted(() => {
      wow.value = new WOW().init();
    });

    return {
      wow,
    };
  },
};
</script>

<style>
/* @import '~animate.css/animate.min.css'; */
/* 根据你的需求定制样式 */
.test{
	width: 100px;
	height: 900px;
	
}




</style>