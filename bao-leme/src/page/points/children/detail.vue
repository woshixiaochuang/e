<template>
<div>
  <aheader :input-name="name"></aheader>
    <div class="detail">
        <p>Q1:怎么获得积分？</p>
        <div>在线支付的订单将获得订单积分奖励：
积分将在用户完成评价后获得。
可获得积分=订单金额×10（即1元=10点积分）。
订单金额指实际付款金额，不包含活动优惠金额。
每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</div>
        <p>Q2: 积分用来做什么？</p>
        <div>可以在积分商城兑换各种礼品。</div>
        <p>Q3:礼品兑换很多天了还没有收到，该怎么办？</p>
        <div>礼品从兑换日起，3个工作日内处理发货，发货后，通常会在3个工作日左右送达</div>
        <p>Q4:礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认吗</p>
        <div>不会，</div>
    </div>
    </div>
</template>
   <script>
   import Aheader from "../../../components/header/header.vue"
export default {
  name: "detail",
  components:{
    Aheader
  },
  data(){
    return{
      name:"积分问题"
    }
  }
};
</script>
<style scoped>

.detail{
  width: 90%;
  margin: 0 auto;
  margin-top: .1rem;
}
p {
  font-size: 0.2rem;
  margin:.1rem 0;
}
div{
  font-size: 0.08rem;
  line-height: 0.2rem;
  margin: 0;
  padding: 0;
}

</style>
