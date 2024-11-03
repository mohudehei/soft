<template>
<div v-if="start1==false&&start2==false">
	<el-card style="border-radius:10px">
		<el-row :gutter="1">
			<el-col :span="1.5">
				<el-avatar :size="70" :src="user"></el-avatar>
			</el-col>
			<el-col :span="17" style="margin-top:1%">
				<span style="font-size:20px;margin-left:5%;font-weight:bold;">liu_kedong</span><br>
				<span style="font-size:15px;margin-left:5%;color:grey">胜场:5 胜率:100%</span>
			</el-col>
			<el-col :span="5" style="display: flex; align-items: center;">
				<img src="../assets/honor.png" style="width:50px;">
				<span style="font-size:20px;">全国排名: 666</span>
			</el-col>
		</el-row>
	</el-card>
	<br>
	<el-row>
		<el-card style="border-radius:10px;">
			<div slot="header" class="clearfix">
				<span style="font-weight:bold;font-size:15px;"><i class="el-icon-medal-1"></i>&nbsp口算大挑战</span>
			</div>
			<el-carousel :interval="4000" type="card" height="300px">
				<el-carousel-item :key="key" v-for="(value,key) in question_list">
					<div style="text-align:center;margin:10px;">
						<span style="font-weight:bold;font-size:25px;color:rgb(204,102,0)">{{value}}</span>
					</div>
					<el-divider></el-divider>
					<div style="text-align:center;">
						<img src="../assets/pk.png" style="width:70%;"><br><br>
						<el-button type="warning" @click="begin(key)">开始PK</el-button>
					</div>
				</el-carousel-item>
			</el-carousel>
		</el-card>
	</el-row>
</div>
<div v-else-if="start1==true&&start2==false">
	<el-row>
		<el-col :span="12">
		<p> </p>
		<el-progress :text-inside="true" :stroke-width="18" style="width=100px" :percentage="user_percent"></el-progress>
		<p style="margin-top:5%"> </p>
		<font style="font-size:100px;margin-left:30%"><strong>{{question[id].text}}</strong></font>
		<p style="margin-top:10%"> </p>
		<p style="margin-top:10%"> </p>
		<el-input v-model="user_answer" type="textarea" :rows="3" style="width: 400px;margin-left:18%" placeholder="请输入你的答案"></el-input>
		<img src="../assets/right.png" style="width:50px;" v-if="signal==1">
        <img src="../assets/wrong.png" style="width:50px;" v-if="signal==0">
		<p style="margin-top:10%;"> </p>
		<el-button style="margin-left:38%" @click="check()">提交答案</el-button>
		<p> </p>
		</el-col>
		<el-col :span="12">
		<p> </p>
		<el-progress :text-inside="true" :stroke-width="18" style="width=100px" :percentage="ai_percent"></el-progress>
		<p style="margin-top:15%"> </p>
		<font style="font-size:50px;margin-left:35%;margin-top:30%"><strong>你的对手</strong></font>
		<p style="margin-top:15%"> </p>
		</el-col>
	</el-row>
</div>
<div v-else-if="start2==true&&start1==false">
	<el-row>
		<el-col :span="12">
		<p> </p>

		<el-progress :text-inside="true" :stroke-width="18" style="width=100px" :percentage="user_percent"></el-progress>
		<p style="margin-top:5%"> </p>
		<font style="font-size:100px;margin-left:17%"><strong>{{another_question[id].text}}</strong></font>
		<p style="margin-top:10%"> </p>
		<p style="margin-top:10%"> </p>
		<el-input v-model="user_answer" type="textarea" :rows="3" style="width: 400px;margin-left:18%" placeholder="请输入你的答案"></el-input>
		<img src="../assets/right.png" style="width:50px;" v-if="signal==1">
        <img src="../assets/wrong.png" style="width:50px;" v-if="signal==0">
		<p style="margin-top:10%;"> </p>
		<el-button style="margin-left:38%" @click="check()">提交答案</el-button>
		<p> </p>
		</el-col>
		<el-col :span="12">
		<p> </p>
		<el-progress :text-inside="true" :stroke-width="18" style="width=100px" :percentage="ai_percent"></el-progress>
		<p style="margin-top:15%"> </p>
		<font style="font-size:50px;margin-left:35%;margin-top:30%"><strong>你的对手</strong></font>
		<p style="margin-top:15%"> </p>
		</el-col>
	</el-row>
</div>

</template>
<script>
import user from '../assets/user.png'
export default{
	name:"ranking",
	data(){
		return {
			start1:false,
			user:user,
        question_list:{
        "1":"10以内比大小",
        "2":"20以内加减法", 
        "3":"100以内比大小",
        "4":"1000以内加减法",
        "5":"小数加减法"
        },
		user_percent:0,
		ai_percent:0,
		user_answer:"",
		id:1,
		start2:false,
		signal:-1,
		question:
		{
			"1":
			{
				text:" 5 ? 9",
				right_answer:"<"
			},
			"2":
			{
				text:" 8 ? 7",
				right_answer:">"
			},
			"3":
			{
				text:" 9 ? 10",
				right_answer:"<"
			},
			"4":
			{
				text:" 1 ? 8",
				right_answer:"<"
			},
			"5":
			{
				text:" 5 ? 5",
				right_answer:"="
			},
			"6":
			{
				text:" 6 ? 5",
				right_answer:">"
			},
			"7":
			{
				text:" 3 ? 4",
				right_answer:"<"
			},
			"8":
			{
				text:" 9 ? 9",
				right_answer:"="
			},
			"9":
			{
				text:" 5 ? 9",
				right_answer:"<"
			},
			"10":
			{
				text:" 7 ? 1",
				right_answer:">"
			}
		},
		user_finish:0,
		another_question:
		{
			"1":
			{
				text:" 4 + 8 = ?",
				right_answer:12
			},
			"2":
			{
				text:" 9 + 6 = ?",
				right_answer:15
			},
			"3":
			{
				text:" 16 - ? = 7",
				right_answer:9
			},
			"4":
			{
				text:" 8 + 3 = ?",
				right_answer:11
			},
			"5":
			{
				text:" 19 - 10 = ?",
				right_answer:9
			},
			"6":
			{
				text:" 6 + ? = 17",
				right_answer:11
			},
			"7":
			{
				text:" 3 + 4 = ?",
				right_answer:7
			},
			"8":
			{
				text:" 20 - 17 = ?",
				right_answer:3
			},
			"9":
			{
				text:" 6 + 12 = ?",
				right_answer:18
			},
			"10":
			{
				text:" 15 - ? = 6",
				right_answer:9
			}
		},
		elements:[6,7,8,9,10,11]
		}
	},
	watch:{
		ai_percent:
		{
			handler()
			{
				if(this.ai_percent==100&&this.user_percent<100)
				{
					this.$alert('你输了！', '比赛结果', {
          			confirmButtonText: '确定',
          			callback: action => {
            		this.$message({
              		type: 'info',
              		message: `action: ${ action }`
            		});
          			}
        			});
				}

			}
		},
		user_percent:
		{
			handler()
			{
				if(this.user_percent==100&&this.ai_percent<100)
				{
					this.$alert('你赢了！', '比赛结果', {
          			confirmButtonText: '确定',
          			callback: action => {
            		this.$message({
              		type: 'info',
              		message: `action: ${ action }`
            		});
          			}
        			});
				}
			}
		}
	},
	methods:{
		check()
		{
			// id=id+1;
			if(this.start1==true)
			{
				if(this.user_finish)
				{

				}
				else{
				if(this.user_answer==this.question[this.id].right_answer) this.signal=1;
				else this.signal=0;
				if(this.signal==1)this.user_percent+=10;
				setTimeout(() => {
					if(this.id!=10&&this.signal==1) 
					{
						this.id++;
					}
					else if(this.id==10) this.user_finish=1;
					this.signal=-1;
				}, 500);}
			}
			else
			{
				if(this.user_finish==1)
				{
					
				}
				else{
				if(this.user_answer==this.another_question[this.id].right_answer) this.signal=1;
				else this.signal=0;
				if(this.signal==1)this.user_percent+=10;
				setTimeout(() => {
					if(this.id!=10&&this.signal==1) 
					{
						this.id++;
					}
					else if(this.id==10) this.user_finish=1;
					this.signal=-1;
				}, 500);}
			}
			this.user_answer='';
		},
		begin(value)
		{
			if(value==1)
				this.start1=true;
			else if(value==2) this.start2=true;
			setTimeout(() => {
				this.ai_percent+=10;
			}, 2000);
			setTimeout(() => {
				this.ai_percent+=10;
			}, 4500);
			setTimeout(() => {
				this.ai_percent+=10;
			}, 7500);
			setTimeout(() => {
				this.ai_percent+=10;
			}, 8500);
			setTimeout(() => {
				this.ai_percent+=10;
			}, 10500);
			setTimeout(() => {
				this.ai_percent+=10;
			}, 12500);
			setTimeout(() => {
				this.ai_percent+=10;
			}, 15000);
			setTimeout(() => {
				this.ai_percent+=10;
			}, 18000);
			setTimeout(() => {
				this.ai_percent+=10;
			}, 19000);
			setTimeout(() => {
				this.ai_percent+=10;
			}, 22500);
		}
	},
	
}
</script>

<style>
.el-carousel__item {
	/* background-color: rgb(242,248,255); */
	/* background-color: rgb(255,255,255); */
	background-color: rgb(255,239,214);
	border-radius: 10px;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
}
.el-carousel__item h3 {
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 200px;
	margin: 0;
}
</style>