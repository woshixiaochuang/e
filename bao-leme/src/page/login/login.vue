<template>
<div>
    <Aheader :inputName="name"></Aheader>
    <div id="login">
      <div><input type="text" placeholder="账号" v-model="id"></div>
      <el-row>
          <el-col :span="18">
      <div><input :type="type" placeholder="密码" v-model="password"></div>
          </el-col>
          <el-col :span="6">
          <div class="switch"><img @click="change" :src="eye" alt=""></div>
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
      <div><input type="text" placeholder="验证码" v-model="verifynum"></div>
      </el-col>
      <el-col :span="6">
          <img class="aa" :src="img" alt="">
      </el-col>
      <el-col :span="6">
      <div @click="verify" class="verify">
          <div>
          <div>看不清</div>
          <div>换一张</div>
          </div>
      </div>
      </el-col>
    </el-row>
    <div class="annotation">
    <div>温馨提示：未注册的账号，将自动注册</div>
    <div>注册过的账号可凭账号密码登录</div>
    </div>
    <button class="login" @click.prevent="login">登录</button>
    <div class="reset">?重置密码</div>
    </div>
    </div>
</template>

<script>
import eye from "../../images/eyein.png";
import eye1 from "../../images/eyeon.png";
import Aheader from "../../components/header/header";
export default {
  name: "login",
  components: {
    Aheader
  },
  data() {
    return {
      eye: eye,
      show: true,
      type: "password",
      img: "",
      name: "密码登录",
      id: "",
      password: "",
      verifynum: "",
      address: "###"
    };
  },
  methods: {
    change() {
      this.show = !this.show;
      if (this.show) {
        this.eye = eye1;
        this.password = "text";
      } else {
        this.eye = eye;
        this.password = "password";
      }
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
      let api = "https://elm.cangdu.org/v2/login";
      this.axios({
        method: "post",
        url: api,
        withCredentials: true, // 默认的
        data: {
          captcha_code: this.verifynum,
          password: this.password,
          username: this.id
        }
      }).then(data => {
        if (data.data.message) {
          alert(data.data.message);
        } else {
          console.log(data.data);
          this.$router.push({ name: "profile" ,
          query:{
              user:data.data
          }
          });
        }
      });
    }
  },
  mounted() {
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
  padding: 0.2rem 0.1rem;
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
.reset {
  color: blue;
  margin-top: 0.15rem;
}
</style>

