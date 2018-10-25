<template>
  <div class="shops">
    <div class="shopsTop">
      <img class="shopTop-img" src="../../../../static/imgs/download.jpg" alt="">
      <span class="nearbyShops">附近商家</span>
    </div>
    <div class="shopListings">
       <div class="shop-content" v-for="(item,index) in data" :key="index">
          <router-link :to="{name:'shopsDange',params:{id:item.id}}">
            <div class="shop-informations-images">
               <img class="shop-Images" :src="'https://elm.cangdu.org/img/'+item.image_path" alt="">
          </div>
          <div class="shop-informations">
          <div class="shop-informations-top">
            <span class="pinpai">品牌</span>
            <span id="shopsName">{{item.name}}</span>
            <span class="informations-right">保准票</span>
          </div>
          <div class="shop-informations-center">          
              <span id="star"><el-rate
              v-model="item.rating"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate></span>
            <span class="psmall informations-right" id="zhunshida">准时达</span>
            <span class="psmall informations-right" id="birds-order" v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
            <span class="psmall" id="yuehou">月售{{item.recent_order_num}}单</span>
          </div>
          <div class="shop-informations-bottom">
            <span class="psmall">￥{{item.float_minimum_order_amount}}起送/{{item.piecewise_agent_fee.tips}}</span>
            <span class="psmall informations-right" id="order_lead_time">{{item.order_lead_time}}</span>
            <span class="psmall informations-right">{{item.distance}}/</span>
          </div>
      </div>
       </router-link>
       </div>
    </div>
  </div>
</template>

<script>
import {score} from 'element-ui';
export default {
  name: "shops",
  data() {
    return {
      data: []
    };
  },
  created(){
    let api = "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    this.$http.get(api).then((data)=>{
          this.data = data.data;
        });
      }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  margin: 0;
  padding: 0;
}
span{
  margin-left: 0.1rem;
}
.shopTop-img {
  width: 5%;
  margin-left: 0.1rem;
}
.nearbyShops {
  color: gray;
  font-size: 0.1rem;
}
.shop-Images {
  width: 100%;
}
.psmall{
  font-size: 0.1rem;
  color: gray;
}
.el-rate__item{
  width: 0.0094rem;
}
.el-rate__icon{
  font-size: 0.1rem;
}
.el-rate__text{ 
  font-size: 0.1rem;
}
.shop-content{
  overflow: hidden;
  margin-top: 0.2rem;
  padding-bottom: 0.2rem;
  border-bottom: 0.01rem solid ghostwhite;
}
.shop-informations-images{
  width: 17%;
  float: left;
  margin-left: 0.1rem;
}
.shop-informations{
  width: 78%;
  float: left;
  margin-left: 0.01rem;
}
.informations-right{
  float: right;
  font-size: 0.1rem;
  color: gray;
}
.shop-informations-center{
  overflow: hidden;
  margin-top: 0.1rem;
}
.shop-informations-bottom{
  overflow: hidden;
  margin-top: 0.1rem;
}
#yueshou{
  float: left;
}
#star{
  margin-left: 0;
  float: left;
}
.pinpai{
  color: black;
  padding-left: 0.05rem;
  padding-right: 0.05rem;
  font-size:0.1rem;
  background-color:yellow;
}
#order_lead_time{
  color: rgb(0, 132, 255);
}
#birds-order{
  color: white;
  background-color: rgb(0, 132, 255);
}
#zhunshida{
  color: rgb(0, 132, 255);
  background-color: white;
  border: 1px solid rgb(0, 132, 255);
}
#shopsName{
  color: black;
}
</style>
