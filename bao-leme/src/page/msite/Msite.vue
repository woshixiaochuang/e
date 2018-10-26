<template>
    <div>
        <div id="box">
      <router-link id="ele"  :to="{name:'search'}"><i class="el-icon-search" style="position:absolute;left:.1rem;font-size:.2rem;font-weight: bolder;color:white"></i></router-link>
      <div style=" text-align:center;"><span style="font-size:.2rem; font-weight: bolder;color:white">{{name}}</span></div>
      <img :src="img" @click="change()" style="width:.31rem;position:absolute;right:.1rem;">
        </div>

        <footers></footers>
    </div>
</template>

<script>
import imgs from "../../images/default.png"
import footers from "../../components/footer/footGuide.vue";
export default {
  name: "msite",
  components: {
    footers,
  },
  data() {
    return {
      latitude: "",
      longitude: "",
      name:localStorage.shopping_name,
      geohash:"",
      img:imgs
    };
  },
  created() {
    this.latitude = this.$route.params.latitude;
    this.longitude = this.$route.params.longitude;
    this.geohash = this.$route.params.geohash;
    let api = "/api/shopping/restaurants?latitude="+this.latitude+"&longitude="+this.longitude+"&order_by=5"
    this.axios.get(api).then(data => {
      console.log(data)
    });
  },
  methods:{
      change() {
      this.$router.push({ name: "profile" });
    },
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
</style>
