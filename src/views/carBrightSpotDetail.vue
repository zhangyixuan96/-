<style scoped lang="less">
.carBrightSpotDetail {
  padding: 0.88rem 0.3rem 0.8rem 0.3rem;
  border-top: 1px solid rgba(225, 230, 240, 1);
  img {
    width: 6.9rem;
  }
  .video {
    width: 100%;
  }
}
.bottom {
  background-color: white;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  position: fixed;
  bottom: 0;
  border-top: 1px solid rgba(225, 230, 240, 1);
  img {
    width: 2.79rem;
    vertical-align: middle;
  }
}
.fixed{
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid rgba(225,230,240,1);;
}
.header {
  height: 0.88rem;
  width: 100%;
  line-height: 0.88rem;
  // border: 1px solid;
  position: relative;
  text-align: center;
  img {
    width: 0.6rem;
    position: absolute;
    left: 0.2rem;
    top: 0.1rem;
  }
  h2 {
    font-size: 0.36rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
}
</style>
<template>
  <div>
    <!-- <Header :title="brightSpotDetail.postName "></Header> -->
    <div class="fixed">
      <div class="header">
        <!-- <img src="../images/a_nav_icon_back.png" alt @click="goBack" /> -->
        <h2>{{brightSpotDetail.postName}}</h2>
        <h2 v-if="title">{{title}}</h2>
      </div>
    </div>
    <div class="carBrightSpotDetail">
      <!-- 详情富文本 -->
      <div class="details" v-html="brightSpotDetail.details" v-if="brightSpotDetail.type==1"></div>
      <div v-if="brightSpotDetail.type==2">
        <video
          :src="brightSpotDetail.videoUrl"
          controls
          class="video"
          :autoplay="true"
          :muted="true"
          ref="myVideo"
        ></video>
      </div>
      <div v-if="videoUrl">
        <video
          :src="videoUrl"
          controls
          class="video"
          :autoplay="true"
          :muted="true"
          ref="myVideo"
        ></video>
      </div>
    </div>
    <!-- 底部商标 -->
    <div class="bottom">
      <img src="../images/a2_logo.png" alt />
    </div>
  </div>
</template>
<script>
import Header from "./header.vue";
export default {
  data() {
    return {
      title: "",
      // 亮点详情
      brightSpotDetail: {},
      // 亮点ID
      id: "",
      // 视频播放
      videoUrl:'',
      // 轮播图位置
      activeIndex:0,
      moduleId:'',
      carId:'',
      moduleName:'',
      moduleType:'',
    };
  },
  mounted() {
    // 获取ID
    let id = this.$route.query.id;
    let videoUrl = this.$route.query.videoUrl;
    let videoName = this.$route.query.videoName;
    // 轮播图位置
    let activeIndex = this.$route.query.activeIndex;
    if(activeIndex){
      this.activeIndex = activeIndex;
    }
    if(videoName){
      this.title = videoName;
    }
    if (id && !videoUrl) {
      this.id = id;
      this.getCarHotspotPositionInfo();
    }
    if(videoUrl){
      this.videoUrl  = videoUrl;
    }
    // 回跳页面参数
    let moduleId = this.$route.query.moduleId;
    let carId = this.$route.query.carId;
    let moduleName = this.$route.query.moduleName;
    let moduleType = this.$route.query.moduleType;
    if(moduleId){
      this.moduleId = moduleId;
    }
    if(carId){
      this.carId = carId;
    }
    if(moduleName){
      this.moduleName = moduleName;
    }
    if(moduleType){
      this.moduleType = moduleType;
    }
  },
  components: {
    Header
  },
  methods: {
    // 获取亮点详情
    getCarHotspotPositionInfo() {
      // console.log("testgetCarHotspotPositionInfo");
      const vm = this;
      let params = {
        id: vm.id
      };
      this.api(
        vm,
        "/api/app/car/getCarHotspotPositionInfo.json",
        params,
        function(res) {
          let details = res.details;
          if (details) {
            const regex = new RegExp("<img", "gi");
            res.details = details.replace(
              regex,
              `<img style="max-width: 100%; height: auto"`
            );
          }
          vm.brightSpotDetail = res;
          // vm.$nextTick(function(){
          //     let video = vm.$refs.myVideo;
          //     console.log("nextTick",vm.$refs,video);
          //     video.play()
          // })
        },
        function(err) {
          // vm.fallBack = true;
        }
      );
    },
    // 返回
    goBack() {
      // this.$router.go(-1);
      this.$router.push({
        name: "carBrightSpot",
        query: {
          activeIndex:this.activeIndex,
          id:this.carId,
          moduleId:this.moduleId,
          moduleName:this.moduleName,
          moduleType:this.moduleType
        }
      });
    }
  }
};
</script>