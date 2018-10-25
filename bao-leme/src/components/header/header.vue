<template>
    <div class="header">
        <i class="el-icon-arrow-left" style="position:absolute;top:.14rem;left:.1rem;font-size:.2rem;font-weight: bolder;color:white"></i>
        <span class="my">{{inputName}}</span>
    </div>
</template>
<script>
    export default {
        name:'Aheader',
        props:{
            inputName:String
        },
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>
.header{
    width: 100%;
    background: #0474f5f1;
    color: white;
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 0.2rem;
    text-align: center;
}
.back{
    width: 10%;
    height: 100%;
    float: left
}
.my{
    width: 100%;
    /* border: 1px solid red */
}
</style>


