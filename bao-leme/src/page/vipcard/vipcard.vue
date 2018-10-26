<template>
    <div>
        <Aheader :input-name="message"></Aheader>
    </div>
</template>
<script>
    import Aheader from "../../components/header/header.vue"
    export default {
        name:'vipcard',
        components:{
            Aheader
        },
        data(){
            return {
                message:"会员中心"
            }
        }
    }
</script>
<style>

</style>
