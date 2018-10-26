<template>
    <div>
        <aheader :input-name="name"></aheader>
        <div class="info">
            <div class="photo">
                <span>头像</span>
                <img src="../../../images/default.png">
            </div>
             <router-link to="/profile/info/setusername">
            <div class="username">
                <span>用户名</span>
                <span class="id">{{username}}</span>
            </div>
            </router-link>
            <router-link to="/profile/info/address">
            <div class="address">
                收货地址
            </div>
            </router-link>
            <p>账号绑定</p>
            <div class="phone">
            <img src="../../../images/phone.png">
            <span>手机</span>
            </div>
            <p>安全设置</p>
            <div class="alter">
                <span>登录密码</span>
                <span class="alterc">修改></span>
            </div>
        </div>
        <button @click="exit" class="exit">退出登录</button>
        <Alert alert-value="确定退出"></Alert>
    </div>
</template>
<script>
  import Aheader from "../../../components/header/header.vue"
  import Alert from "../../../components/common/alertTip.vue"
   export default {
       name:'info',
       components:{
           Aheader,Alert
       },
       data(){
           return{
               name:"账户信息",
               username:'',
               show:true
           }
       },
       created() {
           let api = "https://elm.cangdu.org/v1/user";
           this.axios({
                method: "get",
                url: api,
                 withCredentials: true
           }).then(
               data=>{
                   console.log(data.data);
                   this.username=data.data.username
               }
           )
       },
       methods:{
           exit(){
               let api = "https://elm.cangdu.org/v2/signout";
               this.axios.get(api).then(
                   this.$router.push({
                       path:"/profile"
                   }),
                  localStorage.clear()
               )
           }
       }
   }    
</script>
<style scoped>
.info{
    font-size: .2rem;
     background-color: white;
}
.photo{
    width: 100%;
    height: .8rem;
    border-top: .1rem solid rgb(229, 234, 235);
    display: flex;
    align-items: center
}
.photo img{
    height: 80%;
    margin-left: 64%;
    border:1px solid red
}
.photo span{
    margin-left: .1rem;
}
.username{
    width: 100%;
    padding: .1rem;
    border-top: .05rem solid rgb(229, 234, 235);
    position: relative;
}
.id{
    position: absolute;
    right: 0.3rem;
}
.address,p{
    padding: .1rem;
    border-top: .05rem solid rgb(229, 234, 235);
}
p{
    font-size: .1rem;
    background-color: #eaf0f0f1;
    width: 100%;
    padding: .1rem
}
.phone{
    padding: .1rem;
    display: flex;
    align-items: center;
}
.phone img {
    height: .4rem;
}
.alter{
    font-size: .2rem;
    padding:.1rem;
    display: flex;
    align-items: center;
}
.alter span{
padding:.1rem;
}
.exit{
    width: 90%;
    background-color: rgb(236, 73, 73);
    color: white;
    height: .4rem;
    margin-top: .2rem;
    margin-left: 5%;
    border-radius: .1rem;
}
</style>

