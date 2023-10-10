<div ref="placeholder"></div>
<template>
  <div>
    <div class="wow animate__animated animate__bounceInLeft" :style="`animation-delay: 0s`">
      A：大熊猫已然成为成都的代言人，“成都只要有吉祥物，那必须是熊猫了”。
    </div>
    <br>
    <div class="wow animate__animated animate__bounceInRight" :style="`animation-delay: 2s`">
      B：没错，大运会期间，成都各地到处都是蓉宝，酒店餐厅、街头巷尾、城市公园，就不更用说观赛场馆了，连观众的书包上和手机上也全是蓉宝。
    </div>
    <br>
    <div class="wow animate__animated animate__bounceInLeft" :style="`animation-delay: 4s`">
      A: 让我印象最深的是桂溪公园的巨大蓉宝，可以说是全成都最大了。有了这些四处可见的蓉宝，整座城市都活跃着大运会的气氛，也闪耀着成都的青春与活力。
    </div>
  </div>
</template>
<script>
	import { ref, onMounted } from 'vue';
	
	export default {
	  setup() {
	    const placeholder = ref(null);
	    const showA = ref(false);
	    const showB = ref(false);
	    const showA2 = ref(false);
	
	    onMounted(() => {
	      const options = {
	        root: null,
	        rootMargin: '0px',
	        threshold: 0.5
	      };
	
	      const observer = new IntersectionObserver(entries => {
	        entries.forEach(entry => {
	          if (entry.target === placeholder.value) {
	            if (entry.isIntersecting) {
	              showA.value = true;
	            }
	          } else {
	            if (entry.isIntersecting) {
	              if (!showA.value) {
	                showA.value = true;
	              } else if (!showB.value) {
	                showB.value = true;
	              } else {
	                showA2.value = true;
	              }
	            }
	          }
	        });
	      }, options);
	
	      observer.observe(placeholder.value);
	    });
	
	    return {
	      placeholder,
	      showA,
	      showB,
	      showA2
	    };
	  }
	};
</script>

<style>
.wow {
  animation-fill-mode: forwards;
  animation-duration: 1s;
}

.animate__animated.animate__bounceInLeft {
  animation-name: animate__bounceInLeft;
}

.animate__animated.animate__bounceInRight {
  animation-name: animate__bounceInRight;
}

@keyframes animate__bounceInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes animate__bounceInRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>