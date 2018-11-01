<template>
<div>
  <Aheader :input-name="message"></Aheader>
  <input v-model="num" type="text" placeholder="请输入兑换码" class="cdkey">
<div style="display: flex;align-items: center">
  <input v-model="numm" type="text" placeholder="验证码" class="code">
  <img :src="img" style="background-color: #fff;padding: .1rem;margin-top: .2rem;">
  <span style="display: inline-block;width: 15%;background-color: #fff;" @click="change">看不清换一张</span>
</div>
  <button @click="sub" class="con">兑换</button>
</div>
</template>

<script>
  import Aheader from "../../../components/header/header";
    export default {
        name: "exchange",
      components:{
        Aheader
      },
      data(){
        return{
          message:"兑换红包",
          img:"",
          num:'',
          numm:''
        }
      },
      created(){
          let api = "https://elm.cangdu.org/v1/captchas"
          this.axios.post(api).then(
            data=>{
              this.img = data.data.code
            }
          )
      },
      methods:{
          change(){
            let api = "https://elm.cangdu.org/v1/captchas"
            this.axios.post(api).then(
              data=>{
                this.img = data.data.code
              }
            )
          },
        sub(){
            let api = "https://elm.cangdu.org/v1/users/"+localStorage.user_id+"/hongbao/exchange"
          this.axios({
            url:api,
            method:"post",
            data:{
              user_id:localStorage.user_id,
              exchange_code:this.num,
              captcha_code:this.numm
            }
          }).then(
            data=>{
              alert(data.data.message)
            }
          )
        }
      }
    }
</script>

<style scoped>
.cdkey{
width: 92%;
  height: .5rem;
  font-size: .2rem;
  margin-left: 4%;
  margin-top: .2rem;
  outline: none;
}
  .code{
    width: 40%;
    height: .5rem;
    font-size: .2rem;
    margin-left: 4%;
    margin-top: .2rem;
    outline: none;
  }
  span{
    margin-top: .3rem;
    height: .5rem;
  }
  .con{
    width: 90%;
    margin-left: 5%;
    margin-top: .2rem;
    background-color: greenyellow;
    color: #fff;
    height: .5rem;
    border-radius: .05rem;
    outline: none;
  }
</style>
