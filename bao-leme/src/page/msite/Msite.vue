<template>
    <div>


        <footers></footers>
    </div>
</template>

<script>
import footers from "../../components/footer/footGuide.vue";
export default {
    name:"msite",
    components:{
        footers
    },
    data(){
        return{

        }
    },
    created() {
        var ss = this.$route.params.latitude;
        var s = this.$route.params.longitude;
        console.log(ss)
        console.log(s)
    },
}
</script>

<style>

</style>
