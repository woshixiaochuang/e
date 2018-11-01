<template>
  <div class="foods">
    <!-- 左边 -->
    <div class="foods-left">
      <ul v-for="(item,index) in data1" :key="index">
        <li class="foodsleftli" :class="{activesfoods:changeRed == index}" @click="movefoods(index)">
          <a :href="'#Top'+index">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <!-- 右边 -->
    <div class="foods-right">
      <div class="foods-fenlei" v-for="(item,index) in data1" :key="index">
      <div class="hotscore" :id="'Top'+index">
        <span class="spOne">{{item.name}}</span>
        <span class="spTwo">{{item.description}}</span>
      </div>
      <div class="hotscore-xiangqing" >
        <!-- <div class="attributes-top"><span v-for="(a,index) in k.attributes" :key="index" v-if="a.icon_name">{{a.icon_name}}</span></div> -->
        <div class="hotscore-img">
          <img :src="'//elm.cangdu.org/img/'+item.foods[0].image_path" alt="">
        </div>
        <div class="hotscore-information">
          <p>{{item.foods[0].name}}</p>
          <p>{{item.foods[0].description}}</p>
          <p>{{item.foods[0].tips}}</p>
          <p>${{item.foods[0].specfoods[0].price}}</p>
        </div>
         <p class="plus" @click="plus(item.foods[0].specfoods[0].food_id)">+</p>
         <p class="shuliang" v-if="item.foods[0].specfoods[0].count>0">{{item.foods[0].specfoods[0].count}}</p>
         <p class="subtract" v-if="item.foods[0].specfoods[0].count>0" @click="subtract(item.foods[0].specfoods[0].food_id)">-</p>
      </div>
      </div>
    </div>
    <cardetail></cardetail>
  </div>
</template>

<script>
import Vue from "vue";
import cardetail from '../shoppingCar/cardetail';
export default {
  name: 'shangpin',
  data(){
    return{  
      changeRed:0,
      prices:0.00
    }
  },
  computed:{
    data1(){
      return this.$store.state.en
    }
   
  },
  components:{
    cardetail
  },
  methods:{
    movefoods(index){
       this.changeRed = index
    },
    plus(id){
      this.$store.commit("add", id);
    },
    subtract(id){
      this.$store.commit("remove", id);
    }
  },
  created(){
    var id = this.$route.params.id;
    let api = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+id;
    this.$http.get(api).then((res)=>{
      for (let i = 0; i < res.data.length; i++) {
        Vue.set(res.data[i].foods[0].specfoods[0], "count", 0);
      }
      this.$store.commit("en", res.data);
      // console.log(this.data);

      // this.data=data.data.splice(0,7);
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
  position: relative;
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
.hotscore-information p:nth-child(4){
  font-size: 0.2rem;
  color: orangered;
}
.hotscore-information p{
  margin-top: 0.1rem;
}
.attributes-top span:nth-child(2){
  float: right;
  border: .01rem solid orangered;
  color: orangered;
  font-size: 0.1rem;
}
.plus,.subtract{
  width: 0.15rem;
  height: 0.15rem;
  color: white;
  background-color: blue;
  text-align: center;
  line-height: 0.15rem;
  border-radius: 50%;
  float: right;
  margin-top: 0.9rem;
  margin-right: 0.01rem;
}
.shuliang{
  color: red;
  float: right;
  margin-top: 0.9rem;
}
</style>