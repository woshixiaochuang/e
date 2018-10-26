<template>

    <div id="tsk" v-if="flag">
        <!-- <p>{{tsk}}--{{flag}}</p> -->
        <img id="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540544307786&di=3348937e5c2bbae6f5aec5dc2dfa8059&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F15%2F55%2F94%2F38P58PICKEI.png%2521%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue">
        {{alertValue.msg}}
        <br>
        <button style="position:absolute;bottom:.2rem;right:0.2rem;width:.6rem" @click="change()" >关闭</button>
    </div>
</template>

<script>
export default {
  name: "alertTip",
  props: ["alertValue"],
//   components: {},
  data() {
    return {
      flag: false
    };
  },
  methods: {
    change() {
      this.flag = !this.flag;
    }
  },
  watch: {
    alertValue() {
      console.log("变了");
      this.flag = this.alertValue.isShow;
    }
  }
};
</script>

<style scoped>
#tsk {
  width: 70%;
  height: 30%;
  background: red;
  color: white;
  font-size: 0.3rem;
  text-align: center;
  line-height: 1rem;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
}
#img {
  width: 0.4rem;
}
</style>
