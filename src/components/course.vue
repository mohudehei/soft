<template>
  <el-collapse v-model="activeNames" class="collapse-item">
    <el-collapse-item name="1" class="deploy-setting">
      <template slot="title">
        <span style="font-weight:bold;font-size:14px;color:#2C8DF4;margin-left:2%"><i class="el-icon-s-management"></i>&nbsp小学一年级课程</span>
      </template>
      <div class="card-container">
        <div class="question-item" >
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/1-11meanings and charactristics of number.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>数的意义和性质</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/2-22.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>计数单位和数位小数大小变化规律</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/3-33.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>数的读写、大小比较和改写</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/4-44.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>因数与倍数</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/5-55.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>四则运算的意义与计算方法</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/6-66.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>四则混合运算的顺序</strong></span>
        </div>
      </div>

    </el-collapse-item>
    <el-collapse-item name="2" class="deploy-setting" >
      <template slot="title">
        <span style="font-weight:bold;font-size:14px;color:#2C8DF4;margin-left:2%"><i class="el-icon-s-management"></i>&nbsp小学二年级课程</span>
      </template>
      <div class="card-container">
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/7-77.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>运算定律与简便计算</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/8-88.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>解决问题（一）</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/9-99.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>解决问题（二）</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/10-1010.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>用字母表示数及式与方程</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/11-1111.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>列方程解决问题</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video" >
            <source src="../assets/videos/12-1212.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>常见的量</strong></span>
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item name="3" class="deploy-setting">
      <template slot="title">
        <span style="font-weight:bold;font-size:14px;color:#2C8DF4;margin-left:2%"><i class="el-icon-s-management"></i>&nbsp小学三年级课程</span>
      </template>
      <div class="card-container">
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/13-1313.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>比与比例的认识</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/14-1414.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>用比例与解决问题</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/15-1515.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>探索规律及解决问题的策略</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/16-1616.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>平面图形与立体图形的认识</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/17-1717.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>平面图形周长和面积计算</strong></span>
        </div>
        <div class="question-item">
          <!-- {{value1.sourceName}} -->
          <video controls width="100%" height="100%" class="video"  >
            <source src="../assets/videos/18-1818.mp4" type="video/mp4">
          </video>
          <span style="margin-left:10%"><strong>立体图形的表面积和体积的计算</strong></span>
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default{
  name:'course',
  data() {
    return {
      activeNames:['1'],
    }
  }
}
</script>

<style>
.video {
  border-radius:20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /* margin:10px; */
  /* width:22%; */
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  padding: 10px;
}
.question-item {
  flex: 1 1 auto;
  margin: 35px;
  max-width: 25%;
}
.deploy-setting .el-collapse-item__header {
	border-bottom: 1px solid #2C8DF4;
}
.collapse-item {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>