<template>
    <div class="gray">
        <Aheader :inputName="name"></Aheader>
        <div class="all">
           <input v-model="address" class="search" type="text" placeholder="请输入小区/写字楼/学校">
           <input @click="search" class="button" type="submit" value="提交">
        </div>
        <ul>
            <div  v-for="(item,index) in site" :key='index' @click="writein(index)">
            <li>{{item.name}}</li>
            <div class="span">
            <span>{{item.address}}</span>
            </div>
            </div>
        </ul>
      <loading v-if="cartoon != 1"></loading>
    </div>
</template>
<script>
import Aheader from "../../../../../components/header/header";
import loading from "../../../../../components/common/loading"
export default {
  name: "searchAddress",
  components: {
    Aheader,loading
  },
  data(){
    return {
      name:"搜索地址",
      address:'',
      site:[],
      cartoon:1
    }
  },
  methods:{
      search(){
        this.cartoon -= 1;
          let api = "https://elm.cangdu.org/v1/pois?city_id="+localStorage.city_id+"&keyword="+this.address;
          this.axios({
               method: "get",
        url: api,
        withCredentials: true, // 默认的
        }).then(
              data=>{
                  this.site = data.data;
                this.cartoon += 1;
                  }
          )
      },
      writein(n){
        this.$store.commit("changeaddress",this.site[n].name)
        this.$store.commit("changegeohash",this.site[n].geohash)
        this.$router.go(-1);
      }
  }
  }
</script>
<style scoped>
.all {
  font-size: 0.4rem;
  margin-top: 0.1rem;
}
.search {
  height: 0.5rem;
  width: 60%;
  margin-left: 10%;
  background-color: rgb(189, 194, 189);
  border-radius: 0.1rem;
  font-size: 0.2rem;
}
.button {
  width: 20%;
  height: 0.5rem;
  font-size: 0.2rem;
  color: white;
  background-color: #0474f5f1;
}
li{
    font-size: .2rem;
    padding: .1rem;
    margin-top: .1rem;
    border-top: .02rem solid rgb(165, 159, 159);
}
.span{
    margin-left: .1rem;
}
</style>

