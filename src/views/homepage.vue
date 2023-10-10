<template>
<div class="main">
	<div class="title">
		<div class="title1">可持续·正青春·向未来</div>
		<div class="title2">——熊猫IP点亮蓉城精彩</div>
	</div>


		 <el-backtop :right="350" :bottom="30" @click.native="scrollToPosition1" class="a">
			  导入 <!-- 自定义文本1 -->
		  </el-backtop>
		  <el-backtop :right="280" :bottom="30" @click.native="scrollToPosition2" class="a">
			  启点<!-- 自定义文本2 -->
		  </el-backtop>
		  <el-backtop :right="210" :bottom="30" @click.native="scrollToPosition3" class="a">
			  蓉宝 <!-- 自定义文本3 -->
		  </el-backtop>
		  <el-backtop :right="140" :bottom="30" @click.native="scrollToPosition4" class="a">	
			  科梦 <!-- 自定义文本4 -->
		  </el-backtop>
		  <el-backtop :right="70" :bottom="30" @click.native="scrollToPosition5" class="a">
			  结语 <!-- 自定义文本5 -->
		  </el-backtop>

	   <div id="part1">
	   	<part1>
	   	</part1>
	   </div>
	   
	   
	   <div id="part2">
		<part2>
		</part2>
	   </div>
	   
	   <div id="part3">
	   	<part3>	
	   	</part3>
	   </div>
	   	
	   <div id="part4">
			<part4>
			</part4>
	  </div>
		<div id="part5">
			<part5>	
		    </part5>
		</div>
			
	
	
	
</div>

	
</template>

<script>
import part1 from "../components/part1/part1.vue"
import part2 from "../components/part2/part2.vue"
import part3 from "../components/part3/part3.vue"
import part4 from "../components/part4/part4.vue"
import part5 from "../components/part5/part5.vue"
export default{
	components:{
		part1,part2,part3,part4,part5
	},
	methods: {
	  scrollToPosition1() {
	    const targetElement = document.getElementById('part1');
	    if (targetElement) {
	      targetElement.scrollIntoView({
	        behavior: 'smooth', // 平滑滚动
	        block: 'start' // 从顶部开始滚动
	      });
	    }
	  },
	  scrollToPosition2() {
	    const targetElement = document.getElementById('part2');
	    if (targetElement) {
	      targetElement.scrollIntoView({
	        behavior: 'smooth', // 平滑滚动
	        block: 'start' // 从顶部开始滚动
	      });
	    }
	  },
	  scrollToPosition3() {
	    const targetElement = document.getElementById('part3');
	    if (targetElement) {
	      targetElement.scrollIntoView({
	        behavior: 'smooth', // 平滑滚动
	        block: 'start' // 从顶部开始滚动
	      });
	    }
	  },
	  scrollToPosition4() {
	    const targetElement = document.getElementById('part4');
	    if (targetElement) {
	      targetElement.scrollIntoView({
	        behavior: 'smooth', // 平滑滚动
	        block: 'start' // 从顶部开始滚动
	      });
	    }
	  },
	  scrollToPosition5() {
	    const targetElement = document.getElementById('part5');
	    if (targetElement) {
	      targetElement.scrollIntoView({
	        behavior: 'smooth', // 平滑滚动
	        block: 'start' // 从顶部开始滚动
	      });
	    }
	  },
	}
}

</script>

<style>
	.a{
		color: black;
		width: 50px;
		height: 50px;
		font-size: 20px;
		font-family: "SIYUAN";
	}
	
	.title{
		background-color: white;
		font-family: 'COOL';
		color:black;
	}
	.title1{
		text-align:center;
		font-size:40px;
	}
	.title2{
		text-align:right;
		margin-right: 150px;
		font-size:30px;
		
	}
	
	
	
	
	.context-center {
	text-align: center;
	font-size: 20px;
	color: black;
	background-color: rgba(255, 255, 255, 0.2);
	border-width: 2px;
	border-style: solid;
	border-radius: 10px;
	border-color: rgba(255, 255, 255, 0.2);
	line-height: 1.5;
	padding: 0 20px;
	margin-top: 50px;
	display: inline-block;
	font-family: "SIYUAN";
	}
	.context-left{
		width: 95%;
		float: left;
		margin-left: 100px;
	
		margin-top: 20px;
		font-size:25px;
		color: black;
		background-color: rgba(255, 255, 255, 0.2); /* 设置白色边框的半透明度 */
		border-width: 2px;
		border-style: solid;
		border-radius: 10px; /* 设置圆角半径 */
		border-color:rgba(255, 255, 255, 0.2);
		line-height: 1.5;
		text-align: left;
		padding: 0 20px;
		font-family: "SIYUAN";
	}
	.context-right{
		width: 95%;
		float: right;
		margin-right: 100px;
	
		margin-top: 20px;
		font-size:25px;
		color: black;
		background-color: rgba(255, 255, 255, 0.2); /* 设置白色边框的半透明度 */
		border-width: 2px;
		border-style: solid;
		border-radius: 10px; /* 设置圆角半径 */
		border-color:rgba(255, 255, 255, 0.2);
		line-height: 2.5;
		padding: 0 20px;
		font-family: "SIYUAN";
	}
	
	.context{
		margin-left: 200px;
		margin-right: 200px;
		margin-top: 20px;
		font-size:25px;
		color: black;
		background-color: rgba(255, 255, 255, 0.2); /* 设置白色边框的半透明度 */
		border-width: 2px;
		border-style: solid;
		border-radius: 10px; /* 设置圆角半径 */
		border-color:rgba(255, 255, 255, 0.2);
		line-height: 1.5;
		padding: 0 20px;
		margin-top: 50px;
		display: inline-block;
		font-family: "SIYUAN";
	}
	.context-big{
		margin-left: 200px;
		margin-right: 200px;
		margin-top: 30px;
		font-size:30px;
		color: black;
		background-color: rgba(255, 255, 255, 0.2); /* 设置白色边框的半透明度 */
		border-width: 2px;
		border-style: solid;
		border-radius: 10px; /* 设置圆角半径 */
		border-color:rgba(255, 255, 255, 0.2);
		line-height: 1.5;
		padding: 0 20px;
		margin-top: 50px;
		display: inline-block;
		font-family: "SIYUAN";
	}
	.link {
	  /* 重写样式 */
	  text-decoration: none;
	  color: inherit;
	  /* 其他样式设置 */
	  text-align: center;
	  font-size: 20px;
	  color: black;
	  background-color: rgba(255, 255, 255, 0.2);
	  border-width: 2px;
	  border-style: solid;
	  border-radius: 10px;
	  border-color: rgba(255, 255, 255, 0.2);
	  line-height: 1.5;
	  padding: 0 20px;
	  margin-top: 50px;
	  margin-bottom: 100px;
	  display: inline-block;
	  font-family: "SIYUAN";
	}
	
	.main-title-img{
		margin-top: 50px;
		width: 800px;
	
	}
	
	.mid-title{
		text-align:left;
		margin-left: 150px;
		font-size:30px;
		color: black;
		font-family: "SIYUAN";
	}
	.mid-title-img{
		margin-top: 50px;
		width: 800px;
	
	}
	.main-title{
		text-align:left;
		font-size:40px;
		color: black;
		margin-left: 100px;
		font-family: "SIYUAN";
	}

</style>