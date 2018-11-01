<template>
  <div class="evaluation">
    <div class="starscore">
      <div class="starleft">
        <p>4.4</p>
        <p>综合评价</p>
        <p>高于周边商家76.9%</p>
      </div>
      <div class="starright">
        <ul>
          <li>
            <p class="spleft1">服务态度</p>
            <p class="spright1">
              <el-rate
  v-model="value5"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>
            </p>
          </li>
          <li>
            <p class="spleft2">菜品评价</p>
            <p class="spright2">
              <el-rate
  v-model="value6"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>
            </p>
          </li>
          <li>
            <p class="spleft3">送达时间</p>
            <span>分钟</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="evaluation-change">
      <ul>
        <li v-for="(item,index) in fenlei" :key="index">
          <span :class="{fenleiChanged:changed==index}" @click="handle(index)">{{item.name}}({{item.count}})</span>
        </li>
      </ul>
    </div>
    <div class="user-message">
      <div class="user-one">
        <div class="user-touxiang"><img src="###" alt=""></div>
        <div class="message-information">
          <ul v-for="(k,index) in userMessage" :key="index">
            <li>
              <p>{{k.username}}</p>
              <p>{{k.rated_at}}</p>
            </li>
            <li>
              <el-rate
  v-model="k.rating_star"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>
              <p>{{k.time_spent_desc}}</p>
            </li>
            <li v-for="(g,index) in k.item_ratings" :key="index" v-if="g.image_hash">
              <img id="messageImg" :src="'https://fuss10.elemecdn.com/'+g.image_hash+'.jpeg'" alt="">
              <p>{{g.food_name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pingjia',
  data(){
    return {
      fenlei:[],
      userMessage:[],
      value5:4.7,
      value6:4.8,
      changed:0
    }
  },
  methods:{
    handle(value){
      this.changed = value;
    }
  },
  created(){
    var id = this.$route.params.id;
    let api1 = "https://elm.cangdu.org/ugc/v2/restaurants/"+id+"/ratings/tags";
    this.$http.get(api1).then((data)=>{
          this.fenlei = data.data;
        });
    let api2 = "https://elm.cangdu.org/ugc/v2/restaurants/"+id+"/ratings";
    this.$http.get(api2).then((data)=>{
          this.userMessage = data.data;
        });
  }
}
</script>

<style>
.fenleiChanged{
  color: white;
  background-color: rgba(39, 120, 243, 0.932) !important;
}
.evaluation{
  background-color: white;
  overflow: hidden;
}
.starscore{
  border-bottom: 0.1rem solid rgb(235, 233, 233);
  overflow: hidden;
}
.starleft{
  float: left;
  width: 40%;
  text-align: center;
}
.starright{
  width: 60%;
  float: left;
}
.starleft>p:nth-child(1){
  font-size: 0.25rem;
  margin-top: 0.25rem;
  color: orangered;
}
.starleft>p:nth-child(2){
  font-size: 0.15rem;
  margin-top: 0.05rem;
}
.starleft>p:nth-child(3){
  font-size: 0.15rem;
  margin-top: 0.05rem;
}
.starright li{
  overflow: hidden;
  margin-top: 0.02rem;
}
.starright>ul{
  margin-left: 0.3rem;
  margin-top: 0.25rem;
  margin-bottom: 0.2rem;
}
.spleft1,.spleft2,.spleft3{
  float: left;
}
.evaluation-change{
  overflow: hidden;
}
.evaluation-change li{
  margin-top: 0.2rem;
  float: left;
}
.evaluation-change li:nth-child(3) span{
  background-color: rgb(235, 231, 231);
}
.evaluation-change li:last-child{
  margin-bottom: 0.1rem;
}
.evaluation-change span{
  padding: 0.05rem;
  background-color:rgb(212, 241, 250);
  border-radius: 0.07rem;
}
.message-information{
  height: 2.1rem;
  overflow: scroll;
  border-top: 0.01rem solid rgb(235, 231, 231);
}
.message-information::-webkit-scrollbar{
  display: none;
}
#messageImg{
  width: 20%;
}
</style>