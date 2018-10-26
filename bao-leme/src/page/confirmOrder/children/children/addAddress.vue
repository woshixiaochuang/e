<template>
    <div id="forget">
        <aheader :input-name="name"></aheader>
     <ul>
              <li class="input">
                  <input class="input_1" type="text" placeholder="请填写你的姓名">
              </li>
              <li class="input">
                  <input class="input_1" type="text" placeholder="小区/写字楼/学校等">
              </li>
              <li class="input">
                  <input class="input_1" type="text" placeholder="请填写详细送餐地址">
              </li>
              <li class="input">
                  <input class="input_1" type="text" placeholder="请填写能够联系到你的手机号">
              </li>
               <li class="input" style="position:relative">
                  <input class="input_1" type="text" placeholder="备用联系电话(选填）">
                  <div id="size" style="position:absolute;right:.1rem;top:.16rem;">
                  </div>
               </li>
              <li style="margin-top:.2rem; text-align:center">
                  <input  class="new" type="submit" value="新增地址">
              </li>    
       </ul>
    </div>
</template>

<script>
import Aheader from "../../../../components/header/header"
export default {
  name: "forget",
  components:{
      Aheader
  },
  data(){
      return{
          name:"新增地址"
      }
  }
};
</script>

<style scoped>
ul li {
  width: 100%;
}
.input {
  background: white;
  border-bottom: 0.02rem solid #eaf0f0f1;
}
.input_1 {
  width: 3rem;
  height: 0.2rem;
  padding: 0.18rem;
  font-size: 0.2rem;
  outline:medium;
}
.new{
    width: 80%;
    margin: 0 auto;
    font-size: .1rem;
    background-color: rgb(38, 216, 106);
    height: .4rem;
    color: white;
    border-radius: .05rem;
    outline:none;
}
</style>
