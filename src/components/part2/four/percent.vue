<template>
  <div class="demo-progress">
    <el-progress type="circle" :percentage="64.4" :stroke-width="18" :stroke-linecap="'round'" :color="'#088595'" :width="150">
      <div class="progress-text">64.4%</div>
	  <!-- <div class="pro-text">清洁能源占比</div> -->
    </el-progress>
    <el-progress type="circle" :percentage="45.9" :stroke-width="18" :stroke-linecap="'round'" :color="'#089556'" :width="150">
      <div class="progress-text">45.9%</div>
	  <!-- <div class="pro-text">非化石能源占比</div> -->
    </el-progress>
	<div class="pro-text">
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	清洁能源占比
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	非化石能源占比</div>
	
  </div>
</template>

<style scoped>
.demo-progress .el-progress--circle {
  margin-left:40px;
}

.demo-progress .el-progress__text {
  color: white;
  font-size: 20px;
  font-family: "SIYUAN";
}

.progress-text {
  margin-up: 10px;
  color: white;
  font-size: 30px;
  font-family: "SIYUAN";
}
.pro-text{
	margin-up: 200px;
	color: white;
	font-size: 18px;
	font-family: "SIYUAN";
}
</style>