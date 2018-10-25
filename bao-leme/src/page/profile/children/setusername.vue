<template>
    <div>
        <aheader :input-name="name"></aheader>
        <div class="input">
            <input type="text" placeholder="输入用户名">
        </div>
        <div class="state">
            <span>用户名只能修改一次(5-24字符之间)</span> 
        </div>
            <button>确认修改</button>
    </div>
</template>
<script>
    import Aheader from "../../../components/header/header.vue";
    export default {
        name:"setusername",
        components:{
            Aheader
        },
        data(){
           return {
                name:"修改用户名"
           }
        }
    }
</script>
<style scoped>
.input{
    width: 100%;
    text-align: center
}
input {
    font-size: .2rem;
    background-color: #eaf0f0f1;
    width: 80%;
    padding: .1rem;
    outline:medium;
    margin-top: .1rem;
    border: 1px solid rgb(146, 144, 144);
}
.state{
    width: 80%;
    font-size: .1rem;
    margin: 0.1rem auto;
}
button{
     width: 90%;
     margin: 0.1rem auto;
     background-color: rgb(21, 149, 235);
     height: .5rem;
     color: rgb(244, 246, 247);
     border-radius: .05rem;
     margin-left: 5%;
     font-size: .2rem;
}
</style>

