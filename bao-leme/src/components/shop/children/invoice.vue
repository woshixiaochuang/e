<template>
    <div id="invoice">
         <div id="box">
      <router-link id="ele"  :to="{name:'jiesuan'}"><i class="el-icon-arrow-left" style="position:absolute;left:.1rem;font-size:.2rem;font-weight: bolder;color:white"></i></router-link>
      <div style=" text-align:center;"><span style="font-size:.2rem; font-weight: bolder;color:white">{{name}}</span></div>
        </div>
        <div class="center" @click="dotdown()">
            <div id="center_r">
            <span>不需要开发票</span>
            <i id="trueandfalse" style="color:green" class="el-icon-success"></i>
            </div>
        </div>
        <button @click="btn()" id="btn">确定</button>
    </div>
</template>

<script>
import Head from "../../header/header"
export default {
    components:{
        Head
    },
    data(){
        return{
            name:"选择发票抬头",
            dot:false
        }
    },
    methods:{
        dotdown(){
            if(this.dot == false){
                trueandfalse.style.color = "gray"
            }else{
                trueandfalse.style.color = "green"
            }
            this.dot =! this.dot
        },
        btn(){
            this.$router.push({name:`jiesuan`})
        }
    }
}
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
.center{
margin-top: .117rem;
border: .01rem solid white;
background:white;
height: .58rem;
padding: 0 .164rem 0 .164rem;
display: flex;
flex-direction: column;
justify-content: center;
}
#center_r{
    display: flex;
    justify-content: space-between;
    font-size: .18rem;
}
#btn{
    width: 3.42rem;
    height: .42rem;
    border-radius: .07rem;
    margin:.11719rem .16406rem;
    background: #4cd964;
    color: white;
    font-size: .15rem;
    outline: none;
    border: none;
}
</style>
