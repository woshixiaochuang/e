<template>
    <div>
        <div id="box">
      <router-link id="ele"  :to="{name:'search'}"><i class="el-icon-search" style="position:absolute;left:.1rem;font-size:.2rem;font-weight: bolder;color:white"></i></router-link>
      <div style=" text-align:center;"><span @click="city()" style="font-size:.2rem; font-weight: bolder;color:white">{{name}}</span></div>
      <img v-if="logings" :src="img" @click="change()" style="width:.31rem;position:absolute;right:.1rem;">
       <router-link style="color:white;position:absolute;right:.1rem;" v-else :to="{name:'login'}">登录|注册</router-link>
        </div>
         <div class="top" style="height:2.1rem;width:100%;background:white;position: relative;overflow: hidden;"><!--overflow: hidden; -->
            <v-touch v-on:swipeleft="swiperleft()" v-on:swiperight="swiperight()">
            <div id="lb" class="top_center" style="width:200%;height:100%;position: absolute;top:0;left:0">
                <ul class="center" style="width:100%;height:1.9rem;overflow: hidden;">
                    <li @click="changeshopping(item.title)" class="center_l" v-for="(item,index) in title" :key="index">
                      <img class="title_img" :src="'https://fuss10.elemecdn.com'+item.image_url" alt="">
                      <p id="p" style="margin:0px;font-size:.12rem;">{{item.title}}</p>
                      </li>  
                </ul>
            </div>
            </v-touch>
             <div class="dot">
                      <div id="dot_l" style="background:#0474f5f1"></div>
                      <div id="dot_r"></div>
                  </div>
            
        </div>
      <div style="margin-top:.2rem;background:white;position:relative">
        <p><img style="width:.2rem;position:absolute;top:.05rem;left:.1rem" :src="msg" alt=""><span style="font-size:.14rem;position:absolute;top:.1rem;left:.25rem">附件商家</span></p>
       <shoppingLie></shoppingLie>
      </div>
        <footers></footers>
        <loading v-if="num != 1"></loading>
    </div>
</template>

<script>
//elm.cangdu.org/img/164ad0b6a3917599.jpg
   const Lb = document.getElementById("lb");
import imgs from "../../images/default.png";
import footers from "../../components/footer/footGuide.vue";
import shoppingLie from "../../components/shop/children/shopsLiebiao";
import Shoppingimgs from "../../images/Msiteshopping.png";
import loading from "../../components/common/loading";
export default {
  name: "msite",
  components: {
    footers,
    shoppingLie,
    loading
  },
  data() {
    return {
      latitude: localStorage.latitude,
      longitude: localStorage.longitude,
      name: localStorage.shopping_name,
      geohash: "",
      img: imgs,
      title:"",
      shopping:"",
      leftchange:"",
      leftd:"",
      msg:Shoppingimgs,
      num:1,
      logings:false
    };
  },
  created() {
    if(localStorage.username != null&&localStorage.password != null){
      this.logings = true
    }else{
      this.logings = false
    }
    this.num -= 2
    this.geohash = this.$route.params.geohash;
    let api ="https://elm.cangdu.org/shopping/restaurants?latitude=" +
      this.latitude +
      "&longitude=" +
      this.longitude +
      "&order_by=5";
      this.axios.get(api).then(data => {
      this.shopping=data.data;
      this.num += 1;
    });
    let api1 = "https://elm.cangdu.org/v2/index_entry";
    this.axios.get(api1).then(data =>{
        this.title = this.shoppingTitle(data.data); 
        this.num += 1;
    })
  },
  methods: {
    change() {
      this.$router.push({name:"profile"});
    },
    shoppingTitle(obj){
        let x = obj[8];let z = obj[9];let d = obj[10];let t = obj[11];
        obj[8]=obj[4];obj[9]=obj[5];obj[10]=obj[6];obj[11]=obj[7];
        obj[4]=x;obj[5]=z;obj[6]=d;obj[7]=t;
        return obj
    },
    changeshopping(title){
      this.$router.push({name:"foot",
      params:{
        title:title
      }
      })
    },
    swiperleft(){
      let dw = (lb.offsetWidth)/2;
      setTimeout(function(){
        lb.style.left = -dw + "px";
        dot_l.style.background = "#eaf0f0f1";
        dot_r.style.background = "#0474f5f1"
      },20)
    },
    swiperight(){
      setTimeout(function(){
      lb.style.left = 0 + "px";
      dot_l.style.background = "#0474f5f1";
      dot_r.style.background = "#eaf0f0f1"
      },20)
    },
    city(){
      this.$router.push({path:"/city/"+localStorage.city_id})
      
    }
  },
  
};
</script>

<style scoped>
#box {
  background-color: #0474f5f1;
  height: 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  
}
.center{
    display: flex;
    flex-wrap:wrap
}
.center_l{
    width: 12.5%;
    text-align: center;
    position: relative;
    font-size:.012rem;
    background:white;
}
.title_img{
  width: .55rem;
  /* position: absolute; */
  /* top:0;
  left: 0;
  right: 0;
  margin: 0 auto; */
}
.dot{
width: 100%;
display:flex;
justify-content:center;
position: absolute;
bottom:0;
}
.dot div{
  background: #eaf0f0f1;
  width: .1rem;
  height:.1rem;
  margin: .05rem;
  border-radius: 50%;
}
#dot_l{
  background-color: #0474f5f1;
}
.shopping_j{
border:.01rem solid red;
padding: .15rem;
}
.shopping_img{
  width: .7rem;
}
#lb{
  transition: all 2s;
}
</style>
