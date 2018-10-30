<template>
<div>
    <div class="bottom">
        <div v-for="(img,index) in imgs" :key="index">
          <router-link :to="{name:img.name}">
            <img :src="img.img" alt="">
            <ol>
            <li>{{img.title}}</li>
            </ol>
            </router-link>
        </div>
    </div>
    </div>
</template>
<script>
import img01 from "../../../static/bottomimg/homepage.png";
import img02 from "../../../static/bottomimg/search.png";
import img03 from "../../../static/bottomimg/order.png";
import img04 from "../../../static/bottomimg/my.png";
export default {
  name: "footGuide",
  data() {
    return {
      imgs: [
        { img: img01, title: "首页", name:'msite'},
        { img: img02, title: "搜索", name:'search'},
        { img: img03, title: "订单", name:'order'},
        { img: img04, title: "我的", name:'profile'}
      ]
    };
  }
};
</script>
<style scoped>
.bottom {
  width: 100%;
  font-size: 0.2rem;
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
  background:white
}
.bottom > div {
  width: 25%;
  text-align: center;
}
.bottom > div  img {
  width: 40%;
  vertical-align: top;
}
</style>

