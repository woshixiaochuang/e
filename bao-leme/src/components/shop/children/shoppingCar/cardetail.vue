<template>
    <div class="bigcar">
        <div class="car-information" v-if="show">
            <div class="car-top">
                <span>购物车</span>
                <span @click="qk()">清空</span>
            </div>
            <div class="car-content" v-for="(item,index) in newshop" :key="index">
                <p class="car-name">{{item.foods[0].name}}</p>
                <p class="price2">${{item.foods[0].specfoods[0].price}}</p>
                <p class="plus2" @click="plus(item.foods[0].specfoods[0].food_id)">+</p>
                <p class="shuliang2" v-if="item.foods[0].specfoods[0].count>0">{{item.foods[0].specfoods[0].count}}</p>
                <p class="subtract2" v-if="item.foods[0].specfoods[0].count>0" @click="subtract(item.foods[0].specfoods[0].food_id)">-</p>
            </div>
        </div>
        <div class="shopping-car">
        <div class="car-left" @click="handle()">
            <p class="car"><img id="images" :src="imagess" alt=""></p>
            <p id="size" class="size">￥: <span>{{price2}}</span></p>
        </div>
        <div class="car-right" v-if="jiesuan">还差$20起送</div>
        <div class="car-right2" v-else>
            <router-link style="color:white" :to="{name:'jiesuan',params:{id:this.$route.params.id}}">去结算</router-link>
        </div>
    </div>
    </div>
</template>
<script>
import images from "../../../../images/buycart1.png"
export default {
    name:'cardetail',
    data(){
        return {
            show:false,
            id:"",
            imagess:images
        }
    },
    created(){
       let ss =  this.newshop
       console.log(ss)
       if(ss.length != 0){
           this.$store.commit("qk");
        // this.show=this.$store.state.show;
         this.show= false
       }
    },
    computed:{
        newshop(){
            return this.$store.state.arr.filter(num => num.foods[0].specfoods[0].count !=0)
        },
    price2(){
        if(this.$store.state.price.length==0){
            return this.$store.state.price2;
        }else{
            return this.$store.state.price;
        }
    },
    jiesuan(){
        this.$store.commit("jiesuan");
        return this.$store.state.show;
    }
    },
    methods:{
        handle(){
            if(this.newshop==""){
                this.show = false;
            }else{
                this.show = !this.show;
            }
        },
    plus(id){
      this.$store.commit("add", id);
    },
    subtract(id){
       this.$store.commit("remove", id);
    },
    qk(){
        this.$store.commit("qk");
        // this.show=this.$store.state.show;
         this.show= !this.show
    }
    }
}
</script>
<style>
.bigcar{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
}
.car-information{
    color: red;
    background-color: white;
    
}
.shopping-car{
    width: 100%;
    height: 0.6rem;  
    display: flex;
}
.car{
    color: white;
    background:black;
    border-radius: 50%;
    margin-left: .3rem;
}
.car-left{
    display: flex;
    background-color: gray;
    color: white;
    width: 70%;
    text-align: center;
}
.car-left p:nth-child(2){
    margin-left: 0.5rem;
    margin-top: 0.2rem;
    font-size: 0.2rem;
}
.car-right{
    background-color: gray;
    color: white;
    width:30%;
    text-align: center;
    line-height: .6rem;
}
.car-right2{
    background-color: green;
    color: white;
    width:30%;
    text-align: center;
    line-height: .6rem;
}
.car-top{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: rgb(187, 184, 184);
}
.car-content{
    border-bottom: 0.01rem solid gray;
    padding: 0.2rem;
}
.car-top span:nth-child(1){
    color: rgb(58, 57, 57);
    margin-left: 0.2rem;
}
.car-top span:nth-child(2){
    float: right;
    color: rgb(58, 57, 57);
    margin-right: 0.2rem;
}
.plus2,.subtract2{
  width: 0.15rem;
  height: 0.15rem;
  color: white;
  background-color: blue;
  text-align: center;
  line-height: 0.15rem;
  border-radius: 50%;
  float: right !important;
}
.shuliang2{
  color: red;
  float: right !important;
}
.price2{
    margin-left: 0.7rem;
}
.car-content p{
    float: left;
}
#images{
    width:.3rem;
    padding:.15rem;
    border-radius: 50%;
    background:black;
}
.size{
    position: absolute;
    left:20%;
}
</style>


