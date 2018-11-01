<template>
  <div class="shops">
<<<<<<< HEAD
=======
    <!-- <keep-alive> -->
>>>>>>> 4acc9e2934dffec12ab7f1a82363c51efced45af
    <div class="shopsTop">
      <img class="shopTop-img" src="" alt="">
    </div>
    <div class="shopListings">
       <div class="shop-content" v-for="(item,index) in data" :key="index">
          <router-link :to="{name:'shopsDange',params:{id:item.id}}">
            <div class="shop-informations-images">
               <img class="shop-Images" :src="'https://elm.cangdu.org/img/'+item.image_path" alt="">
          </div>
          <div class="shop-informations">
          <div class="shop-informations-top">
            <span  class="pinpai" v-if="item.is_premium">品牌</span>
            <span id="shopsName">{{item.name}}</span>
            <span class="informations-right" v-for="(item1,index) in item.supports" :key="index">{{item1.icon_name}}</span>
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
<<<<<<< HEAD
=======
      <!-- </keep-alive> -->
>>>>>>> 4acc9e2934dffec12ab7f1a82363c51efced45af
  </div>
</template>

<script>
import { score } from "element-ui";
export default {
  props: ["id", "obj", "order", "psid"],
  name: "shops",
  data() {
    return {
      data: [],
      latitude: localStorage.latitude,
      longitude: localStorage.longitude,
      order_by: 5,
      psids: ""
    };
  },
  created() {
    let api =
      "/api/shopping/restaurants?latitude=" +
      this.latitude +
      "&longitude=" +
      this.longitude +
      "&order_by=" +
      this.order_by;
    this.$http.get(api).then(data => {
      this.data = data.data;
    });
  },
  watch: {
    order() {
       let api =
      "/api/shopping/restaurants?latitude=" +
      this.latitude +
      "&longitude=" +
      this.longitude +
      "&order_by=" +
      this.order;
    this.$http.get(api).then(data => {
      this.data = data.data;
    });
    },
    obj() {
      let s = [...this.obj];
      if (s.length == 0) {
        let api1 =
          "/api/shopping/restaurants?latitude=" +
          this.latitude +
          "&longitude=" +
          this.longitude;
        this.$http.get(api1).then(data => {
          this.data = data.data;
        });
      } else if (s.length == 1) {
        let api1 =
          "/api/shopping/restaurants?latitude=" +
          this.latitude +
          "&longitude=" +
          this.longitude+
          "&support_ids[]="+s[0];
        this.$http.get(api1).then(data => {
          this.data = data.data;
        });
      } else if (s.length == 2){
         let api1 =
          "/api/shopping/restaurants?latitude=" +
          this.latitude +
          "&longitude=" +
          this.longitude+
          "&support_ids[]="+s[0]+
          "&support_ids[]="+s[1];
        this.$http.get(api1).then(data => {
          this.data = data.data;
        });
      } else if (s.length == 3){
         let api1 =
          "/api/shopping/restaurants?latitude=" +
          this.latitude +
          "&longitude=" +
          this.longitude+
          "&support_ids[]="+s[0]+
          "&support_ids[]="+s[1]+
          "&support_ids[]="+s[2];
        this.$http.get(api1).then(data => {
          this.data = data.data;
        });
      } else if (s.length == 4){
         let api1 =
          "/api/shopping/restaurants?latitude=" +
          this.latitude +
          "&longitude=" +
          this.longitude+
          "&support_ids[]="+s[0]+
          "&support_ids[]="+s[1]+
          "&support_ids[]="+s[2]+
          "&support_ids[]="+s[3]
        this.$http.get(api1).then(data => {
          this.data = data.data;
        });
      } else if (s.length == 5){
         let api1 =
          "/api/shopping/restaurants?latitude=" +
          this.latitude +
          "&longitude=" +
          this.longitude+
          "&support_ids[]="+s[0]+
          "&support_ids[]="+s[1]+
          "&support_ids[]="+s[2]+
          "&support_ids[]="+s[3]+
          "&support_ids[]="+s[4];
        this.$http.get(api1).then(data => {
          this.data = data.data;
        });
      } else if (s.length == 6){
         let api1 =
          "/api/shopping/restaurants?latitude=" +
          this.latitude +
          "&longitude=" +
          this.longitude+
          "&support_ids[]="+s[0]+
          "&support_ids[]="+s[1]+
          "&support_ids[]="+s[2]+
          "&support_ids[]="+s[3]+
          "&support_ids[]="+s[4]+
          "&support_ids[]="+s[5];
        this.$http.get(api1).then(data => {
          this.data = data.data;
        });
      }
    },
    id() {
       let api =
      "/api/shopping/restaurants?latitude=" +
      this.latitude +
      "&longitude=" +
      this.longitude +
      "&restaurant_category_ids[]=" +
      this.id;
    this.$http.get(api).then(data => {
      this.data = data.data;
    });
    },
    psid() {
      if (this.psid == 1) {
        this.psids = this.psid;
        let api =
          "/api/shopping/restaurants?latitude=" +
          this.latitude +
          "&longitude=" +
          this.longitude +
          "&delivery_mode[]=1";
        this.$http.get(api).then(data => {
          this.data = data.data;
        });
      } else {
        let api1 =
          "/api/shopping/restaurants?latitude=" +
          this.latitude +
          "&longitude=" +
          this.longitude;
        this.$http.get(api1).then(data => {
          this.data = data.data;
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  margin: 0;
  padding: 0;
}
.shops{
  background-color: white;
}
span{
  margin-left: 0.1rem;
}
.shop-Images {
  width: 100%;
}
.psmall {
  font-size: 0.1rem;
  color: gray;
}
.el-rate__item {
  width: 0.0094rem;
}
.el-rate__icon {
  font-size: 0.1rem;
}
.el-rate__text {
  font-size: 0.1rem;
}
.shop-content {
  overflow: hidden;
  margin-top: 0.2rem;
  padding-bottom: 0.2rem;
  border-bottom: 0.01rem solid ghostwhite;
}
.shop-informations-images {
  width: 17%;
  float: left;
  margin-left: 0.1rem;
}
.shop-informations {
  width: 78%;
  float: left;
  margin-left: 0.01rem;
}
.informations-right {
  float: right;
  font-size: 0.1rem;
  color: gray;
}
.shop-informations-center {
  overflow: hidden;
  margin-top: 0.1rem;
}
.shop-informations-bottom {
  overflow: hidden;
  margin-top: 0.1rem;
}
#yueshou {
  float: left;
}
#star {
  margin-left: 0;
  float: left;
}
.pinpai {
  color: black;
  padding-left: 0.05rem;
  padding-right: 0.05rem;
  font-size: 0.1rem;
  background-color: yellow;
}
#order_lead_time {
  color: #409eff;
}
#birds-order {
  color: white;
  background-color: #409eff;
}
#zhunshida {
  color: #409eff;
  background-color: white;
  border: 1px solid #409eff;
}
#shopsName {
  color: black;
}
</style>
