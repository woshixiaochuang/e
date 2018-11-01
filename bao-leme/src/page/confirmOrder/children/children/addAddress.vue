<template>
    <div id="forget">
        <aheader :input-name="message"></aheader>
     <ul>
              <li class="input">
                  <input class="input_1" type="text" placeholder="请填写你的姓名" v-model="name" @keyup="save">
              </li>
              <router-link to="/profile/info/address/add/addDetail">
              <li class="input">
                  <input v-model="address" class="input_1" type="text" placeholder="小区/写字楼/学校等">
              </li>
              </router-link>
              <li class="input">
                  <input class="input_1" type="text" placeholder="请填写详细送餐地址" v-model="address_detail">
              </li>
              <li class="input">
                  <input class="input_1" type="text" placeholder="请填写能够联系到你的手机号" v-model="phone">
              </li>
               <li class="input" style="position:relative">
                  <input class="input_1" type="text" placeholder="备用联系电话(选填）" v-model="phone_bk">
                  <div id="size" style="position:absolute;right:.1rem;top:.16rem;">
                  </div>
               </li>
              <li style="margin-top:.2rem; text-align:center">
                  <input @click="add"   class="new" type="submit" value="新增地址">
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
          message:"新增地址",
          name:'',
          particular:'',
          phone:'',
          user_id:null,
          address:'',
          address_detail:'',
          geohash:'',
          tag:'我是余文杰',
          sex:1,
          poi_type:0,
          phone_bk:'',
          tag_type:2,
      }
  },
  //获取用户信息
  created(){
      let api = "https://elm.cangdu.org/v1/user";
           this.axios({
                method: "get",
                url: api,
                 withCredentials: true
           }).then(
               data=>{
                   let arg = data.data;
                   console.log(arg);
                   this.user_id = arg.user_id;
               }
           );
           this.address = this.$store.state.address;
           this.geohash = this.$store.state.geohash;
           this.name = localStorage.name;
  },
  methods:{
      add(){
          let api = "https://elm.cangdu.org/v1/users/"+this.user_id+"/addresses";
          this.axios({
              url:api,
              method:"post",
              data:{
                  user_id:this.user_id,
                  address:this.address,
                  address_detail:this.address_detail,
                  geohash:this.geohash,
                  name:this.name,
                  phone:this.phone,
                  tag:this.tag,
                  sex:this.sex,
                  phone_bk:this.phone_bk,
                  tag_type:this.tag_type
              }
          }).then(()=>{
            this.$router.push({
              path:"/profile/info/address",
              query:{
                address:this.address,
                phone:this.phone
              }
            })
          })
      },
    save(){
        localStorage.setItem("name",this.name)
        console.log(localStorage.name)
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
