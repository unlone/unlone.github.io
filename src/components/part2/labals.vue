<template>
  <el-tabs
    :tab-position="tabPosition"
    style="height: 450px"
    class="demo-tabs"
  >
    <el-tab-pane label="产业结构">
		  <div class="common-layout">
		    <el-container>
		      <el-header><img src="../assets/four/image2.png" alt="" class="four-image1"/></el-header>
		      <el-container>
		      <el-main>	
			  <div class="lowcarbon">
				<lowcarbon></lowcarbon>
			  </div>
			  </el-main>
		      </el-container>
		    </el-container>
		  </div>
	
    </el-tab-pane>
    <el-tab-pane label="能源结构">
		<img src="../assets/four/image4.png" alt="" class="four-image3"/>
      <div class="percent">
        <percent></percent>
      </div>
    </el-tab-pane>
    <el-tab-pane label="交通结构">
	<img src="../assets/four/image5.png" alt="" class="four-image4"/>
      <div class="bolls">
        <bolls></bolls>
      </div>
    </el-tab-pane>
    <el-tab-pane label="空间结构">
		<img src="../assets/four/image1.png" alt="" class="four-image"/>
	</el-tab-pane>
  </el-tabs>
</template>

<script>
import { ref } from 'vue'
import lowcarbon from "../part2/four/lowcarbon.vue"
import bolls from "../part2/four/bolls.vue"
import percent from "../part2/four/percent.vue"

export default {
  components: {
    lowcarbon, bolls, percent
  },
  setup() {
    const tabPosition = ref('left')

    return {
      tabPosition
    }
  }
}
</script>

<style scoped>
.demo-tabs /deep/ .el-tabs__item:not(.is-active) {
  color: white !important;
  font-size: 30px;
  height: 100px;
}

.demo-tabs /deep/ .el-tabs__item.is-active,
.demo-tabs /deep/ .el-tabs__item:hover {
  color: orange !important;
  background-color:#96C24E !important;
  font-size: 30px;
  height: 110px;
}

.demo-tabs /deep/ .el-tabs__header {
  color: white;
  font-size: 30px;
}

.demo-tabs /deep/ .el-tabs__header.is-active {
  color: orange;
}

.demo-tabs /deep/ .el-tabs__active-bar {
  background-color: orange !important;
}

.bolls {
  color: white;
  width: 500px;
  margin-left: 200px;
 
}

.lowcarbon {
  width: 700px;
   margin-left: 50px;
}

.percent {
  color: white;
  font-size: 20px;
  margin-right: 300px;
}

.four-image{
	width: 980px;
}
.four-image1{
	width: 800px;
	float: left;
	margin-left: 10px;
}
.four-image2{
	width: 400px;
	margin-top: 100px;
	margin-left: 20px;
}
.four-image3{
	width: 800px;
	float: left;
    margin-left: 100px;	
}
.four-image4{
	width: 850px;
	float: left;
    margin-left: 100px;	
}
</style>