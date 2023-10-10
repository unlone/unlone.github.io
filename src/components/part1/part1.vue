<template>
	<div class="main1">
		
		
			
			<div class="main-title" style="display: flex; align-items: center;">
				导入
			
			</div>
			

			
            <div class="part1-1">
				
				
		   <div class="mid-title">
		      <br>
		      <br>
		      <div class="qustion">
		        说起大熊猫，你会想到哪一座城市？
		      </div>
		    </div>
		
		    <div class="answer" @click="toggleText">
		      <img src="../assets/part1/image2.png" alt="" class="answer-img"/>
		    </div>
		     
			
			<div v-if="showText" class="daoru1">
			  <div class="wow animate__animated animate__bounceInUp">
			    <br>
				<br>
			    没错！这就是成都
			  </div>
			</div>
			
        
				
				
				
				<div class="context">
		
				<br>
					1869年，法国人皮埃尔在四川雅安宝兴县首次发现大熊猫的踪迹，<br>
					自此雅安成为熊猫的故乡。<br>
					成都作为四川的省会城市，占据经济、文化、旅游、政治和地理等优势，<br>
					逐渐发展为全球唯一拥有野生和圈养大熊猫资源的超大城市。<br>
					熊猫IP作为成都城市形象的最佳代表，也经历着与“蓉“俱进的不断迭代。<br><br>
				
				</div>
            </div>
			
			
			
			<div class="part1-2">
				<div class="mid-title">
					<br>
					<br>
					
				</div>
				<bounce>
				</bounce>
				<div class="context"><br>
					生于斯长于斯的“熊猫家族”，<br>
					在传承与“上新”中链接古蜀文明，<br>
					聚光当下时代，展望创新未来。<br>
					而形态各异的熊猫们所共同传达的<br>
					“和谐共生”“幸福共享”“拥抱世界”等观念，<br>
					也与成都的城市定位保持步调一致，<br>
					贴近着成都的城市气质与精神内涵，<br>
					彰显着蓉城的青春能量与远大期许。<br><br>
				</div>
			</div>
			
			
			
			
			<div class="part1-3">
				<div class="mid-title">
					<br>
					<br>
				<!-- 	1.3 熊猫IP与成都建设 -->
				</div>
				<div class="images-1">
					<images>
					</images>
				</div>
				
			</div>
			
			
				
<!-- 		  <router-link to="/" class="link">
			返回首页
		  </router-link> -->
	 
	 
	</div>
</template>

<script>
import images from "../part1/images.vue";
import bounce from "../part1/bounce.vue";
import { ref, onMounted } from 'vue';
import 'animate.css';

export default {
	 data() {
	    return {
	      showText: false
	    };
	  },
	  methods: {
	    toggleText() {
	      this.showText = !this.showText;
		  console.log(1111)
	    },
		goToPart1() {
		       this.$router.push({ path: '/', hash: '#main1' }); // 跳转到指定位置（#main-title）
		    }
	  },
	  components: {
	      images,
	      bounce
	  }
}
</script>

<style>

	.main1 {
	  /* background: linear-gradient(#96C24E,#FFDD55,#53D1EC); */
	  background-image: url("../assets/part1/image1.png");
	  background-size: cover;
	  background-repeat: no-repeat;
	  background-position: center;
	  /* 其他样式设置 */
	}
	.inside1{
		margin-left: 150px;
		margin-right: 150px;
		line-height: 45px;
	}
	
	.daoru1{
		font-size:40px;
		color: black;
		font-family: "SIYUAN";
		margin-left: 350px;
	}
	.text1-2{
		font-size:20px;
		color: black;
		font-family: "SIYUAN";
	}

	.text1-4{
		font-size:30px;
		color:black;
		margin-top: 100px;
		font-family: "SIYUAN";
	}
  
	.qustion{
		float: left;
	}
	.answer{
		float: right;
		margin-right: 200px;
		
	}
	.answer-img{
		width: 200px;
	}
	.images-1{
		width: 80%;
		margin-left: 150px;
	}
</style>