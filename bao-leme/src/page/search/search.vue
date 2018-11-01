<template>
    <div class="gray">
        <Aheader :inputName="name"></Aheader>
        <div class="all">
         <form action="" method="get">
           <input v-model="food" class="search" type="text" placeholder="请输入商家或美食名称">
           <input @click="search" class="button" type="submit" value="提交">
         </form>
        </div>
        <foot-guide></foot-guide>
      <loading v-if="cartoon != 1"></loading>
    </div>
</template>
<script>
import Aheader from "../../components/header/header";
import footGuide from "../../components/footer/footGuide";
import loading from "../../components/common/loading"
export default {
  name: "search",
  components: {
    Aheader,
    footGuide,
    loading
  },
  data(){
    return {
      name:"搜索",
      food:'',
      cartoon:1
    }
  },
  computed:{
    geohash(){
      return this.$store.state.geohash
    }
  },
  methods:{
    search(){
      this.cartoon -=1;
      this.$store.state.geohash = localStorage.latitude +","+localStorage.longitude;
      let geohash = this.$store.state.geohash;
      console.log(geohash)
     let api = "https://elm.cangdu.org/v4/restaurants?geohash="+geohash+"&keyword="+this.food;
     this.axios.get(api).then(
       data=>{
         this.cartoon +=1;
         alert(data.data.message);
       }
     )
    }
  }
};
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
</style>

