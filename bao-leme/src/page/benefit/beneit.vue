<template>
    <div>
      <Aheader :input-name="message"></Aheader>
    </div>
</template>

<script>
  import Aheader from "../../components/header/header";

    export default {
        name: "beneit",
      components:{
          Aheader
      },
      data(){
          return{
            message:"我的优惠"
          }
      }
    }
</script>

<style scoped>

</style>
