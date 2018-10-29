<template>
    <div>
      <Aheader :input-name="message"></Aheader>
      <h3 style="padding: .1rem">Q1:怎么获得红包</h3>
      <ul>
        <li>通过好友邀请获得</li>
        <li>在下单返红包的商家下单获得</li>
        <li>抢微信朋友分享的红包获得</li>
      </ul>
    </div>
</template>

<script>
  import Aheader from "../../../components/header/header";
    export default {
        name: "hbDescription",
      components:{
          Aheader
      },
      data(){
          return{
            message:"红包说明"
          }
      }
    }
</script>

<style scoped>
ul li {
  padding: .1rem;
}
</style>
