<template>
    <div>
      <Aheader :input-name="message"></Aheader>
      <img class="app" :src="app">
      <div style="width: 100%;text-align: center;margin-top: .2rem;font-size: .4rem">下载饿了么app</div>
      <button class="con">下载</button>
    </div>
</template>

<script>
  import Aheader from "../../components/header/header";
  import app from "../../images/app.png"
    export default {
        name: "download",
      components:{
          Aheader
      },
      data(){
          return{
            message:"下载饿了么",
            app:app
          }
      }
    }
</script>

<style scoped>
.app{
  width: 50%;
  margin-left: 25%;
  margin-top: .5rem;
}
.con{
  width: 90%;
  margin-left: 5%;
  margin-top: .2rem;
  background-color: #00FA9A;
  color: #fff;
  height: .5rem;
  border-radius: .05rem;
  outline: none;
  font-size: .3rem;
}
</style>
