<template>
    <div>
        <aheader :input-name="name"></aheader>
        <div class="new"><span>新增地址</span><span class="arrow">></span></div>
    </div>
</template>
<script>
    import Aheader from "../../../components/header/header.vue";
    export default {
        name:"chooseAddress",
        components:{
            Aheader
        },
        data(){
           return {
                name:"编辑地址"
           }
        }
    }
</script>
<style scoped>
.new{
    width: 100%;
    height: .5rem;
    background-color: #fff;
    font-size: .2rem;
    line-height: .5rem;
   position: relative;
}
.new span{
     margin-left: .1rem;
}
.arrow{
    position: absolute;
    right: .1rem;
}
</style>
