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
        <button class="ensure">确认支付</button>
    </div>
</template>
<script>
import Aheader from "../../../components/header/header";
import wechatpay from "../../../images/wechat.png";
import alipay from "../../../images/alipay.png";
import down from "../../../images/pitchdown.png";
import on from "../../../images/pitchon.png";
    export default {
        name:"payment",
        components:{
            Aheader
        },
        data(){
            return {
                message:"在线支付",
                time:"",
                wechatpay:wechatpay,
                alipay:alipay,
                show:true,
                al:on,
                we:down
            }
        },
        methods:{
            pitchon(){
                this.show =!this.show 
                if(this.show){
                    this.al = on;
                    this.we = down;
                }else{
                    this.al = down;
                    this.we = on;
                }
            }
        }
        ,
        created(){
            let t = 900;
            setInterval(()=>{
                t-=1;
                 let m =Math.floor(t/60);
                 let s = t - m*60;
                 if (s>=10) {
                     this.time = "00："+m+"："+s
                 }else{
                      this.time = "00："+m+"：0"+s
                 }
            },1000)
        }
    }
</script>
<style  scoped>
.time{
    width: 100%;
    height: 1.5rem;
    background-color: #fff;
    text-align: center
}
.title{
    padding-top: .5rem;
}
.timekeep{
    padding-top: .2rem;
    font-size: .4rem;
}
.method{
    padding: .2rem;
}
.pay{
    height: .4rem;
    background-color: #fff;
    margin-top: .1rem;
    padding: .1rem;
}
.pay img{
    width: .4rem;
}
.ensure{
    width: 90%;
    margin-top: .2rem;
    margin-left: 5%;
    height: .5rem;
    border-radius: .1rem;
    color: #fff;
    background-color: rgb(120, 221, 53);
    outline: none;
    font-size: .2rem;
}
</style>

