<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">儿&nbsp&nbsp童&nbsp&nbsp学&nbsp&nbsp习</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container"><i class="el-icon-user-solid"></i></span>
        <el-input ref="username" v-model="loginForm.username" placeholder="Username" name="username"
				 type="text" tabindex="1" autocomplete="on"/>
      </el-form-item>

			<el-form-item prop="password">
				<span class="svg-container"><i class="el-icon-lock"></i></span>
				<el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
			</el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click="goto">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      }
    }
  },
  methods: {
    goto() {
      this.$router.push('/practice');
    },
  }
}
</script>

<style >
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #fff;
      height: 47px;
      caret-color: #fff;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #283443 inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .login-form {
    background: rgba(47, 59, 75, 0.7);
    padding: 20px;
    border-radius: 8px;
		position: relative;
    width: 520px;
    max-width: 100%;
    margin: 10% auto;
    overflow: hidden;
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style  scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  position:absolute;
  top:0;
  left:0;
	background-color: rgb(245, 250, 255);
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center center;

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: #eee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
