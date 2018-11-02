<template>
    <div class="jiesuan">
        <div class="querendingdan">
            <span class="el-icon-arrow-left" @click="handle()"></span>
            <span>确认订单</span>
        </div>
        <router-link to="/addname">
            <div class="js-address">
            <p class="user-information">233 先生 1223434423</p>
            <p class="el-icon-arrow-right add-address"></p>
        </div>
        </router-link>
        <div class="color-gray"></div>
        <div class="song-time">
            <div class="time-left">送达时间</div>
            <ul class="time-right">
                <li>
                    <span>尽快送达</span>|
                    <span>预计时间:1小时</span>
                </li>
                <li>蜂鸟转送</li>
            </ul>
        </div>
        <div class="color-gray"></div>
        <div class="pay-fangshi">
            <ul>
                <li>
                    <span class="pay-left">支付方式</span>
                    <span class="pay-right">在线支付></span>
                </li>
                <li>
                    <span class="pay-left">红包</span>
                    <span class="pay-right">暂时只在饿了么APP中支持</span>
                </li>
            </ul>
        </div>
        <div class="color-gray"></div>
        <div class="pay-information">
            <ul>
                <li>aaaa111</li>
                <li v-for="(item,index) in informations" :key="index">
                    <span>{{item.foods[0].name}}</span>
                    <span class="infor-right">$20</span>
                    <span class="infor-right cred">*1</span>
                </li>
                <li>
                    <span>餐盒</span>
                    <span class="infor-right">${{this.$store.state.price}}</span>
                </li>
                <li>
                    <span>配送费</span>
                    <span class="infor-right">$4</span>
                </li>
                <li>
                    <span>订单 ${{this.$store.state.price}}</span>
                    <span class="infor-right cred">待支付</span>
                </li>
                <li>
                    <span class="infor-right cred">${{this.$store.state.price}}</span>
                </li>
            </ul>
        </div>
        <div class="color-gray"></div>
        <div class="jiesuan-bottom">
            <ul>
                <li>
                    <span>订单备注</span>
                    <span @click="remark()"  class="bt-right">口味、偏好等></span>
                </li>
                <li>
                    <span>发票抬头</span>
                    <span @click="invoice()" class="bt-right">不需要开发票></span>
                </li>
            </ul>
        </div>
        <div class="hcolor-gray"></div>
        <div class="tobe-paid">
            <p class="tobepay-p1">待支付 ${{this.$store.state.price}}</p>
            <p @click="confirm()" class="tobepay-p2">确认下单</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "jiesuan",
  computed: {
    informations() {
      return this.$store.state.arr.filter(
        num => num.foods[0].specfoods[0].count != 0
      );
    }
  },
  methods: {
    handle() {
      this.$router.push({ path: "/shopsLiebiao/" + this.$route.params.id });
    },
    remark() {
      this.$router.push({ name: `remark` });
    },
    invoice() {
      this.$router.push({ name: `invoice` });
    },
    confirm() {
      this.$router.push({ name: `payment` });
    }
  }
};
</script>

<style>
.color-gray {
  width: 100%;
  height: 0.09rem;
  background-color: #e4e7ed;
}
.jiesuan {
  background-color: white;
}
.querendingdan {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.5rem;
  background-color: #409eff;
  color: white;
  line-height: 0.5rem;
}
.querendingdan span:nth-child(1) {
  font-size: 0.2rem;
}
.querendingdan span:nth-child(2) {
  margin-left: 1.3rem;
}
.js-address {
  height: 0.8rem;
  margin-top: 0.5rem;
  border-bottom: 0.01rem solid #e4e7ed;
  line-height: 0.8rem;
}
.user-information {
  width: 80%;
  float: left;
  text-align: center;
}
.song-time {
  height: 1.1rem;
  border-left: 0.09rem solid blue;
}
.time-left {
  float: left;
  height: 1.1rem;
  width: 40%;
  padding-left: 0.2rem;
  line-height: 1.2rem;
  font-size: 0.2rem;
  font-weight: bold;
  overflow: hidden;
  /* border: 1px solid blue; */
}
.time-right {
  padding-top: 0.2rem;
  /* border: 1px solid red; */
  overflow: hidden;
  height: 0.9rem;
}
.time-right > li {
  float: right;
  font-size: 0.15rem;
  color: blue;
  margin-top: 0.1rem;
}
.pay-fangshi li {
  height: 0.5rem;
  line-height: 0.5rem;
  border-bottom: 0.01rem solid #e4e7ed;
}
.pay-left {
  margin-left: 0.1rem;
}
.pay-right {
  float: right;
  margin-right: 0.1rem;
}
.pay-information li {
  height: 0.5rem;
  line-height: 0.5rem;
  border-bottom: 0.01rem solid #e4e7ed;
  overflow: hidden;
}
.infor-right {
  float: right;
  margin-right: 0.2rem;
}
.cred {
  color: orangered;
}
.jiesuan-bottom li {
  height: 0.5rem;
  line-height: 0.5rem;
  border-bottom: 0.01rem solid #e4e7ed;
}
.bt-right {
  float: right;
  margin-right: 0.2rem;
}
.hcolor-gray {
  width: 100%;
  height: 0.7rem;
  background-color: #e4e7ed;
}
.tobe-paid {
  width: 100%;
  height: 0.5rem;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
}
.tobepay-p1 {
  width: 70%;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 0.5rem;
}
.tobepay-p2 {
  width: 30%;
  background-color: green;
  color: white;
  text-align: center;
  line-height: 0.5rem;
}
</style>


