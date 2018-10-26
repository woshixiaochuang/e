<template>
  <div id="app">
    <div id="top">
      <div id="box">
      <router-link id="ele"  to="/">ele.me</router-link>
      <div id="login">
      <router-link :to="{name:'login'}">登录|注册</router-link>
      </div>
      </div>
    </div> 
    <div style="background:white">
      <div style="height:0.6rem"></div>
    <p style="padding-bottom:.1rem;border-bottom:1px solid #dcdcdc">
      <span style="font-size:.125rem;display: inline-block; margin-left:.1rem">当前定位城市:</span>
      <span style="font-size:.12rem;font-weight:bold;color:#a9a9a9;float:right;margin-right:.1rem">定位不准是,请在城市列表中选择</span>
    </p>
    </div>
    <div  style="background:white" id="city"><span id="city-one" style="color:#0474f5f1" @click="city(data.name,data.id)"><span style="position: absolute;left:.1rem;top:.14rem">{{data.name}}</span></span><i @click="city(data.name,data.id)" class="el-icon-arrow-right" id="city-two"></i><router-link id="top-city" :to="{name:'city'}"></router-link></div>
    <div style="border:1px solid #eaf0f0f1;margin-top:.1rem;background:white;">
        <p  style="font-size:.125rem;margin:.12rem 0 0.12rem .1rem;">热门城市</p>
        <ul id="city-hot-box">
          <li id="city-hot" v-for="data in data1" :key="data.id"><span @click="city(data.name,data.id)">{{data.name}}</span></li>
        </ul>
    </div>
    <div style="margin-top:.1rem;background:white">
      <ul v-for="(data,index) in data2" :key="index" style="overflow: hidden; display: table;">
          <p style="display:table-row;height:.34rem;font-size: 0.15rem;line-height: 0.34rem">&emsp;
            {{index}}</p>
           <li style="display:table-cell;" id="group-city" v-for="data1 in data" :key="data1.id">
             <span @click="city(data1.name,data1.id)">{{data1.name}}</span>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Loading } from "element-ui";
export default {
  data() {
    return {
      data: [],
      data1: [],
      data2: [],
      n:""
    };
  },
  name: "app",
  components: {
    // Home
  },
  created() {
    let api = "/api/v1/cities?type=guess";
    this.axios.get(api).then(data => {
      this.data = data.data;
    });

    let api1 = "/api/v1/cities?type=hot" + "#" + Math.random();
    this.axios.get(api1).then(data1 => {
      this.data1 = data1.data;
    });

    let api2 = "/api/v1/cities?type=group"
    this.axios.get(api2).then(data2 => {
      this.data2 = this.sort(data2.data);
    });
  },
  methods: {
    sort(arys) {
      //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
      var newkey = Object.keys(arys).sort();
      //console.log('newkey='+newkey);
      var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
      for (var i = 0; i < newkey.length; i++) {
        //遍历newkey数组
        newObj[newkey[i]] = arys[newkey[i]];
        //向新创建的对象中按照排好的顺序依次增加键值对
      }
      return newObj; //返回排好序的新对象
    },
    city(n,id){
      this.$router.push({path:`/city/`+id});
      localStorage.setItem("city_id",id)
      // this.$root.Bus.$emit(n,city.n++);
    }
  }
};
</script>

<style scoped>
#app {
  background: #eaf0f0f1;
}
#top {
  background-color: #0474f5f1;
  height: 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 100%;
}
#top a {
  color: white;
}
#login {
  float: right;
  margin-right: 0.1rem;
}
#ele {
  margin-left: 0.1rem;
}
#top-city {
  width: 100%;
  height: 0.45rem;
  display: inline-block;
  background: white;
}
#city {
  width: 100%;
  position: relative;
}
#city-one {
  position: absolute;
  font-size: 0.18rem;
  z-index: 1;
  width: 100%;
  height: 100%;
}
#city-two {
  font-size: .2rem;
  position: absolute;
  right: 0.1rem;
  top: 0.15rem;
  z-index: 1;
}
#city-hot {
  display: table;
  text-align: center;
  height: 0.5rem;
  width: 24.467%;
  line-height: 0.5rem;
  border: .01rem solid #dcdcdc;
  background: white;
}
#city-hot-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
  width: 100%;
}
#group-city {
  float: left;
  width: 24.45%;
  height: 0.4rem;
  text-align: center;
  border: .01rem solid #dcdcdc;
  padding-top:.2rem; 
}
</style>
