<template>
    <div>
        <div id="box">
      <router-link id="ele"  :to="{name:'search'}"><i class="el-icon-search" style="position:absolute;left:.1rem;font-size:.2rem;font-weight: bolder;color:white"></i></router-link>
      <div style=" text-align:center;"><span style="font-size:.2rem; font-weight: bolder;color:white">{{name}}</span></div>
      <img :src="img" @click="change()" style="width:.31rem;position:absolute;right:.1rem;">
        </div>
        <div class="top" style="height:2.1rem;width:100%;background:white">
            <div class="top_center" style="width:200%;height:100%;">
                <ul class="center" style="width:100%;height:1.9rem;overflow: hidden;">
                    <li class="center_l" v-for="(item,index) in title" :key="index">{{item.title}}</li>   
                </ul>
            </div>
        </div>
        <footers></footers>
    </div>
</template>

<script>
import imgs from "../../images/default.png";
import footers from "../../components/footer/footGuide.vue";
export default {
  name: "msite",
  components: {
    footers
  },
  data() {
    return {
      latitude: "",
      longitude: "",
      name: localStorage.shopping_name,
      geohash: "",
      img: imgs,
      title:""
    };
  },
  created() {
    this.latitude = this.$route.params.latitude;
    this.longitude = this.$route.params.longitude;
    this.geohash = this.$route.params.geohash;
    let api =
      "/api/shopping/restaurants?latitude=" +
      this.latitude +
      "&longitude=" +
      this.longitude +
      "&order_by=5";
    this.axios.get(api).then(data => {
      console.log(data);
    });
    let api1 = "/api/v2/index_entry";
    this.axios.get(api1).then(data =>{
        this.title = this.shoppingTitle(data.data)
    })
  },
  methods: {
    change() {
      this.$router.push({ name: "profile" });
    },
    shoppingTitle(obj){
        let x = obj[8];let z = obj[9];let d = obj[10];let t = obj[11];
        obj[8]=obj[4];obj[9]=obj[5];obj[10]=obj[6];obj[11]=obj[7];
        obj[4]=x;obj[5]=z;obj[6]=d;obj[7]=t;
        return obj
    }
  }
};
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
    display: flex;
    flex-wrap:wrap
}
.center_l{
    background: #d6c913f1;
    width: 12.5%;
    height:50%;
    text-align: center;
    line-height:1.5rem;
}
</style>
