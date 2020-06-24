<style scoped lang="less">
.carDetail {
  background-image: url("../images/bg.png");
  background-size: contain;
  // width:7.5rem;
  // height:13.34rem;
  // background-color: gray;
  // width: 100%;
  height: 100%;
  padding: 0.3rem;
  padding-top: 0;
  .back {
    width: 0.6rem;
    margin-top: 0.1rem;
    cursor: pointer;
  }
  .carImg {
    padding-top: 1.75rem;
    text-align: center;
    img {
      width: 6rem;
      border-radius: 0.5rem;
    }
  }
  .carName {
    font-size: 0.32rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 0.84rem;
    margin-top: 0.53rem;
  }
  .search {
    margin-top: 0.42rem;
    // width: 1.1rem;
    width: 1.6rem;
    height: 0.62rem;
    line-height: 0.62rem;
    padding-left: 0.5rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0.06rem 0.25rem 0 rgba(0, 0, 0, 0.08);
    border-radius: 0.3rem;
    background-image: url("../images/nav_icon_search.png");
    background-size: contain;
    background-repeat: no-repeat;
    // background-position: center;
  }
  .brightSpot {
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-between;
    .oneSpot {
      display: inline-block;
      text-align: center;
      width: 2.14rem;
      height: 2.78rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 0.06rem 0.25rem 0 rgba(0, 0, 0, 0.08);
      border-radius: 0.3rem;
      img {
        width: 1.1rem;
        margin-top: 0.31rem;
      }
      .brightName {
        font-size: 0.28rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        margin-top:0.3rem;
      }
    }
  }
  .chooseOther {
    width: 3.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background: rgba(20, 193, 253, 1);
    box-shadow: 0 0.06rem 0.25rem 0 rgba(20, 193, 253, 0.4);
    border-radius: 0.4rem;
    text-align: center;
    font-size: 0.28rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 0.06rem 0.25rem 0 rgba(0, 0, 0, 0.08);
    margin: 0.5rem auto;
    cursor: pointer;
  }
}
</style>
<template>
  <div class="carDetail">
    <!-- 返回箭头 -->
    <!-- <img class="back" src="../images/a_nav_icon_back.png" alt @click="goBack" /> -->
    <!-- 车图片 -->
    <div class="carImg">
      <!-- <img src="../images/carDetail.png" alt /> -->
      <img :src="carDetail.carDetailImage" alt />
    </div>
    <!-- 车名字 -->
    <div class="carName">{{carDetail.carName}}</div>
    <!-- 搜索 -->
    <div class="search" @click="goSearch()">搜Tips</div>
    <!-- 亮点 -->
    <div class="brightSpot">
      <div class="oneSpot" @click="goCarBrightSpot(item.id,item.moduleName,item.moduleType)" v-for="item in carDetail.carModuleResultList">
        <!-- <img src="../images/a2_icon_car.png" alt /> -->
        <img :src="item.moduleIcon" alt />
        <div class="brightName">{{item.moduleName}}</div>
      </div>
      <!-- <div class="oneSpot" @click="goCarBrightSpot(2)">
        <img src="../images/a2_icon_outsai.png" alt />
        <div class="brightName">外部</div>
      </div>
      <div class="oneSpot" @click="goCarBrightSpot(3)">
        <img src="../images/a2_icon_insa.png" alt />
        <div class="brightName">内部</div>
      </div> -->
    </div>
    <!-- 选择其他车型 -->
    <div class="chooseOther" @click="chooseOtherCar">选择其他车型</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        // 车详情
        carDetail:{},
        // 车ID
        id:''
    };
  },
  mounted() {
    //   获取ID
      let id  = this.$route.query.id;
      if(id){
          this.id = id;
          this.getCarInfo();
          this.addCookie("carId",id);
      }
  },

  methods: {
    //  点击返回箭头
    goBack() {
      // this.$router.go(-1);
      this.$router.push({
        name: "index",
        query: {
          noFirstIn:1,
        }
      });
    },
    // 选择其他车型
    chooseOtherCar() {
      this.$router.push({
        name: "index",
        query: {
          noFirstIn:1,
        }
      });
    },
    // 跳转车亮点区
    goCarBrightSpot(moduleId,moduleName,moduleType) {
      const vm = this;
      this.$router.push({
        name: "carBrightSpot",
        query: {
          moduleId: moduleId,
          id:vm.id,
          moduleName:moduleName,
          moduleType:moduleType
        }
      });
    },
    //  跳转搜索
    goSearch() {
    let id = this.id;
      this.$router.push({
        name: "search",
        query: {
          id: id
        }
      });
    },
    // 获取车详情
    getCarInfo(){
        const vm = this;
                let params={
                    id:vm.id,
                }
                this.api(vm, '/api/app/car/getCarInfo.json', params, function (res) {
                    vm.carDetail = res;
                },function(err){
                    // vm.fallBack = true;
                })
    }
  }
};
</script>