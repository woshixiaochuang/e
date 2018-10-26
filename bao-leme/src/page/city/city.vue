<template>
    <div id="city">
        <div id="box">
      <router-link id="ele"  to="/"><i class="el-icon-arrow-left" style="position:absolute;left:.1rem;font-size:.2rem;font-weight: bolder;color:white"></i></router-link>
      <div style=" text-align:center;"><span style="font-size:.2rem; font-weight: bolder;color:white">{{city}}</span></div>
      <p @click="change()" style="position:absolute;right:.1rem;color:white;font-size:0.14rem;">切换城市</p>
        </div>
        <div style="height:1.2rem;background:white;margin-top:.1rem">
          <ul style="text-align:center">
            <li style="margin-bottom:.1rem;padding-top:.14rem">
              <input style="height:.4rem;width:90%;border:.01rem solid #808080" type="text" placeholder="输入学校、商务楼、地址" v-model="value">
            </li>
            <li><input @click="btn" style="color:white;height:.35rem;width:90%;background:#0474f5f1" type="button" value="提交"></li>
          </ul>
        </div>
        <div>
          <ul>
            <div v-if="ls">
            <p style="font-size:.12rem;margin-top:.1rem;padding:.05rem;border-top:.01rem solid #A9A9A9;border-bottom:.01rem solid #A9A9A9;">搜索历史</p>
            <div>
            <li>
              <div @click="history(item)" class="city_center" v-for="(item,index) in LsCentern" :key="index">
              <h3 style="font-size:.16rem;margin-bottom:.03rem">{{item.name}}</h3>
              <p style="font-size:.12rem;color:#A9A9A9">{{item.address}}</p>
              </div>
            </li>
            <p  class="city_center" style="text-align:center" @click="clear()">清空历史</p>
            </div>
            </div>
            <li v-else class="city" v-for="(item,index) in data" :key="index" @click="history(item)">
              <div class="city_center">
              <h3 style="font-size:.16rem;margin-bottom:.03rem">{{item.name}}</h3>
              <p style="font-size:.12rem;color:#A9A9A9">{{item.address}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
let searches = localStorage.searches ? JSON.parse(localStorage.searches) : [];
export default {
  name: "city",
  data() {
    return {
      data: "",
      id: "",
      city: "",
      value: "",
      ls: true,
      i: 0,
      LsCentern: ""
    };
  },
  created() {
    var newsearches = this.dedup(searches);
    this.LsCentern = newsearches;
    this.id = this.$route.params.id;
    let api = "/api/v1/cities/" + this.id;
    this.axios.get(api).then(data => {
      this.city = data.data.name;
    });
    
  },

  methods: {
    change() {
      this.$router.push({ name: "app" });
    },
    btn() {
      if (this.value == "") {
        alert("输入为空");
        this.ls = true;
      } else {
        this.ls = false;
        let api =
          "/api/v1/pois?city_id=" +
          this.id +
          "&keyword=" +
          this.value +
          "&type=search";
        this.axios.get(api).then(data => {
          this.data = data.data;
        });
      }
      this.value = "";
    },
    history(n) {
      if (n == "") {
        alert(输入为空);
      } else {
        if (n != null) {
          searches.push(n);
          searches.push(this.id)
        }
        localStorage.setItem("searches", JSON.stringify(searches));
      }
      this.$router.push({ name: "msite" });
    },
    clear() {
      searches.splice(0);
      localStorage.removeItem("searches");
    },
    dedup(arr) {
      let hashTable = {};
      return arr.filter(el => {
        let key = JSON.stringify(el);
        let match = Boolean(hashTable[key]);
        return match ? false : (hashTable[key] = true);
      });
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
.city {
  height: 0.6rem;
  background: white;
  border-bottom: 0.01rem solid #808080;
}
.city_center {
  /* border:1px solid red; */
  padding: 0.15rem;
  background: white;
  border-bottom: 0.012rem solid #808080;
}
</style>
