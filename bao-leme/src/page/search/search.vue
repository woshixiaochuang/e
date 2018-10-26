<template>
    <div class="gray">
        <Aheader :inputName="name"></Aheader>
        <div class="all">
         <form action="" method="get">
           <input class="search" type="text" placeholder="请输入商家或美食名称">
           <input @click="search" class="button" type="submit" value="提交">
         </form>
        </div>
        <foot-guide></foot-guide>
    </div>
</template>
<script>
import Aheader from "../../components/header/header";
import footGuide from "../../components/footer/footGuide";
export default {
  name: "search",
  components: {
    Aheader,
    footGuide
  },
  data(){
    return {
      name:"搜索"
    }
  },
  methods:{
    search(){
      console.log(localStorage)
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

