<template>
    <div id="forget">
    <div id="box">
      <router-link id="ele"  :to="{name:'login'}"><i class="el-icon-arrow-left" style="position:absolute;left:.1rem;font-size:.2rem;font-weight: bolder;color:white"></i></router-link>
      <div style=" text-align:center;"><span style="font-size:.2rem; font-weight: bolder;color:white">重置密码</span></div>
    </div>
     <ul>
              <li class="input">
                  <input class="input_1" type="text" placeholder="账号" v-model="username">
              </li>
              <li class="input">
                  <input class="input_1" type="text" placeholder="旧密码" v-model="oldpassword">
              </li>
              <li class="input">
                  <input class="input_1" type="text" placeholder="请输入新密码" v-model="newpassword">
              </li>
              <li class="input">
                  <input class="input_1" type="text" placeholder="请确认密码" v-model="confirmpassword">
              </li>
               <li class="input" style="position:relative">
                  <input v-model="code" onkeyup="if(/\D/.test(this.value)){alert('只能输入数字');this.value='';}" maxlength="4" class="input_1" type="text" placeholder="验证码"><img style="padding-top:.02rem" :src="img" alt="验证码">
                  <div id="size" style="position:absolute;right:.1rem;top:.16rem;">
                  <p style="margin-bottom:.03rem">看不清</p>
                  <p @click="change" style="color:#0474f5f1">换一张</p>
                  </div>
              </li>
              <li style="margin-top:.2rem; text-align:center">
                
                  <input @click="btn" style="background:#00FA9A;width:90%;height:.4rem;font-size:.18rem;color:white;font-weight: bolder;border-radius: .05rem;" type="submit" value="确认修改">
             
                  </li>
                 
       </ul>

    </div>
</template>

<script>
export default {
  name: "forget",
  data() {
    return {
      on: false,
      img: [],
      username: "",
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
      code: "",
      message:""
    };
  },
  created() {
     console.log(this.message)
    let api = "/api/v1/captchas";
    this.axios.post(api).then(data => {
      this.img = data.data.code;
    });
  },
  methods: {
    change() {
      let api = "/api/v1/captchas";
      this.axios.post(api).then(data => {
        this.img = data.data.code;
        console.log(data);
      });
    },
    btn() {
      let api =
        "/api/v2/changepassword?username=" +
        this.username +
        "oldpassWord=" +
        this.oldpassword +
        "newpasswprd=" +
        this.newpassword +
        "confirmpassword" +
        this.confirmpassword +
        "captcha_code" +
        this.code;
        this.axios.post(api).then(data => {
        this.message = data.data.message
       
      });
    }
  }
};
</script>

<style scoped>
#box {
  background-color: #0474f5f1;
  height: 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
ul li {
  width: 100%;
}
.input {
  background: white;
  border-bottom: 0.02rem solid #eaf0f0f1;
}
.input_1 {
  width: 2rem;
  height: 0.2rem;
  padding: 0.18rem;
  font-size: 0.2rem;
}
</style>
