<template>
<div class="detailed-information">
    <div class="shopsDetailed-top">
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
        <div class="bottomInformation" v-if="data.activities">
            <span>{{data.activities[0].icon_name}}</span>
            <span>{{data.activities[0].description}}</span>
        </div>
    </div>
    <div class="goods-evaluation">
        <div class="shangpinPingjia">
        <a href="###" @click.prevent="handle('shangpin')">商品</a>
        <a href="###" @click.prevent="handle('pingjia')">评价</a>
        </div>
        <component :is="cc"></component>
    </div>
    
</div>
</template>

<script>
import shangpin from './shopsDange-zujian/shangpin';
import pingjia from './shopsDange-zujian/pingjia';
export default {
  name: 'shopsDange',
  data() {
    return {
      data: [],
      shangpin:"shangpin",
      pingjia:"pingjia",
      cc:"shangpin"
    };
  },
  components:{
      shangpin,
      pingjia
  },
  methods:{
      handle(value){
          this.cc = value;
      }
  },
  created(){
    var id = this.$route.params.id;
    let api = "https://elm.cangdu.org/shopping/restaurant/"+id;
    this.$http.get(api).then((data)=>{
          this.data = data.data;
          console.log(this.data)
        });
    
      }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
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
    border: 0.01rem solid lightgrey;
}
.topImages-mohu img{
    width: 100%;
    filter: blur(10px);
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);
    -o-filter: blur(10px);
    height: 1.2rem;
    overflow: hidden;
}
.shopsDetailed-top{
    padding: 0.1rem;
    overflow: hidden;
    height: 1.2rem;
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
}
.bottomInformation span:nth-child(1){
    background-color: orangered;
    padding: 0.02rem;
}
.shangpinPingjia{
    width: 100%;
    height: 0.4rem;
    border-bottom: 0.01rem solid lightgrey;
    display: flex;
    justify-content:space-around;
}
</style>
