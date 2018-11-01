export default{
    en(state,en1){
      this.state.en=en1;  
    },
//增加商品
    add(state, id) {
      // 过滤id
      this.state.en.filter(num => id == num.foods[0].specfoods[0].food_id)[0].foods[0].specfoods[0].count++;
      // 过滤添加的商品
      this.state.arr= this.state.en.filter(num => num.foods[0].specfoods[0].count !=0);
      console.log(id);
      console.log(this.state.arr);
      // 计算价格
      var sumValue = 0;
      for (let i = 0; i < this.state.arr.length; i++) {
          sumValue += this.state.arr[i].foods[0].specfoods[0].price * this.state.arr[i].foods[0].specfoods[0].count;
      }
      this.state.price = sumValue
  },
  // 减少商品
  remove(state, id) {
    this.state.en.filter(num => id == num.foods[0].specfoods[0].food_id)[0].foods[0].specfoods[0].count--
    this.state.arr= this.state.en.filter(num => num.foods[0].specfoods[0].count !=0);
    console.log(id)
    var sumValue = 0;
        for (let i = 0; i < this.state.arr.length; i++) {
            sumValue += this.state.arr[i].foods[0].specfoods[0].price * this.state.arr[i].foods[0].specfoods[0].count
        }
        this.state.price = sumValue;

},
// 清空
qk(state){
  for(var j = 0;j<this.state.arr.length;j++){
    this.state.arr[j].foods[0].specfoods[0].count = 0;
  }
  this.state.price = 0;
  // this.state.show = false;
},
// 结算
jiesuan(state){
  if(this.state.price<20){
    this.state.show = true;
  }else{
    this.state.show = false;
  }
},
  changeaddress(state,value){
      state.address = value;
  },
  changegeohash(state,value){
      state.geohash =  value;
  }
}
