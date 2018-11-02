<template>
    <div> 
        <Aheader :input-name="message"></Aheader>
        <div class="time">
            <p class="title">支付剩余时间</p>
            <p class="timekeep">{{time}}</p>
        </div>
        <p class="method">选择支付方式</p>
        <div class="pay">
            <img :src="alipay">
           <span>支付宝</span>
           <img style="float:right" :src="al" @click="pitchon">
        </div>
        <div class="pay">
            <img :src="wechatpay">
           <span>微信</span>
           <img style="float:right" :src="we" @click="pitchon">
        </div>
        <button @click="ist()" class="ensure">确认支付</button>
        <Tip :alertValue="alertValue"></Tip>
    </div>
</template>
<script>
import Aheader from "../../../components/header/header";
import wechatpay from "../../../images/wechat.png";
import alipay from "../../../images/alipay.png";
import down from "../../../images/pitchdown.png";
import on from "../../../images/pitchon.png";
import Tip from "../../../components/common/alertTip";
export default {
  name: "payment",
  components: {
    Aheader,
    Tip
  },
  data() {
    return {
      message: "在线支付",
      time: "",
      wechatpay: wechatpay,
      alipay: alipay,
      show: true,
      al: on,
      we: down,
      alertValue: {}
    };
  },
  methods: {
    pitchon() {
      this.show = !this.show;
      if (this.show) {
        this.al = on;
        this.we = down;
      } else {
        this.al = down;
        this.we = on;
      }
    },
    ist() {
      this.alertValue = {
        msg: "确认支付",
        isshow: true,
        btn: "确认",
        zhifu: "jiesuan",
        cb() {
          return null;
        }
      };
      console.log(this.alertValue);
    }
  },
  created() {
    console.log(this.alertValue);
    let t = 900;
    setInterval(() => {
      t -= 1;
      let m = Math.floor(t / 60);
      let s = t - m * 60;
      if (s >= 10) {
        this.time = "00：" + m + "：" + s;
      } else {
        this.time = "00：" + m + "：0" + s;
      }
    }, 1000);
  }
};
</script>
<style  scoped>
.time {
  width: 100%;
  height: 1.5rem;
  background-color: #fff;
  text-align: center;
}
.title {
  padding-top: 0.5rem;
}
.timekeep {
  padding-top: 0.2rem;
  font-size: 0.4rem;
}
.method {
  padding: 0.2rem;
}
.pay {
  height: 0.4rem;
  background-color: #fff;
  margin-top: 0.1rem;
  padding: 0.1rem;
}
.pay img {
  width: 0.4rem;
}
.ensure {
  width: 90%;
  margin-top: 0.2rem;
  margin-left: 5%;
  height: 0.5rem;
  border-radius: 0.1rem;
  color: #fff;
  background-color: rgb(120, 221, 53);
  outline: none;
  font-size: 0.2rem;
}
</style>

