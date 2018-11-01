<template>
 <div class="shopdetail">
   <div class="shopdetail-top">
     <a class="el-icon-arrow-left" :href="'http://localhost:8080/#/shopsLiebiao/'+$route.params.id"></a>
     <p>商家详情</p>
   </div>
   <p class="activity-attribute">活动与属性</p>
   <div class="activity-information">
     <ul>
       <li>
         <span class="sp1">减</span>
         <span>满三十减五十</span>
       </li>
       <li>
         <span class="sp2">特</span>
         <span>优惠</span>
       </li>
       <li>
         <span class="sp3">保</span>
         <span>外卖保</span>
       </li>
       <li>
         <span class="sp4">准</span>
         <span>准时达</span>
       </li>
       <li>
         <span class="sp5">票</span>
         <span>开发票</span>
       </li>
     </ul>
   </div>
   <div class="food-safety">
     <p>食品监督安全公示</p>
     <p>企业认证详情></p>
   </div>
   <div class="safety-value">
     <img src="" alt="">
     <ul>
       <li>
         <span>监督检查结果:</span>
         <span>良好</span>
       </li>
       <li>检查日期:</li>
     </ul>
   </div>
   <div class="shopdetail-bottom">
     <ul>
       <li>商家信息</li>
       <li>恶趣味请问</li>
       <li>地址:北京市西城区西直门外大街137号</li>
       <li>营业时间:[05:45/06:00]</li>
       <li class="license">
         <p>营业执照</p>
         <p>></p>
       </li>
       <li class="license">
         <p>餐饮服务许可证</p>
         <p>></p>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
export default {
  name: 'shopdetail',
  created(){
    console.log(this.$route.params.id)
  }
}
</script>

<style>
.shopdetail{
  background-color: white;
}
.shopdetail-top{
  position: fixed;
  top: 0;
  left: 0;
  background-color:#409EFF;
  text-align: center;
  height: 0.45rem;
  width: 100%;
}
.shopdetail-top p{
  color: white;
  font-size: 0.2rem;
  font-weight: bold;
  line-height: 0.45rem;
}
.shopdetail-top a{
  color: white;
  font-weight: bold;
  font-size: 0.25rem;
  position: absolute;
  left:0.1rem;
  top:0.1rem;
}
.food-safety{
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 0.1rem;
  border-bottom: .01rem solid rgb(235, 233, 233);
}
.food-safety p:nth-child(1){
  float: left;
}
.food-safety p:nth-child(2){
  float: right;
}
.activity-attribute{
  font-size: 0.18rem;
  line-height: 0.45rem;
  border-top: .08rem solid rgb(235, 233, 233);
  border-bottom: .01rem solid rgb(235, 233, 233);
  padding-left: 0.15rem;
  margin-top: 0.45rem;
}
.activity-information{
  border-bottom: .08rem solid rgb(235, 233, 233);
}
.activity-information li{
  height: 0.35rem;
  line-height: 0.35rem;
  font-size: 0.15rem; 
  padding-left: 0.08rem;
}
.activity-information ul{
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
.sp1{
  background-color: red;
  color: white;
}
.sp2{
  background-color: gold;
  color: white;
}
.sp3{
  background-color: gray;
  color: white;
}
.sp4{
  background-color: #409EFF;
  color: white;
}
.sp5{
  background-color: gray;
  color: white;
}
.food-safety{
  border-bottom: .01rem solid rgb(235, 233, 233);
}
.safety-value{
  border-bottom: .08rem solid rgb(235, 233, 233);
}
.shopdetail-bottom{
  border-bottom: .08rem solid rgb(235, 233, 233);
}
.shopdetail-bottom li{
  height: 0.5rem;
  border-bottom: .01rem solid rgb(235, 233, 233);
  line-height: 0.5rem;
  padding-left: 0.15rem;
  color: #606266;
}
.license p:nth-child(1){
  float: left;
}
.license p:nth-child(2){
  float: right;
  margin-right: 0.15rem;
  font-size: 0.25rem;
}
</style>
