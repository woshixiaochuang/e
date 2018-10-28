<template>
    <div>
        <Aheader :input-name="message"></Aheader>
        <p class="title">为账户{{username}}购买会员</p>
        <div>
            <div style="background:white;padding:.15rem">
                <span>会员特权</span><span class="state">会员说明></span>
            </div>
            <div class="vipstate" style="background:white;">
                <div class="save">
                    <img :src="imgsave">
                </div>
                <div class="content">
                    <p>减免配送费</p>
                    <span>每月减免30单，每日可减免3单，每单最高减免4元，蜂鸟专享专送</span>
                </div>
            </div>
             <div class="vipstate" style="background:white;">
                <div class="save">
                    <img :src="imgreduce">
                </div>
                <div class="content">
                    <p>减免配送费</p>
                    <span>每月减免30单，每日可减免3单，每单最高减免4元，蜂鸟专享专送</span>
                </div>
            </div>
            <div style="background:white;padding:.15rem;margin-top:.1rem">
                <span>开通会员</span>
            </div>
            <div style="background:white;padding:.15rem;margin-top:.1rem">
                <span>1个月</span><span class="money">￥20</span>
                <router-link to="/confirmOrder/payment">
                <button class="buy">购买</button>
                </router-link>
            </div>
            <div style="background:white;padding:.15rem;margin-top:.1rem">
                <span>兑换会员</span><span class="state">使用卡号卡密></span>
            </div>
            <div style="background:white;padding:.15rem;margin-top:.1rem">
                <span>购买记录</span><span class="state">开发票></span>
            </div>
        </div>
    </div>
</template>
<script>
    import Aheader from "../../components/header/header.vue";
    import save from "../../images/save.png";
    import reduce from "../../images/reduce.png";
    export default {
        name:'vipcard',
        components:{
            Aheader
        },
        data(){
            return {
                message:"会员中心",
                username:localStorage.username,
                imgsave:save,
                imgreduce:reduce
            }
        },
        
    }
</script>
<style scoped>
.title{
    margin: .2rem
}
.vipstate{
    overflow: hidden;
    margin-top: .1rem;
}
.save{
    width: 20%;
    float: left;
}
.save img{
    width: 75%;
}
.content{
    width: 80%;
    float: left;
}
.state{
    float:right;
}
.money{
    color: rgb(255, 153, 0);
}
.buy{
    background-color: white;
    border:1px solid rgb(255, 153, 0);
    color: rgb(255, 153, 0);
    float: right;
}
</style>
