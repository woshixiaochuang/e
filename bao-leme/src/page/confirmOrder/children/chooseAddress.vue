<template>
    <div>
        <aheader :input-name="name"></aheader>
        <ul>
            <div class="address" v-for="(item,index) in message" :key="index">
                <li>{{item.address}}</li>
                <li>{{item.phone}}</li>
                <button @click="dele(index)">删除</button>
            </div>
        </ul>
        <router-link to="/profile/info/address/add">
        <div class="new"><span>新增地址</span><span class="arrow">></span></div>
        </router-link>
    </div>
</template>
<script>
    import Aheader from "../../../components/header/header.vue";
    export default {
        inject:["reload"],
        name:"chooseAddress",
        components:{
            Aheader
        },
        data(){
           return {
                name:"编辑地址",
                message:null,
           }
        },
        mounted(){
            let api = "https://elm.cangdu.org/v1/users/"+localStorage.user_id+"/addresses"
            this.axios.get(api).then(
                data=>{
                    this.message = data.data;
                }
            )
        },
        methods:{
            dele(n){
                let api = "https://elm.cangdu.org/v1/users/"+this.message[n].user_id+"/addresses/"+this.message[n].id;
                this.axios.delete(api).then(
                    this.reload()
                )
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
li{
    padding: .1rem
}
.address{
    background-color: rgb(236, 224, 113);
    font-size: .25rem;
    margin-bottom: .1rem;
}
</style>
