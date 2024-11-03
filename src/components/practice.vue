<template>
<div>
  <div class="card-container" v-if="start==false">
    <el-card class="card" v-for="(value,key) in question_list" :key="key">
      <div slot="header">
        <span>{{value.name}}</span>
      </div>
      <div style="margin-bottom:10px">
        <font size="2" color="#909090">  
          {{value.example}}
        </font>
      </div> 
      <div style="margin-bottom:10px">
        <span>题目数量</span>
        <el-select v-model="value.q_num" placeholder="请选择题目数量" style="margin-top:10px">
          <el-option label="10" value="10"></el-option>
          <el-option label="20" value="20"></el-option>
          <el-option label="30" value="30"></el-option>
          <el-option label="50" value="50"></el-option>
          <el-option label="100" value="100"></el-option>
        </el-select>
      </div>
      <el-button type="primary" @click="start_practicing(key)">开始练习</el-button>
    </el-card>
  </div>

  <div class="outer-container" v-if="start==true" >
    <el-page-header @back="goBack" :content="question_list[choosed_question].name"></el-page-header>
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
</div>
</template>
  
<script>
import { onUpdated } from 'vue';
import {makeproblem_compare_10} from "../utils/compare_10";
import {makeproblem_add_20} from "../utils/add_20";
import {makeproblem_add_1000} from "../utils/add_1000";
import {makeproblem_add_xiaoshu} from "../utils/add_xiaoshu";
import {makeproblem_compare_100} from "../utils/compare_100";
import {makeproblem_mul_easy} from "../utils/mul_easy";
import {makeproblem_mul_duowei} from "../utils/mul_duowei";
import {makeproblem_compare_10000} from "../utils/compare_10000";
export default{
  name:"practice",
  data(){
    return {
      start:false,
      checking:false,
      No:1,
      choosed_question:"",
      question_list:{
        "1":{
          name:"10以内比大小", 
          example:"例题: 5 ? 3",
          q_num:""
        },
        "2":{
          name:"20以内加减法", 
          example:"例题: 5 + 2 = ?",
          q_num:""
        },
        "3":{
          name:"100以内比大小", 
          example:"例题: 10 ? 9",
          q_num:""
        },
        "4":{
          name:"1000以内加减法", 
          example:"例题: 100 + 59 =？",
          q_num:""
        },
        "5":{
          name:"小数加减法", 
          example:"例题: 1.01 + 0.59 =？",
          q_num:""
        },
        "6":{
          name:"乘法表乘法", 
          example:"例题: 4 X 7 =？",
          q_num:""
        },
        "7":{
          name:"多位数乘法", 
          example:"例题: 40 X 70 =？",
          q_num:""
        },
        "8":{
          name:"10000以内比大小", 
          example:"例题: 1234 ? 4567",
          q_num:""
        }
      },
      questions:{}
    }
  },
  methods:{
    // fetchQuestionList(){
    //   this.$axios({
    //     methods:'get',
    //     url:'http://localhost:8000/practice/fetch_question_list/'
    //   }).then((response)=>{
    //     console.log(response.data);
    //   })
    // },
    start_practicing(key){
      if (this.question_list[key].q_num == ""){
        this.$message.warning("请先选择题目数量");
        return;
      }
      this.$message.success("开始练习");
      this.randomCalculation(key);
      this.choosed_question = key;
      this.start = true;
    },
    change(){
      this.$forceUpdate();
    },
    randomCalculation(key){
      this.questions={};
      let q_num = this.question_list[key].q_num;
      if(key==1)
      {
        this.questions=makeproblem_compare_10(q_num);
      }
      else if(key==2)
      {
        this.questions=makeproblem_add_20(q_num);
      }
      else if(key==3)
      {
        this.questions=makeproblem_compare_100(q_num);
      }
      else if(key==4)
      {
        this.questions=makeproblem_add_1000(q_num);
      }
      else if(key==5)
      {
        this.questions=makeproblem_add_xiaoshu(q_num);
      }
      else if(key==6)
      {
        this.questions=makeproblem_mul_easy(q_num);
      }
      else if(key==7)
      {
        this.questions=makeproblem_mul_duowei(q_num);
      }
      else if(key==8)
      {
        this.questions=makeproblem_compare_10000(q_num);
      }
    },
    goBack(){
      this.start = false;
      this.$message.success("返回选题页面");
      this.checking = false;
    },
    checkAnswer(){
      this.checking = true;
      this.$message.success("提交成功");
    }
  }
}
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  padding: 10px;
}
.card {
  flex: 1 1 auto; 
  margin: 10px;
  max-width: 30%;
  border-radius: 10px;
}
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
.question-item {
  flex: 1 1 auto;
  margin: 20px;
  max-width: 25%;
}
</style>