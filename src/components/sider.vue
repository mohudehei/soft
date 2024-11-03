<template>
  <el-container style="height: 100%; border: 1px solid #eee; background-color: rgb(245, 250, 255)">
    <el-header style="font-size: 12px;border-bottom: 1px solid #eee">
      <img src="../assets/logo.png" style="width:160px;">
      <el-dropdown>
        <!-- <i class="el-icon-user"></i> -->
        <img src="../assets/user.png" style="width:40px;margin-top:50%">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="jumpToUserPage()">查看信息</el-dropdown-item>
          <el-dropdown-item>登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    
    <el-container>
      <el-aside width="120px" style="background-color: rgb(255, 255, 255)">
        <el-menu router>
          <el-menu-item index="/practice"><i class="el-icon-alarm-clock"></i>练习</el-menu-item>
          <el-menu-item index="/ranking"><i class="el-icon-trophy"></i>比赛</el-menu-item>
          <el-menu-item index="/course"><i class="el-icon-collection"></i>课程</el-menu-item>
          <el-menu-item index="/statistic"><i class="el-icon-s-data"></i>统计</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header {
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
  export default {
    data() {
      return {}
    },
    methods:{
      jumpToUserPage(){
        this.$router.push('/user_page');
        console.log('jumping...');
      }
    }
  };
</script>
