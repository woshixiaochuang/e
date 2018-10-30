<template>
    <div>
      <Aheader :input-name="message"></Aheader>

      <div class="titles">
       <span class="title" @click="show=true">红包</span>
        <span class="title" @click="show=false">商家代金券</span>
      </div>
      <div v-if="show">
        <div style="width: 100%;overflow: hidden;">
          <span style=" float:left;padding:.1rem">有3个红包即将到期</span>
          <router-link to="/benefit/hbDescription">
          <span style="float:right;padding: .1rem">红包说明</span>
          </router-link>
        </div>
      <div class="hongbao" v-for="(item,index) in onsale" :key="index">
        <div class="price"><p>￥{{item.amount}}</p> <p style="font-size: .05rem">满{{item.sum_condition}}元可用</p></div>
        <div style="width:40%;float: left;height: 100%;padding-left: .2rem;">
          <p>{{item.name}}</p>
          <p style="font-size: .05rem;margin-top:.03rem">{{item.end_date}}到期</p>
          <p style="font-size: .05rem;margin-top:.03rem">限收货手机号为{{item.phone}}</p>
        </div>
        <div style="float:left;color: red; display: flex;align-items: center;">
          <span style="padding: .1rem">剩3日</span>
        </div>
      </div>
      <footer style="width: 90%;margin: auto;font-size: .05rem;">
        <p>限品类：快餐便当，特色菜系，小吃夜宵，甜品饮品，异国料理</p>
      </footer>
      <router-link to="/benefit/hbHistory">
      <div style="margin: .3rem auto;width: 50%" >查看历史红包></div>
      </router-link>
      <div style="width: 100%;background-color: #fff;" class="dibu">
        <router-link to="/benefit/exchange">
        <span>兑换红包</span>
        </router-link>
        <router-link  to="/benefit/commend">
        <span>推荐有奖</span>
        </router-link>
      </div>
      </div>
      <div v-else style="overflow: hidden;text-align: center">
        <p style="float: right;color: blue;font-size: .15rem;padding: .1rem">代金券说明</p>
        <p style="margin-top: 2rem;font-size: .3rem">无法使用代金券</p>
        <router-link to="/download">
        <button class="con">下载客户端</button>
        </router-link>
      </div>
      <load v-if="cartoon != 1"></load>
    </div>
</template>

<script>
  import load from "../../components/common/loading"
  import Aheader from "../../components/header/header";

    export default {
        name: "beneit",
      components:{
          Aheader,
        load
      },
      data(){
          return{
            message:"我的优惠",
            onsale:[],
            show:true,
            cartoon:1,
          }
      },
      // beforeCreate(){
      //
      // },
      created(){
        this.cartoon = this.cartoon-1
          let api = "https://elm.cangdu.org/promotion/v2/users/"+localStorage.user_id+"/hongbaos?limit=20&offset=0"
        this.axios({
          url:api,
          method:"get",
          withCredentials:true
        }).then(
          data=>{
           this.onsale = data.data;
           console.log("---------");
           this.cartoon = this.cartoon+1;
          }
        )
      }
    }
</script>

<style scoped>
  .titles{
    width: 100%;
    background-color: #fff;
  }
.title{
  display: inline-block;
  width:40%;
  font-size: .2rem;
  padding: 4%;
  text-align: center;
}
.price{
  width: 25%;
  border-right: 1px solid black;
  float: left;
}
  .price p {
    padding: .1rem;
  }
  .hongbao{
    width: 90%;
    margin-left: 5%;
    background-color: #fff;
    height:.7rem;
    overflow: hidden;
    margin-bottom: .2rem;
  }
  .dibu{
    position: absolute;
    bottom: 0;
  }
  .dibu span{
    display: inline-block;
    width:40%;
    text-align: center;
    padding: 4%;
  }
  .con{
    width: 90%;
    margin-left: 5%;
    margin-top: .2rem;
    background-color: #00FA9A;
    color: #fff;
    height: .5rem;
    border-radius: .05rem;
    outline: none;
    font-size: .3rem;
  }
</style>
