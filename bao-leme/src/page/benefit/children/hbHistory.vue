<template>
    <div>
      <Aheader :input-name="message"></Aheader>
      <div class="hongbao" v-for="(item,index) in hbHistory" :key="index">
        <div class="price"><p>￥{{item.amount}}</p> <p style="font-size: .05rem">满{{item.sum_condition}}元可用</p></div>
        <div style="width:40%;float: left;height: 100%;padding-left: .2rem;">
          <p>{{item.name}}</p>
          <p style="font-size: .05rem;margin-top:.03rem">{{item.end_date}}到期</p>
          <p style="font-size: .05rem;margin-top:.03rem">限收货手机号为{{item.phone}}</p>
        </div>
        <div style="float:left;display: flex;align-items: center;">
          <span style="padding: .1rem">已过期</span>
        </div>
      </div>
      <load v-if="cartoon != 1"></load>
    </div>
</template>

<script>
  import Aheader from "../../../components/header/header";
  import load from "../../../components/common/loading"
    export default {
        name: "hbHistory",
      components:{
          Aheader,
        load
      },
      data(){
          return{
            message:"历史红包",
            hbHistory:[],
            cartoon:1
          }
      },
      created(){
          this.cartoon = this.cartoon-1;
        let api = "https://elm.cangdu.org/promotion/v2/users/"+localStorage.user_id+"/expired_hongbaos?limit=20&offset=0"
        this.axios({
          url:api,
          method:"get",
          withCredentials:true
        }).then(
          data=>{
            this.hbHistory = data.data;
            this.cartoon = this.cartoon+1;
          }
        )
      }
    }
</script>

<style scoped>
  .hongbao{
    width: 90%;
    margin-left: 5%;
    background-color: #fff;
    height:.7rem;
    overflow: hidden;
    margin-bottom: .2rem;
  }
  .price{
    width: 25%;
    border-right: 1px solid black;
    float: left;
  }
</style>
