<template>
<div v-if="redoing==false">
	<el-row :gutter="8">
		<el-col :span="9">
			<el-card style="height:130px">
				<h4 style="margin-top:0px">练习情况</h4>
				<div>
					<el-row>
						<el-col :span="8">
							<el-statistic group-separator="," :precision="2" decimal-separator="." 
								:value="1314" title="⭐做题总数">
							</el-statistic>
						</el-col>
						<el-col :span="8">
							<el-statistic group-separator="," :precision="2" decimal-separator="." 
								:value="1314" title="做题总数">
							</el-statistic>
						</el-col>
						<el-col :span="8">
							<el-statistic group-separator="," :precision="2" decimal-separator="." 
								:value="1314" title="做题总数">
							</el-statistic>
						</el-col>
					</el-row>
			</div>
			</el-card>
		</el-col>
		<el-col :span="15">
			<el-card style="height:130px">
				<h4 style="margin-top:0px">学习情况</h4>
				<div>
					<el-row>
						<el-col :span="6">
							<el-statistic group-separator="," :precision="2" decimal-separator="." 
								:value="1314" title="做题总数">
							</el-statistic>
						</el-col>
						<el-col :span="6">
							<el-statistic group-separator="," :precision="2" decimal-separator="." 
								:value="1314" title="做题总数">
							</el-statistic>
						</el-col>
						<el-col :span="6">
							<el-statistic group-separator="," :precision="2" decimal-separator="." 
								:value="1314" title="做题总数">
							</el-statistic>
						</el-col>
						<el-col :span="6">
							<el-statistic group-separator="," :precision="2" decimal-separator="." 
								:value="1314" title="做题总数">
							</el-statistic>
						</el-col>
					</el-row>
				</div>
			</el-card>
		</el-col>
	</el-row>
	<br>
	<el-row :gutter="8">
		<el-col :span="16">
			<el-card style="height:450px">
				<h4 style="margin-top:0px">做题趋势</h4>
				<div>
					<bar_line_chart/>
				</div>
			</el-card>
		</el-col>
		<el-col :span="8">
			<el-row>
				<el-card style="height:300px">
					<h4 style="margin-top:0px">学生能力</h4>
					<div>
						<radar_chart/>
					</div>
				</el-card>
			</el-row>
			<el-row>
				<el-card style="height:150px">
					<h4 style="margin-top:0px">练习情况</h4>
					<div style="margin-left:20%">
						<span>错题数目:15</span>
						<el-button @click="redoing=true">错题重练</el-button>
					</div>
				</el-card>
			</el-row>
		</el-col>
	</el-row>
</div>

<div class="outer-container" v-else-if="redoing==true">
	<el-page-header @back="goBack" content="错题本"></el-page-header>
  <el-divider></el-divider>
	<div class="question-container">
		<div class="question-item" v-for="(value,key) in questions" :key="key">
			<div><span>第{{key}}题</span></div>
			<font style="font-size:50px"><strong>{{value.question}}</strong></font>
			<img src="../assets/right.png" style="width:50px;" v-if="checking==true&&value.user_answer==value.right_answer">
			<img src="../assets/wrong.png" style="width:50px;" v-if="checking==true&&value.user_answer!=value.right_answer">
			<div>
				<el-input v-model="value.user_answer" placeholder="请输入本题答案" @input=change()></el-input>
			</div>
		</div>
	</div>
	<el-button v-if="start==true" type="success" @click="checkAnswer()" style="margin-left:40%">提交答案</el-button>
</div>
</template>

<script>
import bar_line_chart from './bar_line_chart'
import radar_chart from './radar_chart'

export default{
	name:"statistic",
	data(){
		return {
			redoing:false,
			questions:
			{
					"1":
					{
							question:"5 + 16 = ?",
							right_answer:21,
							user_answer:""
					},
					"2":
					{
							question:"34 + 19 = ?",
							right_answer:53,
							user_answer:""
					},
					"3":
					{
							question:"7 * ? = 56",
							right_answer:8,
							user_answer:""
					},
					"4":
					{
							question:"45 + 78 = ?",
							right_answer:123,
							user_answer:""
					},
					"5":
					{
							question:"98 - 39 = ?",
							right_answer:59,
							user_answer:""
					},
					"6":
					{
							question:"8888 ? 8889",
							right_answer:'<',
							user_answer:""
					},
					"7":
					{
							question:"78 * 300 = ?",
							right_answer:23400,
							user_answer:""
					},
					"8":
					{
							question:"40 * 50 = ?",
							right_answer:2000,
							user_answer:""
					},
					"9":
					{
							question:"3.13 + 2.45 = ?",
							right_answer:5.58,
							user_answer:""
					},
					"10":
					{
							question:"2.56 + 9.47 = ?",
							right_answer:12.03,
							user_answer:""
					},
					"11":
					{
							question:"900 - 459 = ?",
							right_answer:441,
							user_answer:""
					},
					"12":
					{
							question:"583 - 491 = ?",
							right_answer:92,
							user_answer:""
					},
					"13":
					{
							question:"8.46 - 3.28 = ?",
							right_answer:5.18,
							user_answer:""
					},
					"14":
					{
							question:"79 + 13 = ?",
							right_answer:92,
							user_answer:""
					},
					"15":
					{
							question:"8845 + 863 = ?",
							right_answer:9708,
							user_answer:""
					}
					// "16":
					// {
					// 		question:"7373 - 3737 = ?",
					// 		right_answer:3636,
					// 		user_answer:""
					// }
			},
			checking:false
		}
	},
	components:{
		bar_line_chart,
		radar_chart
	},
	methods:{
		goBack(){
      this.redoing = false;
      this.$message.success("返回统计页面");
      this.checking = false;
    },
		change(){
      this.$forceUpdate();
    }
	}
}
</script>

<style>
.outer-container {
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  padding: 10px;
}
.question-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>