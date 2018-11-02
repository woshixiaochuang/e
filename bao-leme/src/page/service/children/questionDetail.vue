<template>
  <div>
    <Aheader :input-name="message"></Aheader>
  <div class="answer">{{solution}}</div>
    <load v-if="cartoon != 1"></load>
  </div>
</template>

<script>
  import Aheader from "../../../components/header/header";
  import load from "../../../components/common/loading"
    export default {
        name: "questionDetail",
      components:{
          Aheader,load
      },
      data(){
          return{
            message:"",
            content:"",
            arr:null,
            solution:"",
            cartoon:1
          }
      },
      created(){
          this.cartoon -=1;
        this.message = this.$store.state.title;
        let api = "https://elm.cangdu.org/v3/profile/explain";
        this.axios.get(api).then(
          data=>{
           this.arr = data.data;
           for(let k in this.arr){
              if(this.arr[k] == this.message){
               let s = k.indexOf("Caption");
               let answer = k.slice(0,s);
               let result = answer + "Content";
               this.solution =  this.arr[result];
               this.cartoon+=1;
               break;
              }
           }
          }

        )
      }
    }
</script>

<style scoped>
.answer{
  font-size: .2rem;
  padding: .1rem;
  line-height: .3rem;
}
</style>
