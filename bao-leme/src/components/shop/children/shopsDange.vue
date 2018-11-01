<template>
<div class="detailed-information">
    <div class="shopsDetailed-top">
        <a class="el-icon-arrow-left" id="fanhui" href="http://localhost:8080/#/msite"></a>
        <router-link class="el-icon-arrow-right" id="jiantouOne" :to="{name:'shopdetail',params:{id:$route.params.id}}"></router-link>
        <div class="topImages-mohu">
            <img :src="'https://elm.cangdu.org/img/'+data.image_path" alt="">
        </div>
        <div class="topImages">
            <img :src="'https://elm.cangdu.org/img/'+data.image_path" alt="">
        </div>
        <div class="topInformation">
            <p class="pname">{{data.name}}</p>
            <p class="pInformation" v-if="data.piecewise_agent_fee">商家配送 / 分钟必达 / {{data.piecewise_agent_fee.tips}}</p>
            <p class="pInformation">公告: {{data.promotion_info}}</p>
        </div>
        <div class="bottomInformation" v-for="(item,index) in data.activities" :key="index">
            <span>{{item.icon_name}}</span>
            <span>{{item.description}} (APP专享)</span>
        </div>
        
    </div>
    <div class="goods-evaluation">
        <div class="shangpinPingjia">
        <a :class="{sp:changeRed }" href="###" @click.prevent="handle('shangpin',true)">商品</a>
        <a :class="{sp:!changeRed }" href="###" @click.prevent="handle('pingjia',false)">评价</a>
        </div>
        <component :is="cc"></component>
    </div>
</div>
</template>

<script>
import { Loading } from "element-ui";
import shangpin from './shopsDange-zujian/shangpin';
import pingjia from './shopsDange-zujian/pingjia';
export default {
  name: 'shopsDange',
  data() {
    return {
      data: [],
      shangpin:"shangpin",
      pingjia:"pingjia",
      cc:"shangpin",
      changeRed:true,
      loading:true
    };
  },
  components:{
      shangpin,
      pingjia
  },
  methods:{
      handle(value,value2){
          this.cc = value;
          this.changeRed=value2;
      }
  },
  created(){
    let loadingInstance1 = Loading.service({ fullscreen: true });
    var id = this.$route.params.id;
    let api = "https://elm.cangdu.org/shopping/restaurant/"+id;
    this.$http.get(api).then((data)=>{
          this.data = data.data;
        //   console.log(this.data)
        });
        loadingInstance1.close();
        this.loading = false;
      }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#jiantouOne{
    color: white;
    font-size: 0.2rem;
    position:absolute;
    top: 0.5rem;
    right: 0.01rem;
}
#fanhui{
    color: white;
    font-size: 0.3rem;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
}
.topImages{
    width: 20%;
    float: left;
}
.topImages img{
    width: 100%;
}
.topImages-mohu{
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 1.2rem;
    overflow: hidden;
}
.topImages-mohu img{
    width: 100%;
    filter: blur(10px);
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);
    -o-filter: blur(10px);
}
.shopsDetailed-top{
    padding: 0.1rem;
    overflow: hidden;
    height: 1rem;
    background-color: rgba(0, 0, 0, .2);
    /* border: 1px solid blue; */
}
.topInformation{
    float: left;
}
.topInformation p {
    color: white;
    margin-left: 0.1rem;
}
.pname{
    font-size: 0.2rem;
}
.pInformation{
    margin-top: 0.15rem;
    font-size: 0.1rem;
}
.bottomInformation{
    margin-top: 0.9rem;
    font-size: 0.1rem;
    color: white;
    /* border: 1px solid red; */
}
.bottomInformation span:nth-child(1){
    background-color: orangered;
    padding: 0.02rem;
}
.shangpinPingjia{
    /* width: 100%; */
    /* height: 0.4rem; */
    border: 0.01rem solid lightgrey;
    display: flex;
    justify-content:space-around;
    /* margin-top: 0.3rem; */
    padding: 0.1rem;
    background-color: white;
}
.shangpinPingjia a{
    font-size: 0.18rem;
    color: black;
    padding-bottom: 0.1rem;
}
.sp{
    color:blue !important;
    border-bottom: 0.02rem solid blue;
}
</style>
