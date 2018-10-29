<template>
    <div>
      <Aheader :input-name="message"></Aheader>
    </div>
</template>

<script>
  import Aheader from "../../../components/header/header";
    export default {
        name: "commend",
      data(){
        return{
          message:"推荐有奖"
        }
      },
      components:{
          Aheader
      }
    }
</script>

<style scoped>

</style>
