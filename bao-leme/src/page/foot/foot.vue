<template>
<div id="foot">
    <Aheaders :inputName="name"></Aheaders>
    <div>
        <ul class="class">
            <li @click="change(0)">{{name}} <i class="el-icon-caret-bottom"></i></li>
            <li @click="change(1)">排序 <i class="el-icon-caret-bottom"></i></li>
            <li @click="change(2)">筛选 <i class="el-icon-caret-bottom"></i></li>
        </ul>
    </div>
    <div id="center">
        <div style="position:absolute;background:gray;top:0;left:0;width:100%;z-index:1;opacity:.9;">
            <ul v-show="centerul" id="classshoping" v-for="(item,index) in shoppingclass" :key="index" style="overflow: hidden;width:100%;padding-top:.1rem">
                <h1 class="h1" @click="classshopingli(index)" style="color:white;font-size:.2rem;float: left;width:50%;height:.4rem"><img style="width:.3rem;height:.3rem" :src="'https://fuss10.elemecdn.com/'+item.image_url+(item.image_url.indexOf('png')!=-1?'.png':'.jpeg')" alt=""><span>{{item.name}}</span> <span style="font-size:.12rem;background:#4b525213;color:white;padding:.05rem;border-radius:.5rem">{{item.count}}</span><i class="el-icon-arrow-right"></i></h1>
                 <div class="shoppingchilder" style="position:absolute;top:0;right:0;display:none;width:50%;height:100%">
                 <li style="height:.3rem;font-size:.16rem;display: flex;justify-content: center;flex-direction: column;height:.3rem;text-align: center;border-bottom:.02rem solid gray" v-for="(itemclass,index) in item.sub_categories" :key="(index-1)">
                    <p @click="centerp(itemclass.id)" style="display: flex;justify-content: space-around;"><span>{{itemclass.name}}</span><span>{{itemclass.count}}</span></p>
                </li>
                </div>
            </ul>
        </div>
        <div v-show="sort" style="position:relative">
            <ul class="sort" style="text-align:left;position:absolute;width:100%;background:white;z-index:1;">
                <i style="position:absolute;top:.2rem;left:.15rem;color:#0474f5f1" class="el-icon-sort"></i><li @click="sorts(4)"><span>智能排序</span></li>
                <i style="position:absolute;top:.7rem;left:.15rem;color:#0474f5f1" class="el-icon-location-outline"></i><li @click="sorts(5)">  <span>距离最近</span></li>
                <img style="position:absolute;top:1.2rem;left:.15rem;width:.18rem" :src="many" alt="6"><li @click="sorts(6)"><span>销量最高</span></li>
                <img style="position:absolute;top:1.7rem;left:.15rem;width:.18rem" :src="time" alt="1"><li @click="sorts(1)"><span>起送价最低</span></li>
                <img style="position:absolute;top:2.2rem;left:.15rem;width:.18rem" :src="hot" alt="2"><li @click="sorts(2)"><span>配送速度最快</span></li>
                <i style="position:absolute;bottom:.2rem;left:.15rem;color:yellow" class="el-icon-star-off"></i><li @click="sorts(3)"><span>评分最高</span></li>
            </ul>
        </div>
        <div v-show="screen" style="position:relative;">
            <ul  class="screen" style="height:2rem;text-align:left;position:absolute;width:100%;background:white;z-index:1;">
                <li>
                    <p style="padding:.05rem;font-size:.14rem">配送方式</p>
                    <div @click="give =! give" style="border:1px solid gray;width:1rem;padding:.05rem;margin-left:.1rem">
                        <img v-if="give" style="color:#57A9FF;width:.18rem" :src="ber" alt="">
                        <i v-else style="font-size:.18rem" class="el-icon-check"></i>
                        <span>{{feng}}</span>
                    </div>
                </li>
                <p style="margin-top:.15rem;margin-left:.15rem;margin-bottom:.1rem;font-size:.14rem">商家属性(可以多选)</p>
                <div class="screendiv">
                    <li style="width:30%" v-for="(item,index) in activity" :key="index" @click="classshoppingname(index)">
                    <p style="width:100%;height:100%;border:.01rem solid gray">
                        <span v-if="classshopping[index]" class="jingp" :style="'color:#'+item.icon_color+';border:.01rem solid #'+item.icon_color">{{item.icon_name}}</span>
                        <i v-else style="font-size:.18rem" class="el-icon-check"></i>
                        {{item.name}}</p>
                    </li>
                </div>
                <li class="btn" style="height:.4rem;">
                    <button @click="clearfalse()">清空</button><button @click="confirm()">确定</button>
                </li>
            </ul>
        </div>
    </div>
    <div style="background:white">
    <shoppingLie :id="id" :obj ="obj" :order="order_by" :psid="psid"></shoppingLie>
    </div>
</div> 
</template>
<script>
import Aheaders from "../../components/header/header";
import shoppingLie from "../../components/shop/children/shopsLiebiao";
const shoppingchilder = document.getElementsByClassName("shoppingchilder");
import manyss from "../../images/many.png";
import times from "../../images/time.png";
import hots from "../../images/hot.png";
import ber from "../../images/ber.png";
export default {
  name: "foot",
  data() {
    return {
      name: this.$route.params.title,
      classfoot: false,
      sort: false,
      screen: false,
      latitude: localStorage.latitude,
      longitude: localStorage.longitude,
      shoppingclass: "",
      centerul: false,
      id: "",
      activity: "",
      order_by: "",
      many: manyss,
      time: times,
      hot: hots,
      ber: ber,
      feng: "",
      give: true,
      classshopping: {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true
      },
      psid: "",
      px1:"",
      px2:"",
      px3:"",
      px4:"",
      px5:"",
      px6:"",
      obj:[]
    };
  },
  components: {
    Aheaders,
    shoppingLie
  },
  created() {
    //https://fuss10.elemecdn.com/b/ff/533cf9617bd57fe1dfb05603bebcfpng.png
    this.name = this.$route.params.title;
    let api =
      "/api/shopping/v2/restaurant/category?latitude=" +
      this.latitude +
      "longitude=" +
      this.longitude;
    this.axios.get(api).then(data => {
      this.shoppingclass = data.data;
    });
    let api1 =
      "/api/shopping/v1/restaurants/activity_attributes?latitude=" +
      this.latitude +
      "longitude=" +
      this.longitude;
    this.axios.get(api1).then(data => {
      this.activity = data.data;
    });
    let api2 =
      "/api/shopping/v1/restaurants/delivery_modes?latitude=" +
      this.latitude +
      "longitude=" +
      this.longitude;
    this.axios.get(api2).then(data => {
      this.feng = data.data[0].text;
      this.psid = data.data[0].id;
    });
  },
  methods: {
    change(num) {
      let li = document.querySelectorAll(".class>li>i");
      li[num].className = "el-icon-caret-top";
      this.classfoot = !this.classfoot;
      this.sort = !this.sort;
      this.screen = !this.screen;
      if (num == 0) {
        li[num + 1].className = "el-icon-caret-bottom";
        li[num + 2].className = "el-icon-caret-bottom";
        if (this.classfoot == false) {
          li[num].className = "el-icon-caret-bottom";
          this.centerul = false;
        }
        if (this.classfoot == true) {
          this.centerul = true;
        }
        this.sort = false;
        this.screen = false;
      } else if (num == 1) {
        li[num + 1].className = "el-icon-caret-bottom";
        li[num - 1].className = "el-icon-caret-bottom";
        if (this.sort == false) {
          li[num].className = "el-icon-caret-bottom";
        }
        if (this.sort == true) {
          this.sort = true;
        }
        this.centerul = false;
        this.classfoot = false;
        this.screen = false;
      } else {
        li[num - 1].className = "el-icon-caret-bottom";
        li[num - 2].className = "el-icon-caret-bottom";
        if (this.screen == false) {
          li[num].className = "el-icon-caret-bottom";
        }
        if (this.screen == true) {
          this.screen = true;
        }
        this.classfoot = false;
        this.sort = false;
        this.centerul = false;
      }
    },
    classshopingli(index) {
      console.log(index);
      for (var i = 0; i < shoppingchilder.length; i++) {
        if (i == index) {
          shoppingchilder[index].style.display = "block";
          shoppingchilder[index].style.background = "white";
        }
        if (i != index) {
          shoppingchilder[i].style.display = "none";
        }
      }
    },
    centerp(id) {
      console.log(id);
      this.centerul = false;
      this.id = id;
    },
    sorts(order) {
      console.log(order);
      this.sort = false;
      this.order_by = order;
    },
    classshoppingname(index) {
      this.classshopping[index] = !this.classshopping[index];
    },
    clearfalse() {
      this.give = true;
      for (var key in this.classshopping) {
          this.classshopping[key] = true;
      }
    },

    confirm() {
      if (this.classshopping[0] == false) {
              this.px1 = 1
             this.obj.push(1) 
      }
      if (this.classshopping[1] == false) {
           this.px2 = 2
             this.obj.push(2) 
      }
      if (this.classshopping[2] == false) {
            this.px3 = 3
             this.obj.push(3) 
      }
      if (this.classshopping[3] == false) {
            this.px4 = 4
             this.obj.push(4) 
      }
      if (this.classshopping[4] == false) {
           this.px5 = 5
             this.obj.push(5) 
      }
      if (this.classshopping[5] == false) {
            this.px6 = 6
             this.obj.push(6) 
      };
      if (this.give == false) {
          this.psid = 1
      }else{
        this.psid = 0
      }
      this.screen = false;
    },
    
  }
};
</script>

<style scoped>
.class {
  background: white;
  display: flex;
  justify-content: space-around;
  height: 0.3rem;
  border: 0.02rem solid #4b525213;
  line-height: 0.3rem;
}
.class li {
  border-right: 0.01rem solid #eaf0f0f1;
  flex: 1;
  text-align: center;
  font-size: 0.14rem;
}
#center {
  position: relative;
}
.shoppingchilder {
  display: flex;
}
.h1 {
  display: flex;
  justify-content: space-around;
}
.sort li {
  margin-left: 0.4rem;
  border-bottom: 0.01rem solid gray;
  height: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.1rem;
}
.screendiv {
  display: flex;
  flex-wrap: wrap;
  height: 1rem;
  line-height: 0.3rem;
  position: relative;
  /* border:1px solid red */
}
.screendiv li {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 0.3rem;
  padding: 0.05rem;
}
.jingp {
  border-radius: 2px;
}
.btn {
  display: flex;
  width: 100%;
  text-align: center;
}
.btn button {
  flex: 1;
  background: #0474f5f1;
  border-radius: 0.1rem;
  color: white;
  font-size: 0.16rem;
}
</style>
