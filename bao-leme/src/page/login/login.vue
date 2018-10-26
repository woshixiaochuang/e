<template>
<div>
    <Aheader :inputName="name"></Aheader>
    <div id="login">
      <div class="input"  style="windth:100%;background:white"><input class="padding-i" type="text" placeholder="账号" v-model="username"></div>
      <div class="input" style="windth:100%;background:white;position: relative;"><input class="padding-i" :type="type" placeholder="密码" v-model="password"> <div id="box_change" style="font-size:.15rem;background:#A9A9A9;position:absolute;right:.1rem;top:.21rem;width:.48rem;border-radius: .05rem;color:white">on <div id="box_box" @click="pass" style="border-radius: 50%;position:absolute;top:-0.05rem;left:-0.018rem;background:#696969;width:.25rem;height:.25rem;"></div> off</div></div>
      <div class="input" style="position: relative;width:100%;background:white"><input class="padding-i" onkeyup="if(/\D/.test(this.value)){alert('只能输入数字');this.value='';}"  style="width:2.3rem" type="text" placeholder="验证码" v-model="verifynum"><img class="aa" :src="img" alt=""> <div @click="verify" class="verify">
          <div style="position:absolute;right:.1rem;top:.16rem;">
          <div>看不清</div>
          <div>换一张</div>
          </div>
      </div></div>
    <li style="color:red;font-size:.12rem">
                  <p style="padding-top:.1rem;padding-left:.1rem">温馨提示: 未注册过的账号,登录时会自动注册</p>
                  <p style="padding:0.1rem">注册过的用户可凭账号密码登录</p>
              </li>
    <li style="text-align:center;width: 100%;">
    <input type="button" value="登录" style="line-height:.01rem;background:#00FA9A;width:90%;height:.4rem;font-size:.18rem;color:white;font-weight: bolder;border-radius: .05rem;"  @click.prevent="login">
    </li>
     <li style="text-align:right;padding-top:.4rem;margin-right:.4rem;">
      <router-link style="margin:.5rem,.2rem;font-size:.16rem;color:#0474f5f1" :to="{name:'forget'}">重置密码? &emsp;</router-link></li>
    </div>
    </div> 
</template>

<script>
import Aheader from "../../components/header/header";
export default {
  name: "login",
  components: {
    Aheader
  },
  data() {
    return {
      show: true,
      type: "password",
      img: "",
      name: "密码登录",
      username: "",
      password: "",
      verifynum: "",
      address: "###"
    };
  },
  methods: {
    pass() {
      if (this.on == true) {
        this.type = "text";
        box_box.style.left = ".234rem";
        box_change.style.background = "#00FA9A";
      } else {
        this.type = "password";
        box_box.style.left = "-0.018rem";
        box_change.style.background = "#A9A9A9";
      }
      this.on = !this.on;
    },
    verify() {
      let api = "https://elm.cangdu.org/v1/captchas";
      this.axios({
        method: "post",
        url: api,
        withCredentials: true
      }).then(data => {
        this.img = data.data.code;
      });
    },
    login() {
      //提交数据给后台
      let api = "https://elm.cangdu.org/v2/login";
      this.axios({
        method: "post",
        url: api,
        withCredentials: true, // 默认的
        data: {
          captcha_code: this.verifynum,
          password: this.password,
          username: this.username
        }
      }).then(data => {
        if (data.data.message) {
          alert(data.data.message);
        } else {
          console.log(data.data);
          this.$router.push({
            name: "profile",
            query: {
              user: data.data
            }
          });
        }
      });
      //存储用户名和密码
    localStorage.setItem('username',this.username);
    localStorage.setItem('password',this.password);
    }
  },
  mounted() {
    this.username= localStorage.username;
    this.password = localStorage.password;
    let api = "https://elm.cangdu.org/v1/captchas";
    this.axios({
      method: "post",
      url: api,
      withCredentials: true
    }).then(data => {
      this.img = data.data.code;
    });
  }
};
</script>

<style scoped>
input {
  font-size: 0.2rem;
  padding: 0.2rem 0;
  outline: medium;
}
.switch img {
  width: 50%;
}
.verify {
  color: blue;
  margin-top: 0.1rem;
}
.aa {
  margin-top: 0.1rem;
}
.annotation {
  color: red;
  width: 90%;
  margin: 0 auto;
}
.login {
  width: 80%;
  height: 0.5rem;
  color: white;
  background-color: rgb(146, 243, 122);
  margin-left: 10%;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  font-size: 0.2rem;
}
.input {
  border: 0.01rem solid #eaf0f0f1;
}
.padding-i {
  padding-left: 0.1rem;
}
</style>

