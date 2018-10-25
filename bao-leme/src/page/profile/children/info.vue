<template>
    <div>
        <aheader :input-name="name"></aheader>
        <div class="info">
            <div class="photo">
                <span>头像</span>
                <img src="../../../images/default.png">
            </div>
            <div class="username">
                <span>用户名</span>
                <span class="id">{{username}}</span>
            </div>
            <div class="address">
                收货地址
            </div>
        </div>
    </div>
</template>
<script>
  import Aheader from "../../../components/header/header.vue"
   export default {
       name:'info',
       components:{
           Aheader
       },
       data(){
           return{
               name:"账户信息",
               username:''
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
   }    
</script>
<style scoped>
.info{
    font-size: .2rem;
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
.address{
    padding: .1rem;
    border-top: .05rem solid rgb(229, 234, 235);
}
</style>

