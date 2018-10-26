<template>
    <div>
        <Aheader :inputName="name"></Aheader>
        <div class="profile">
            <el-row>
                <el-col :span='3'>
            <div class="profilephoto">
                <img src="../../images/login.png">
            </div>
                </el-col>
                <el-col :span='18'> 
                    <router-link :to="link">
            <div class="login">
                <p>{{username}}</p>
                <p>暂无绑定手机号</p>
            </div>
                   </router-link>
                </el-col>
                <el-col :span='3'>
                    <img src="../../images/more.png">
                </el-col>
            </el-row>
        </div>
        <footGuide></footGuide>
        <div class="onsale">
         <el-row class="center">  
           <el-col :span='8'>
               <router-link to="/balance" >
               <div>
               <p class="balance orange">0.00元</p>
               <br>
               <p>我的余额</p>
               </div>
               </router-link>
            </el-col> 
           <el-col :span='8'>
               <div>
               <p class="balance red">0个</p>
               <br>
               <p>我的优惠</p>
               </div>
           </el-col>
           <el-col :span='8'>
               <router-link to="/points">
               <div>
               <p class="balance green">0分</p>
               <br>
               <p>我的积分</p> 
               </div>  
               </router-link> 
            </el-col> 
         </el-row>
         </div> 
         <div class="subtitle">
             <div v-for="(item,index) in subtitle" :key="index">
               <router-link :to="item.path">
                 <img :src="item.img">
                 <span>{{item.title}}</span>
                 <i class="el-icon-arrow-right"></i>
                 </router-link>
             </div>
         </div>
         <div  class="subtitle second" >
              <div>
                <img src="../../images/service.png"> 
                <span>服务中心</span>
                 <i class="el-icon-arrow-right"></i>
             </div>
             <div>
                <img src="../../images/app.png"> 
                <span>下载饿了么</span>
                 <i class="el-icon-arrow-right"></i>
             </div>
         </div>
    </div>
</template>
<script>
import Aheader from "../../components/header/header";
import footGuide from "../../components/footer/footGuide";
import scar from "../../images/scar.png";
import vip from "../../images/vip.png";
import score from "../../images/score.png";

export default {
  name: "profile",
  components: {
    Aheader,
    footGuide
  },
  data() {
    return {
      name: "我的",
      username:"登录/注册",
      link:"login",
      subtitle: [
        { img: scar, title: "我的订单",path:"/order"},
        { img: score, title: "积分商城",path:"/" },
        { img: vip, title: "饿了么会员卡",path:"vipcard"}
      ]
    };
  },
  created() {
      let n = localStorage.username;

    if (n) {
      this.username = n;
      this.link = "/profile/info"
    }
  }
};
</script>
<style scoped>
.profile {
  width: 100%;
  height: 1rem;
  font-size: 0.2rem;
  background: #0474f5f1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profilephoto img {
  width: 100%;
  border-radius: 50%;
}
.profile img {
  width: 100%;
}
.center {
  font-size: 0.17rem;
  text-align: center;
  height: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.balance {
  font-size: 0.3rem;
}
.orange {
  color: orange;
}
.red {
  color: red;
}
.green {
  color: green;
}
.onsale {
  border-bottom: 0.1rem solid rgb(228, 224, 224);
}
.subtitle {
  font-size: 0.2rem;
  border-bottom: 0.1rem solid rgb(228, 224, 224);
}

.subtitle div {
  padding: 0.1rem;
}
.subtitle img {
  width: 0.2rem;
}
.el-icon-arrow-right {
  float: right;
}
.second {
  border-bottom: none;
}
</style>
