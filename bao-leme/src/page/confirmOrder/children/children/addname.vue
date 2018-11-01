<template>
    <div>
      <Aheader :input-name="message"></Aheader>
      <div class="state">
        <span class="name">联系人</span>
        <input type="text" placeholder="你的名字" v-model="name">
      </div>
      <div class="state">
        <img @click="pitch" class="pitch" :src="imgm">
        <span>先生</span>
        <img @click="pitch" class="pitch" :src="imgw">
        <span>女士</span>
      </div>
      <div class="state">
        <span class="name">联系电话</span>
        <input @keyup="pp" type="text" placeholder="你的手机号" v-model="phone">
      </div>
      <router-link to="/profile/info/address/add/addDetail">
      <div class="state">
        <span class="name">送餐地址</span>
        <input v-model="address" type="text" placeholder="小区/写字楼/学校">
      </div>
      </router-link>
      <div class="state">
        <input v-model="address_detail" class="datil" type="text" placeholder="详细地址(如门牌号)">

      </div>
      <div class="state">
        <span class="name">标签</span>
        <input type="text" placeholder="无/家/学校/公司">
      </div>
      <button class="con" @click="add">确定</button>
    </div>
</template>

<script>
  import Aheader from "../../../../components/header/header";
  import imgon from  "../../../../images/pitchon.png";
  import imgdown from "../../../../images/pitchdown.png"
    export default {
        name: "addname",
      components:{
          Aheader
      },
      data(){
          return {
            message:"添加地址",
            imgm:imgdown,
            show:true,
            imgw:imgon,
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
  created(){
    let api = "https://elm.cangdu.org/v1/user";
    this.axios({
      method: "get",
      url: api,
      withCredentials: true
    }).then(
      data=>{
        let arg = data.data;
        this.user_id = arg.user_id;
      }
    );
          this.address = this.$store.state.address;
          this.geohash = this.$store.state.geohash;
          this.name = localStorage.name;
          this.phone = localStorage.phone_num;
  }
  ,
      methods:{
          pitch(){
            if (this.show){
              this.imgm = imgon;
              this.imgw = imgdown
            }else{
              this.imgm = imgdown;
              this.imgw = imgon;
            }
            this.show = !this.show;
          },
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
          }).then((data)=>{
            console.log(data.data)
          })
        },
        pp(){
            localStorage.setItem("phone_num",this.phone)
        }
      }
    }
</script>

<style scoped>
.state{
  width: 90%;
  padding: 5%;
  background-color: #fff;
  font-size: .2rem;
}
  .state input{
    outline: none;
    margin-left: .1rem;
    font-size: .17rem;
  }
  .pitch{
    width: .2rem;
  }
  .name{
    display: inline-block;
    width: 25%;
  }
  .datil{
    padding-left: 26%;
  }
 .con{
  width: 90%;
  margin-left: 5%;
  margin-top: .2rem;
  background-color: #4cd964;
  color: #fff;
  height: .5rem;
  border-radius: .05rem;
  font-size: .25rem;
   border: none;
   outline: none;
}
</style>
