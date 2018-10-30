<template>
    <div>
      <Aheader :input-name="message"></Aheader>
    </div>
</template>

<script>
  import Aheader from "../../../components/header/header";
    export default {
        name: "coupon",
      data(){
        return{
          message:"代金券说明"
        }
      },
      components:{
        Aheader
      }
    }
</script>

<style scoped>

</style>
