<template>
    <div id="remark">
        <Head :inputName="name"></Head>
        <section id="center_top">
            <header>快速备注</header>
            <ul id="specific_l" style="height:1.35rem;">
                <li @click="specific($event)" class="specific" v-for="(item,index) in remarks" :key="index">
                    <span v-for="(item,index) in item" :key="index">
                        {{item}}
                    </span>
                </li>
            </ul>
        </section>
        <section style="margin-top:.093rem;height:1.65rem;background:white;padding:0 0.14rem 0.23rem;box-sizing: border-box;">
            <p style="height:.46rem;line-height: .46rem">其他备注</p>
            <textarea id="text" placeholder="请输入备注内容(可不填)"></textarea>
        </section>
        <button id="btn" @click="btn()">确定</button>
    </div>
</template>

<script>
import Head from "../../header/header";
export default {
  props: ["cart_id"],
  data() {
    return {
      name: "订单备注",
      remarks: [],
      judge: false
    };
  },
  components: {
    Head
  },
  computed: {
    cart() {
      this.cart = this.cart_id;
    }
  },
  created() {
    let api = "/api/v1/carts/1/remarks";
    this.axios.get(api).then(data => {
      this.remarks = data.data.remarks;
    });
  },
  methods: {
    specific(ev) {
      if (this.judge == false) {
        $(ev.target)
          .eq(0)
          .css("background", "#3190e8");
        $(ev.target)
          .eq(0)
          .css("color", "#fff");
        $(ev.target)
          .eq(0)
          .siblings()
          .css("background", "white");
        $(ev.target)
          .eq(0)
          .siblings()
          .css("color", "#333");
      } else {
        $(ev.target)
          .eq(0)
          .css("background", "white");
        $(ev.target)
          .eq(0)
          .css("color", "#333");
        $(ev.target)
          .eq(0)
          .siblings()
          .css("background", "white");
        $(ev.target)
          .eq(0)
          .siblings()
          .css("color", "#333");
      }
      this.judge =! this.judge
    },
    btn(){
         this.$router.push({name:`foot`})
    }
  }
};
</script>

<style>
#center_top {
  margin-top: 0.09375rem;
  width: 100%;
  height: 2.05188rem;
  background: white;
  padding: 0 0.16063rem 0.23438rem;
  box-sizing: border-box;
}
header {
  height: 0.46rem;
  /* border:1px solid red; */
  line-height: 0.46rem;
  margin-bottom: 0.2rem;
}
.specific_l {
  display: flex;
}
.specific {
  box-sizing: border-box;
  height: 0.31rem;
  margin: 0 0.14rem 0.14rem 0;
  border: none;
  /* border: .01rem solid red; */
  /* border-radius:.08rem;  */
  float: left;
}
.specific span {
  /* box-sizing: border-box; */
  padding: 0.07rem 0.14rem;
  border: 0.01rem solid #3190e8;
  font-size: 0.14rem;
  border-radius: 0.05rem;
}
#text {
  width: 100%;
  height: 0.93rem;
  padding: 0.117rem;
  border: 0.00578rem solid #eee;
  background: #f9f9f9;
  color: #666;
  box-sizing: border-box;
  font-size: 0.16rem;
}
#btn {
  width: 3.42rem;
  height: 0.42rem;
  border-radius: 0.07rem;
  margin: 0 0.16406rem;
  background: #4cd964;
  color: white;
  font-size: 0.15rem;
  outline: none;
  border: none;
}
</style>
