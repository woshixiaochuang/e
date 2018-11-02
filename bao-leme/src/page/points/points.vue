<template>
<div>
    <Aheader :input-name="name"></Aheader>
    <div class="balance">
        <div class="balancein">
            <div class="third">
                <el-row class="top">
                    <el-col :span='16'>
                <span>当前积分</span>
                <br>
                <p>0分</p>
                   </el-col>
                   <el-col :span='8'>
                <div>
                    <router-link to="/points/detail">
                <img src="../../images/help.png">
                <div class="state">积分说明</div>
                   </router-link>
                </div>
                   </el-col>
                </el-row>
                <div>
                    <button class="deposit">积分兑换奖品</button>
                </div>
            </div>
        </div>
    </div>
    <p class="detail">最近30天兑换记录</p>
    </div>
</template>
<script>
    import Aheader from '../../components/header/header.vue';
    export default {
        name:"points",
        components:{
            Aheader
        },
        data(){
            return{
                name:"我的积分"
            }
        }
    }
</script>
<style scoped>
.balance{
    height: 2rem;
    width: 100%;
    font-size: .2rem;
    background-color:#0474f5f1;
    display: flex;
     justify-content: center;
   align-items: center;
}
.balancein{
    width: 95%;
    height: 90%;
    background-color:white;
    border-radius: .05rem;
     display: flex;
     justify-content: center;
}
.balance img{
    width: .2rem;
}
.top{
    margin-top: .1rem
}
.state{
  display: inline-block;
    color:#0474f5f1;
}
p {
    font-size: .5rem;
    margin-top: .1rem;
}
.third{
    width: 95%;
}
.deposit{
    margin-top: .1rem;
    width: 100%;
    height: .6rem;
    color: white;
    font-size: .2rem;
    background-color: rgb(241, 61, 61);
    border: .01rem solid rgb(199, 197, 197);
    border-radius: .05rem
}
.detail{
    font-size: 0.1rem;
    width: 95%;
    margin: 0.1rem auto;
    color: rgb(199, 197, 197);
}
</style>

