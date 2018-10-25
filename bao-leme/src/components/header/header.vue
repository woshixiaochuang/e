<template>
    <div class="header">
        <img src="../../images/back.png" class="back" @click="back">
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
    font-size: 0.2rem
}
.back{
    width: 10%;
    height: 100%;
    float: left
}
.my{
    margin-left: 33%
}
</style>


