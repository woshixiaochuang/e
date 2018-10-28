<template>
  <div class="foods">
    <!-- 左边 -->
    <div class="foods-left">
      <ul v-for="(item,index) in data" :key="index">
        <li class="foodsleftli" :class="{activesfoods:changeRed == index}" @click="movefoods(index)">
          <a :href="'#Top'+index">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <!-- 右边 -->
    <div class="foods-right">
      <div class="foods-fenlei" v-for="(item,index) in data" :key="index">
      <div class="hotscore" :id="'Top'+index">
        <span class="spOne">{{item.name}}</span>
        <span class="spTwo">{{item.description}}</span>
      </div>
      <div class="hotscore-xiangqing" v-for="(k,index) in item.foods" :key="index">
        <div class="hotscore-img">
          <img :src="'//elm.cangdu.org/img/'+k.image_path" alt="">
        </div>
        <div class="hotscore-information">
          <p>{{k.name}}</p>
          <p>{{k.description}}</p>
          <p>{{k.tips}}</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shangpin',
  data(){
    return{
      data:[],
      changeRed:0
    }
  },
  methods:{
    movefoods(index){
       this.changeRed = index
    }
  },
  created(){
    var id = this.$route.params.id;
    let api = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+id;
    this.$http.get(api).then((data)=>{
      this.data=data.data.splice(0,7);
      // console.log(data)
    })
  }
}
</script>

<style>
.foods{
  overflow: hidden;
  height: 4.85rem;
  background-color: rgb(248, 248, 248);
}
.foods-left{
  width: 25%;
  float: left;
}
.foods-left a{
  display: block;
  width: 100%;
  height: 0.6rem;
  color: black;
}
.foods-right{
  width: 75%;
  float: left;
  height: 4.85rem;
  overflow: scroll;
}
.foods-right::-webkit-scrollbar{
  display: none;
}
.foodsleftli{
  border-bottom: .01rem solid gainsboro;
  text-align: center;
  line-height: 0.6rem;
  border-left: 4px solid white;
}
.activesfoods{
  border-left: 4px solid blue;
  background-color: white;
}
.hotscore{
  padding-top: .12rem;
  padding-bottom: .12rem;
}
.spOne{
  font-size: 0.2rem;
}
.spTwo{
  font-size: 0.05rem;
  color: gray;
}
.hotscore-img img{
  width: 100%;
}
.hotscore-img {
  float: left;
  width: 17%;
}
.hotscore-xiangqing{
  background-color: white;
  border-bottom: 0.01rem solid gainsboro;
  overflow: hidden;
  padding: 0.1rem;
}
.hotscore-information{
  float: left;
  margin-left: 0.1rem;
}
.hotscore-information p:nth-child(1){
  font-size: 0.2rem;
}
.hotscore-information p:nth-child(2){
  font-size: 0.1rem;
  color: gray;
}
.hotscore-information p:nth-child(3){
  font-size: 0.1rem;
}
.hotscore-information p{
  margin-top: 0.1rem;
}
</style>