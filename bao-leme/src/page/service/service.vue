<template>
    <div>
      <Aheader :input-name="message"></Aheader>
      <ul>
        <li class="question" v-for="(item,index) in questions" :key="index">
          {{item}}<i class="el-icon-arrow-right"></i>
        </li>
      </ul>
    </div>
</template>

<script>
  import Aheader from "../../components/header/header"
    export default {
        name: "service",
      components:{
          Aheader
      },
      data(){
          return {
            message:"服务中心",
            questions:["超级会员权益说明","签到规则","用户等级说明","积分问题","教我拍大片","支付问题","其他问题","准时达","会员说明","会员问题","红包问题","活动细则","补签规则","优惠说明","免责声明","代金券说明","商务合作","余额问题","超赞商家","匿名购买","活动问题"],
          }
      },
      created(){
          let api = "https://elm.cangdu.org/v3/profile/explain";
          this.axios.get(api).then(
            data=>{
              console.log(data.data)
            }
          )
      }
    }
</script>

<style scoped>
.question{
  width: 96%;
  padding: 2%;
  background-color: #fff;
}
  .el-icon-arrow-right{
    position: absolute;
    right: .1rem;
  }
</style>
