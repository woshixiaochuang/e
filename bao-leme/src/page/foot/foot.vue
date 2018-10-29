<template>
<div id="foot">
    <Aheaders :inputName="name"></Aheaders>
    <div>
        <ul class="class">
            <li @click="change(0)">{{name}} <i class="el-icon-caret-bottom"></i></li>
            <li @click="change(1)">排序 <i class="el-icon-caret-bottom"></i></li>
            <li @click="change(2)">筛选 <i class="el-icon-caret-bottom"></i></li>
        </ul>
    </div>
    <div id="center">
        <div>
            <ul id="classshoping" v-for="(item,index) in shoppingclass" :key="index">
                <h1 @click="classshopingli(index)" style="font-size:.2rem">{{item.name}}</h1>
                 <div class="shoppingchilder" style="float: right;" v-for="(itemclass,index) in item.sub_categories" :key="index">
                 <li style="font-size:.12rem">
                    {{itemclass.name}}
                </li>
                </div>
            </ul>
        </div>
        <div></div>
        <div></div>
    </div>
    <div style="background:white">
    <shoppingLie ></shoppingLie>
    </div>
</div> 
</template>
<script>
import Aheaders from "../../components/header/header";
import shoppingLie from "../../components/shop/children/shopsLiebiao";
var shoppingchilder = document.getElementsByClassName("shoppingchilder")
export default {
    name:"foot",
    data(){
        return{
            name:this.$route.params.title,
            classfoot:false,
            sort:false,
            screen:false,
            latitude:localStorage.latitude,
            longitude:localStorage.longitude,
            shoppingclass:"",
        }
    },
components:{
    Aheaders,
    shoppingLie
},
created(){
    //https://fuss10.elemecdn.com/b/ff/533cf9617bd57fe1dfb05603bebcfpng.png
    this.name = this.$route.params.title;
     let api = "/api/shopping/v2/restaurant/category?latitude="+this.latitude+"longitude="+this.longitude
    this.axios.get(api).then(data => {
      this.shoppingclass = data.data
      console.log(this.shoppingclass)
    });
},
methods:{
    change(num){
     let li = document.querySelectorAll(".class>li>i")
      li[num].className = "el-icon-caret-top";
      this.classfoot = !this.classfoot;
        this.sort =! this.sort;
         this.screen =! this.screen;
      if(num == 0){
          li[num+1].className = "el-icon-caret-bottom";
          li[num+2].className = "el-icon-caret-bottom";
          if(this.classfoot == false){
              li[num].className = "el-icon-caret-bottom"
          }
          this.sort = false;
          this.screen = false;
          console.log(this.classfoot)
      }else if(num == 1){
          li[num+1].className = "el-icon-caret-bottom";
          li[num-1].className = "el-icon-caret-bottom";
          if(this.sort == false){
              li[num].className = "el-icon-caret-bottom"
          }
            this.classfoot = false;
            this.screen = false;
      }else{
           li[num-1].className = "el-icon-caret-bottom";
           li[num-2].className = "el-icon-caret-bottom";
           if(this.screen == false){
              li[num].className = "el-icon-caret-bottom"
          }
           this.classfoot = false;
           this.sort = false;
         
      }
      
    },
    classshopingli(index){
        for(var i = 0;i <= shoppingchilder.length;i++){
            if (i == index){
                console.log(shoppingchilder)
            }
        }
    }
},
}
</script>

<style scoped>
.class{
    background:white;
    display:flex;
    justify-content: space-around;
    height:.3rem;
    border:.02rem solid #eaf0f0f1;
    line-height: .3rem;
}
.class li{
    border-right:.01rem solid #eaf0f0f1;
    flex:1;
    text-align: center;
    font-size: .14rem;
}

</style>
