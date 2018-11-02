<template>
    <div>
      <Aheader :input-name="message"></Aheader>
      <div class="shop" v-for="(item,index) in order" :key="index">
        <div class="order" style="overflow: hidden;">
          <img style="float: left" src="../../images/default.png">
          <div style="width:50%;float: left">
          <p>{{item.restaurant_name}}</p>
          <span>{{item.formatted_created_at}}</span>
          </div>
          <div style="width: 25%;float: right">
            {{item.status_bar.title}}
          </div>
        </div>
        <div style="padding-top: .1rem">
          <span>323-默认</span>
          <span style="float: right">￥{{item.total_amount}}</span>
          <br>
          <div style="float: right;padding-top: .1rem">
            <button class="time">{{residue}}</button>
          </div>
        </div>
      </div>
        <footers></footers>
      <loading v-if="cartoon != 1"></loading>
    </div>
</template>

<script>
import footers from "../../components/footer/footGuide";
import Aheader from "../../components/header/header";
import loading from "../../components/common/loading"
export default {
name:"order",
components:{
  Aheader,
  footers,
  loading
},
  data(){
  return {
    message:"我的订单",
    order:[],
    cartoon:1,
    residue:""
  }
  },
  created(){
    if(localStorage.user_id){
      this.cartoon -= 1;
  let api = "https://elm.cangdu.org/bos/v2/users/"+localStorage.user_id+"/orders?limit=10&offset=0"
    this.axios.get(api).then(
      data=>{
        this.order = data.data;
        console.log(data.data);

        let  ss = this.order
       console.log(ss[0].order_time);
        var time = ss[0].order_time +900000 - new Date().valueOf();
        var timeID =  setInterval( ()=> {
          if(time>= 0){
            this.residue = "支付剩余时间"+new Date(time).getMinutes()+"分"+new Date(time).getSeconds()+"秒";
            this.cartoon += 1;
          }else{
            this.residue = "支付超时";
            this.cartoon += 1;
            clearInterval(timeID);
          }
        },1000)

      }
    )
    }else{
      alert("请登录")
    }
  }
}
</script>

<style scoped>
.order img{
  width: .4rem;
}
  .time{
    background-color: #fff;
    color: orangered;
    border: 1px solid orangered;
  }
  .shop{
    background-color: #fff;
    overflow: hidden;
    padding: .1rem;
  }
</style>
