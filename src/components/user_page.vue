<template>
	<div>
		<el-row :gutter="1">
			<el-col :span="2">
				<el-avatar :size="70" :src="user"></el-avatar>
			</el-col>
			<el-col :span="17" style="margin-top:1%">
				<span style="font-size:20px;margin-left:5%;font-weight:bold;">{{form.user_name}}</span><br>
				<span style="font-size:10px;margin-left:5%;">{{form.intro}}</span>
			</el-col>
			<el-col :span="1" justify="end" style="background-color:rgb(208, 255, 208);">
				<el-button @click="changeUserInfo()"><i class="el-icon-setting"></i>修改个人主页信息</el-button>
			</el-col>
		</el-row>
		<el-divider></el-divider>
		<el-descriptions title="用户信息">
			<el-descriptions-item label="学校">{{form.school}}</el-descriptions-item>
			<el-descriptions-item label="邮箱">{{form.email}}</el-descriptions-item>
			<el-descriptions-item label="年级">{{form.grade}}</el-descriptions-item>
			<el-descriptions-item label="姓名">{{form.name}}</el-descriptions-item>
			<el-descriptions-item label="性别">{{form.gender}}</el-descriptions-item>
		</el-descriptions>
		<el-divider></el-divider>
		<h4><b>练习记录</b></h4>
		<el-calendar>
			<template slot="dateCell" slot-scope="{date, data}">
				<div :class="getCellBackgroundColor(data)">
					<p :class="data.isSelected ? 'is-selected' : ''">
						{{ data.day.split('-').slice(1).join('-') }} 
						{{ data.day <= "2024-10-12" ? '✔️' : ''}}
					</p>
				</div>
			</template>
		</el-calendar>

		<el-dialog title="修改个人信息" :visible.sync="dialogVisible" width="30%">
			<el-form :model="form" label-width="80px" size="mini">
				<el-form-item label="用户名">
					<el-input v-model="form.user_name"></el-input>
				</el-form-item>
				<el-form-item label="学生姓名">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="学生性别">
					<el-radio-group v-model="form.gender">
						<el-radio label="男"></el-radio>
						<el-radio label="女"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="学校">
					<el-input v-model="form.school"></el-input>
				</el-form-item>
				<el-form-item label="年级">
					<el-select v-model="form.grade" placeholder="请选择年级">
						<el-option label="一年级" value="一年级"></el-option>
						<el-option label="二年级" value="二年级"></el-option>
						<el-option label="三年级" value="三年级"></el-option>
						<el-option label="四年级" value="四年级"></el-option>
						<el-option label="五年级" value="五年级"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input v-model="form.email"></el-input>
				</el-form-item>
				<el-form-item label="个人简介">
					<el-input type="textarea" v-model="form.intro"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import user from '../assets/user.png'

export default{
	name:"user_page",
	data() {
		return {
			user:user,
			dialogVisible:false,
			form:{
				user_name:"liu_kedong",
				name:"刘柯佟",
				gender:"男",
				school:"华中科技大学",
				grade:"一年级",
				email:"2219625774@qq.com",
				intro:"这个人很懒，什么都没有留下"
			}
		}
	},
	methods:{
		getCellBackgroundColor(data){
      if (data.day <= "2024-10-12") {
        return 'cell-bg-finished';
      }
      return 'cell-bg-unfinished';
		},
		changeUserInfo(){
			this.dialogVisible = true;
		}
	}
}
</script>

<style>
.el-descriptions {
	background-color: rgb(245, 250, 255);
	border-radius: 10px;
}
.cell-bg-finished {
  /* background-color:rgb(208, 255, 208); */
  width: 100%; 
  height: 100%;
	padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cell-bg-unfinished {
  /* background-color:rgb(245, 250, 255); */
  width: 100%; 
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>