<style lang="less">
.header {
  height: 0.88rem;
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
.carBrightSpot {
  padding: 0.7rem 0.3rem 0 0.3rem;
  .block-swiper {
    width: 100%;
    box-shadow:0 0 0.15rem gray;
    // border-radius: 0.8rem;
    // overflow: hidden;
    // border: 2px solid ;
    .wrapper {
      width: 100%;
      // overflow: hidden;
      height: 0;
      // 其中26.67%为轮播图片的宽高比
      // padding-bottom: 74.7%;
      padding-bottom: 96.5%;
      // zoom: 0.5;
      // transform:scale(0.5,0.5);//父元素缩小两倍
      // border-radius: 50%;
      // background: #eee;
      .swiper-img {
        width: 100%;
      }
    }
  }
  .brightSpot {
    margin-top: 1rem;
    text-align: center;
    font-size: 0.28rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    .oneBrightSpot {
      display: inline-block;
      width: 6.6rem;
      height: 0.88rem;
      line-height: 0.88rem;
      background: rgba(20, 193, 253, 1);
      border-radius: 0.44rem;
      margin-bottom: 0.2rem;
    }
    .noMarginBottom{
      margin-bottom: 0;
    }
    .oneChildBrightSpot{
      text-align: right;
      padding-right: 0.2rem;
    }
    .childBrightSpot {
      display: inline-block;
      width: 5rem;
      // height: 0.88rem;
      // line-height: 0.88rem;
      padding:0.2rem 0 0.2rem 0;
      background: rgb(97, 214, 253);
      border-radius: 0.44rem;
      margin-bottom: 0.2rem;
      text-align: center;
    }
    .line{
      display: inline-block;
      border-left: 2px solid rgb(29, 198, 255);
      border-bottom: 2px solid rgba(20, 193, 253, 1);
      width: 1rem;
      height: 1.35rem;
    }
    .allChildBrightSpot{
      position: relative;
    }
    .marginFu{
      margin-top:-0.55rem;
    }
    .linkLine{
      position: absolute;
      left: 50%;
      margin-left:-0.25rem;
      top:0;
      border-left: 2px solid rgba(20, 193, 253, 1);
      width: 2rem;
      height: 1rem;
    }
  }
}
.videoList{
  padding:0.5rem 1rem;
  height: 93.5vh;
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgb(101, 126, 167);
  background-image: url('../images/bg2.png');
  background-size: 100% 93.5vh;
  text-align: center;
  color:white;
    .oneList{
      width: 5.5rem;
      background-color: rgb(189, 215, 239);
      margin-bottom: 0.2rem;
      padding:0.05rem;
      padding-left: 0.3rem;
      text-align: left;
    }
    .carImg{
      position: fixed;
      width: 3.5rem;
      left:1.8rem;
      bottom:0.8rem;
    }
}
.videoList2{
  // padding:0.5rem 1rem;
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgb(101, 126, 167);
}
.hotPlaceList {
  .oneHotPlace {
    font-size: 0.28rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(30, 30, 30, 1);
    line-height: 0.84rem;
    .nameList {
      .oneName {
        margin-bottom: 0.3rem;
        text-align: center;
        width: 5.28rem;
        height: 0.88rem;
        background: rgba(245, 248, 250, 1);
        border-radius: 0.44rem;
      }
    }
    .noMarginBottom{
      margin-bottom: 0;
    }
    .oneChildBrightSpot{
      text-align: right;
      padding-right: 0.2rem;
    }
    .childBrightSpot {
      display: inline-block;
      width: 4rem;
      // height: 0.88rem;
      // line-height: 0.88rem;
      padding:0.1rem 0 0.1rem 0;
      background: rgba(245, 248, 250, 1);
      border-radius: 0.44rem;
      margin-bottom: 0.2rem;
      text-align: center;
    }
    .line{
      display: inline-block;
      border-left: 2px solid rgba(245, 248, 250, 1);
      border-bottom: 2px solid rgba(245, 248, 250, 1);
      width: 1rem;
      height: 1.35rem;
    }
    .allChildBrightSpot{
      position: relative;
    }
    .marginFu{
      margin-top:-0.65rem;
    }
    .linkLine{
      position: absolute;
      left: 50%;
      margin-left:-0.25rem;
      top:0;
      border-left: 2px solid rgba(245, 248, 250, 1);
      width: 2rem;
      height: 1rem;
    }
  }
}
.ivu-drawer-mask {
  top: 0.9rem !important;
}
.ivu-drawer-wrap {
  top: 0.9rem !important;
}
.ivu-drawer {
  top: 0.9rem !important;
}
.ivu-drawer-body {
  padding-bottom: 1rem !important;
}
.icon-pop {
  width: 0.6rem;
  position: fixed;
  right: 0.28rem;
  top: 0.2rem;
}
.swiper-pagination {
  width: 100%;
}
.myPagination {
  margin-top: 0.2rem;
  position: relative;
}
.swiper-pagination-bullet {
  margin: 0 0.1rem;
  width: 0.2rem !important;
  height: 0.2rem !important;
  border: 0.02rem solid rgb(108, 108, 110);
  background: white !important;
}
.swiper-pagination-bullet-active {
  border: 0.03rem solid rgb(37, 197, 252);
  color: rgb(8, 166, 219)
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translatey(10px);
  opacity: 0;
}
</style>
<template>
  <div>
    <!-- <Header :title="title"></Header> -->
    <div class="header">
      <!-- <img src="../images/a_nav_icon_back.png" alt @click="goBack" /> -->
      <h2>{{title}}</h2>
    </div>
    <img class="icon-pop" src="../images/nav_icon_other.png" alt @click="showPop" />
    <div class="carBrightSpot" v-if="moduleType==1">
      <!-- 轮播图 -->
      <div class="block-swiper">
        <div class="wrapper">
          <swiper :options="swiperOption" id="swiper" ref="swiper">
            <swiper-slide v-for="(item,index) of carImageResult" :key="item.id">
              <!-- <img class="swiper-img" :src="item.image"> -->
              <canvas width="800" height="600" :ref="index" @click="toLineBottom(index)"></canvas>
            </swiper-slide>
            <!-- <swiper-slide> -->
            <!-- <img class="swiper-img" src="../images/brightSport.png" /> -->
            <!-- <canvas  width="800" height="600" ref="canvas" @click="toLineBottom(1)"></canvas> -->
            <!-- </swiper-slide> -->
            <!-- <swiper-slide>
              <img class="swiper-img" src="../images/brightSport.png" />
            </swiper-slide>-->
            <!-- <swiper-slide>
              <img class="swiper-img" src="../images/brightSport.png" />
            </swiper-slide>-->
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          </swiper>
        </div>
        <!-- 分页器 -->
        <div class="myPagination">
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
      </div>
      <!-- 热区的亮点 -->
      <div class="brightSpot">
        <div class="oneBrightSpot" v-if="curCarHotspotPositionResultList.length==0">点击蓝圈获取资讯</div>
        <div class="outerBrightSpot" v-else>
          <div class="allBrightSpot" v-for="(item,index) in curCarHotspotPositionResultList">
              <!-- <div class="oneBrightSpot noMarginBottom"  @click="goDetail(item.id)" v-if="item.chchildPosition">
                {{item.postName}}
              </div> -->
              <div class="oneBrightSpot"  v-if="item.childPosition.length==0" @click="goDetail(item.id)" >
                {{item.postName}}
              </div>
              <div class="oneBrightSpot"  v-else  @click="item.show = !item.show">
                {{item.postName}}
              </div>
              
              <!-- :class="{'marginFu':index>1}" -->
              <!-- :class="{marginFu:index>0}" -->
              <!-- 子节点 -->
              <transition name="slide-fade" :duration="{ enter: 3000, leave: 800 }">
              <div class="allChildBrightSpot" v-if="item.show">
                <!-- <div class="oneChildBrightSpot marginFu" v-if="item.childPosition"  v-for="(child,index) in item.childPosition"  > -->
                <div class="oneChildBrightSpot" v-if="item.childPosition"  v-for="(child,index) in item.childPosition"  >
                  <!-- <span class="line"></span> -->
                  <div class="childBrightSpot" @click="goDetail(child.id,null,null,$event)">{{child.postName}}</div>
                </div>
                <!-- <span class="linkLine"></span> -->
              </div>
              </transition>
          </div>
        </div>
      </div>
    </div>
    <!-- 视频列表 -->
    <div class="videoList" v-else>
        <div class="oneList" v-for="(item,index) in carVideoList" @click="goDetail(item.id,item.videoUrl,item.videoName)">
          <!-- {{index+1}}、{{item.videoName}} -->
          {{item.videoName}}
        </div>
        <!-- <img class="carImg" src="../images/carDetail.png" alt=""> -->
        <img class="carImg" :src="curCarImg" alt="">
    </div>
    <!-- 抽屉 -->
    <div class="drawer">
      <Drawer :closable="false" v-model="isShowPop" width="80">
        <div class="hotPlaceList" v-if="carImageResult[activeIndex] && moduleType==1" >
          <!-- 一个热区 -->
          <div class="oneHotPlace" v-for="item in carImageResult[activeIndex].carHotspotResultList">
            <div class="name">{{item.hotspotName}}</div>
            <div class="nameList" v-for="item2 in item.carHotspotPositionResultList">
              <!-- 父名称（有子类则不跳转） -->
              <div class="oneName" @click="goDetail(item2.id)" v-if="item2.childPosition.length==0">{{item2.postName}}</div>
              <div class="oneName" @click="item2.show = !item2.show" v-else>{{item2.postName}}</div>
              <!-- 子分类 -->
              <div class="allChildBrightSpot" v-if="item2.show">
                <div class="oneChildBrightSpot" v-if="item2.childPosition"  v-for="(child,index) in item2.childPosition"  >
                  <!-- <span class="line"></span> -->
                  <div class="childBrightSpot" @click="goDetail(child.id,null,null,$event)">{{child.postName}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 视频列表 -->
        <div class="videoList2" v-else>
            <div class="oneList" v-for="(item,index) in carVideoList" @click="goDetail(item.id,item.videoUrl,item.videoName)">
              {{index+1}}、{{item.videoName}}
            </div>
        </div>
      </Drawer>
    </div>
  </div>
</template>
<script>
import Header from "./header.vue";
export default {
  data() {
    return {
      // 当前显示车图片
      curCarImg:'',
      // // 画布宽高
      // canvasWidth:690,
      // canvasHeight:630,
      // // 图片宽高    
      // imgWidth:690,
      // imgHeight:516,
      // 画布宽高
      canvasWidth:690,
      canvasHeight:780,
      // 图片宽高
      imgWidth:690,
      imgHeight:666,
      // 判断是视频还是热区图
      moduleType:'',
      // 车列表
      carVideoList:[],
      // 弹窗
      isShowPop: false,
      title: "调整后视镜",
      activeIndex: 0,
      // 车亮点
      carImageResult: [
        {
          carHotspotResultList: []
        }
      ],
      // 当前点击圆点的亮点数组
      curCarHotspotPositionResultList: [],
      // 轮播图选项
      swiperOption: {
        pagination: ".swiper-pagination", //分页器
        paginationClickable: true, //可点击原点切换
        autoplayDisableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。默认为true：停止。如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        // loop: true,//可循环（到达最后一张继续切换从第一张开始滑动）
        // autoplay: 1500,//可选选项，自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
        // initialSlide :2,
        // onInit: swiper=>{
        //   // console.log("onInit",this.activeIndex,swiper);
        //   //Swiper初始化了
        //   //alert(swiper.activeIndex);提示Swiper的当前索引
        //   if(this.activeIndex!=0){
        //     // console.log("ins");
        //       console.log("swiper",swiper.activeIndex);
        //       console.log("swiper2",this.activeIndex);
        //       swiper.slideTo(this.activeIndex,0)
        //   }
        // },
        onSlideChangeEnd: swiper => {
          let swiperActiveIndex = swiper.activeIndex;
          // console.log("start",this.activeIndex);
          // console.log("swiper.activeIndex",swiperActiveIndex);
          this.activeIndex = swiperActiveIndex;
          let vm = this;
          // 切换时回归状态
          // 清空当前点击圆点亮点数组
          vm.curCarHotspotPositionResultList = [];
          // 将变化数据切换回无线状态
          vm.canvasSecondColor = Object.assign([],vm.canvasSecondColorNoline);
          vm.canvasFirstColor = Object.assign([],vm.canvasFirstColorNoline);
          // console.log("ss",this.activeIndex);
          // alert(swiper.activeIndex);
          // 重绘无线画面
          // let canvasWidth = vm.getChangeFit(690, "w");
          // let canvasHeight = vm.getChangeFit(630, "h");
          // let canvasHistory = vm.canvasHistory;
          // canvasHistory.map((item, index) => {
          //   if (index == swiperActiveIndex) {
          //     return;
          //   }
          //   let img = new Image();
          //   // 获取保存的无线画布状态
          //   img.src = item;
          //   img.onload = function() {
          //     // 清除画布
          //     vm.contexts[index].clearRect(0, 0, canvasWidth, canvasHeight);
          //     // 重绘画布
          //     vm.contexts[index].drawImage(img, 0, 0);
          //   };
          // });
        }
      },
      // 车模块ID
      moduleId: "",
      // 车ID
      carId: "",
      pageNumber: 1,
      pageSize: 100,
      // 背景图片缓存
      imgs: [],
      // 背景图片缓存
      imgs2: [],
      // canvas对象数组
      contexts: [],
      // 保存位置数组
      allPositionArr: [],
      // 保存未点击状态的canvas
      canvasHistory: [],
      // 保存两种颜色的最终画布状态
      canvasFirstColor:[],
      canvasSecondColor:[],
      // 保存两种颜色的无线画布状态
      canvasFirstColorNoline:[],
      canvasSecondColorNoline:[],
      // 两种颜色的圆圈
      firstColor:'rgb(20, 193, 253)',
      secondColor:'rgb(8, 166, 219)',
      // 切换两个颜色数组
      type:1,
      // 模糊适配
      ratio:'',
      // 圆半径
      radius:22,
    };
  },
  mounted() {
    
    // 获取ID
    let moduleId = this.$route.query.moduleId;
    let moduleName = this.$route.query.moduleName;
    let moduleType = this.$route.query.moduleType;
    let carId = this.$route.query.id;
    if(moduleType){
      this.moduleType = moduleType;
    }
    if(moduleId){
      this.moduleId = moduleId;
    }
    if(carId){
      this.carId = carId;
    }
    if(moduleName){
      this.title = moduleName;
    }
    if (moduleType==1) {
      this.getCatImageList();
    }else{
      this.getCarVideoList()
    }
    // 点击返回的时候回到轮播图的位置
    let activeIndex = this.$route.query.activeIndex;
    if(activeIndex){
      // console.log("in activeIndex");
      setTimeout(() => {
          this.$nextTick(()=>{
            let swiper = this.$refs.swiper.swiper;
            // console.log("test",swiper);
            swiper.slideTo(activeIndex,0);
          })
          }, 500);
      // this.activeIndex = activeIndex;
    }
  },
  components: {
    Header
  },
  methods: {
    // 显示隐藏抽屉
    showPop() {
      // console.log("in");

      this.isShowPop = !this.isShowPop;
    },
    //  跳转车亮点详情页
    goDetail(id,videoUrl,videoName,event) {
      if(event){
        event.stopPropagation();
      }
      this.$router.push({
        name: "carBrightSpotDetail",
        query: {
          id: id,
          videoUrl:videoUrl,
          videoName:videoName,
          activeIndex:this.activeIndex,
          moduleId:this.moduleId,
          carId :this.carId,
          moduleName:this.title,
          moduleType:this.moduleType
        }
      });
    },
    // 获取视频列表
    getCarVideoList(){
        const vm = this;
              let params = {
                pageNumber: vm.pageNumber,
                pageSize: vm.pageSize,
                moduleId: vm.moduleId,
                carId: vm.carId
              };
              this.api(vm,"/api/app/car/getCarVideoList.json",params,function(res) {
                  // console.log("res",res);
                  let data = res;
                  vm.carVideoList = data.carVideoList;
                  vm.curCarImg = data.bgImg;
                },
                function(err) {
                  // vm.fallBack = true;
                }
              );
    },
    // 获取数据
    getCatImageList() {
      const vm = this;
      let params = {
        pageNumber: vm.pageNumber,
        pageSize: vm.pageSize,
        moduleId: vm.moduleId,
        carId: vm.carId
      };
      this.api(
        vm,
        "/api/app/car/getCatImageList.json",
        params,
        function(res) {
          let data = res;
          // 初始化显示隐藏二级
          data.map(item=>{
            item.carHotspotResultList.map(item2=>{
                item2.carHotspotPositionResultList.map(item3=>{
                  item3.show = false;
                })
            })
          })
          // console.log("data",data);
          data.map((item,index)=>{
            // 初始化图片缓存和数组
              vm.imgs.push(new Image());
              vm.imgs2.push(new Image());
              vm.allPositionArr[index] = [];
          })
          vm.carImageResult = data;
          if(data){
              vm.$nextTick(() => {
                // vm.getRatio();
                // // 画第一个张颜色圆
                vm.draw(vm.firstColor,1);
                // // // 画第二张颜色圆
                setTimeout(()=>{
                  vm.draw(vm.secondColor,2);
                  vm.toShy();
                },500)
              });
          }
        },
        function(err) {
          // vm.fallBack = true;
        }
      );
    },
    // 闪烁
    toShy(){
      const vm = this;
      setInterval(()=>{
        if(vm.type==1){
          vm.type=2
        }else{
          vm.type=1;
        }
        vm.reDraw(vm.type);
      },500)
    },
    // 重绘
    reDraw(type){
      let vm = this;
      // alert("reDraw");
      // alert(vm.canvasFirstColor.length);
      // alert(vm.canvasSecondColor.length)
          // 清除画布
          let canvasWidth = vm.getChangeFit(vm.canvasWidth, "w");
          let canvasHeight = vm.getChangeFit(vm.canvasHeight, "h");
          let canvasFirstColor = null;
          if(type==1){
            canvasFirstColor = vm.canvasFirstColor;
          }else{
             canvasFirstColor = vm.canvasSecondColor;
          }
          canvasFirstColor.map((item, index) => {
            let img = new Image();
            // 获取保存的无线画布状态
            img.src = item;
            img.onload = function() {
              // 清除画布
              vm.contexts[index].clearRect(0, 0, canvasWidth*2, canvasHeight*2);
              // 重绘画布
              vm.contexts[index].drawImage(img, 0, 0);
            };
          });
    },
    draw(color,type) {
      const vm = this;
      let data = vm.carImageResult;
      data.map((item, index) => {
        if(type==1){
          vm.imgs[index].src = item.image;
        }else{
          vm.imgs2[index].src = item.image;
        }
        // vm.img.src = res[1].image;
        if(type==1){
          const canvas = vm.$refs[index][0];
          // 设置画布大小
          // UI图轮播图宽度
          // let canvasWidth = vm.getChangeFit(690, "w") * vm.ratio;
          let canvasWidth = vm.getChangeFit(vm.canvasWidth, "w") * 2;
          // let canvasWidth = vm.getChangeFit(690, "w");
          // 这个距离为UI图轮播图上边框到下面文本框上边框的距离（为了画垂直线到文本框上面）
          // let canvasHeight = vm.getChangeFit(630, "h") * vm.ratio;;
          let canvasHeight = vm.getChangeFit(vm.canvasHeight, "h") * 2;
          // let canvasHeight = vm.getChangeFit(630, "h");
          // 动态设置canvas画布的宽高
          canvas.setAttribute("width", canvasWidth + "px");
          canvas.setAttribute("height", canvasHeight + "px");
          canvas.style.width = vm.getChangeFit(vm.canvasWidth, "w")+ 'px';
          canvas.style.height =  vm.getChangeFit(vm.canvasHeight, "h")+ 'px';
          // 获取2D上下文
          const context = canvas.getContext("2d");
          // context.scale(vm.ratio, vm.ratio);
          // context.scale(2,2);
          // context.translate(0.5, 0.5);
          vm.contexts.push(context);
        }
        // 获取图片大小（UI轮播图大小）
        let width = vm.getChangeFit(vm.imgWidth, "w")*2;
        let height = vm.getChangeFit(vm.imgHeight, "h")*2;
        // let width = vm.getChangeFit(690, "w");
        // let height = vm.getChangeFit(516, "h");
        if(type==1){
          // 绘制图片
          vm.imgs[index].onload = function() {
            // alert("imgload",type)
            let orginWidth = vm.imgs[index].width;
            let orginHeight = vm.imgs[index].height;
            // console.log("sdfsd",orginWidth,orginHeight);
            // vm.contexts[index].scale(1,1);
            vm.contexts[index].drawImage(vm.imgs[index], 0, 0, width, height);
            // // 绘制圆点
            vm.drawCircle(index, width, height, orginWidth, orginHeight,color,type);
          };
        }else{
          // 绘制图片
          vm.imgs2[index].onload = function() {
            // alert("imgload2",type)
            let orginWidth = vm.imgs[index].width;
            let orginHeight = vm.imgs[index].height;
            // console.log("sdfsd",orginWidth,orginHeight);
            // vm.contexts[index].scale(1,1);
            vm.contexts[index].drawImage(vm.imgs[index], 0, 0, width, height);
            // // 绘制圆点
            vm.drawCircle(index, width, height, orginWidth, orginHeight,color,type);
          };
        }
      });
    },
    // 适配单位
    getChangeFit(uiNumber, type) {
      let clientWidth = document.documentElement.clientWidth;
      let clientHeight = document.documentElement.clientHeight;
      let changeNumber = "";
      if (type) {
        changeNumber = Math.floor((clientWidth * uiNumber) / 750);
      } else {
        changeNumber = Math.floor((clientHeight * uiNumber) / 1334);
      }
      // console.log("Sdfsdf",type,changeNumber,clientWidth,clientHeight);
      return changeNumber;
    },
    // 适配圆点坐标
    getImgFit(
      ox,
      oy,
      originImgWidth,
      originImgHeight,
      curImgWidth,
      curImgHeight
    ) {
      let x = Math.floor((curImgWidth * ox) / originImgWidth);
      let y = Math.floor((curImgHeight * oy) / originImgHeight);
      return { x: x, y: y };
    },
    // 画一张底图全部圆
    drawCircle(
      index,
      curImgWidth,
      curImgHeight,
      originImgWidth,
      originImgHeight,
      color,type
    ) {
      // alert("type",type);
      const vm = this;
      // 该底图中的全部圆点的坐标
      let positionArr = vm.carImageResult[index].carHotspotResultList;
      // 绘制圆点
      if(positionArr){
      positionArr.map(item => {
        let carHotspotPositionResultList =
          item.carHotspotPositionResultList.length;
        if (carHotspotPositionResultList == 0) {
          return;
        }
        //开始绘制新路径(画圆)
        // 计算坐标换算
        let point = vm.getImgFit(
          item.x,
          item.y,
          originImgWidth,
          originImgHeight,
          curImgWidth,
          curImgHeight
        );
        let x = point.x;
        let y = point.y;
        // 将换算后的点放入保存所有坐标点的数据
        // console.log("vm.allPositionArr.length",vm.allPositionArr.length,index);
        // 只存一次
        if(type==1){
          // if (vm.allPositionArr.length < index + 1) {
          //   // 第一次创建数组
          //   vm.allPositionArr[index] = [];
            vm.allPositionArr[index].push({ x, y });
          // } else {
          //   // 第一次之后
          //   vm.allPositionArr[index].push({ x, y });
          // }
        }
        // 绘制圆
        vm.contexts[index].beginPath();
        // 坐标无需乘2，因为已经是二倍的了
        vm.contexts[index].arc(x, y, vm.radius, 0, 2 * Math.PI, false);
        vm.contexts[index].closePath(); //关闭路径
        // vm.contexts[index].strokeStyle = "rgb(20, 193, 253)"; // 描边颜色为蓝色
        vm.contexts[index].strokeStyle = color; // 描边颜色为蓝色     
        // vm.contexts[index].shadowBlur=5;
        // vm.contexts[index].shadowColor=color;
        vm.contexts[index].lineWidth = 7; //指定描边线的宽度
        //以填充方式绘制圆
        vm.contexts[index].stroke();
      });
      }
      const canvas = vm.$refs[index][0];
      // 保存无线状态的canvas画布上的图形
      // vm.canvasHistory.push(canvas.toDataURL());
      // alert("drawCircle",type);
      
      if(type==1){
        vm.canvasFirstColor[index] = canvas.toDataURL();
        vm.canvasFirstColorNoline[index] = canvas.toDataURL();
        // alert("canvasFirstColor",vm.canvasFirstColor.length);
      }else{
        // alert("canvasSecondColor in",vm.canvasSecondColor.length);
        vm.canvasSecondColor[index] = canvas.toDataURL();
        vm.canvasSecondColorNoline[index] = canvas.toDataURL();
        // alert("canvasSecondColor out",vm.canvasSecondColor.length);
      }
    },
    // 画线
    drawLine(sx, sy, ex, ey, index, pindex) {
      const vm = this;
      vm.curCarHotspotPositionResultList =
        vm.carImageResult[index].carHotspotResultList[
          pindex
        ].carHotspotPositionResultList;
      // 重绘无线画面
      let canvasWidth = vm.getChangeFit(vm.canvasWidth, "w");
      let canvasHeight = vm.getChangeFit(vm.canvasHeight, "h");
      let img = new Image();
      // 获取保存的无线画布状态
      img.src = vm.canvasHistory[index];
      img.onload = function() {
        // 清除画布
        vm.contexts[index].clearRect(0, 0, canvasWidth, canvasHeight);
        // 重绘画布
        vm.contexts[index].drawImage(img, 0, 0);
        // 绘制直线路径
        vm.contexts[index].beginPath();
        // console.log("contexts",vm.contexts[index]);
        vm.contexts[index].moveTo(sx, sy); //画线的起点
        vm.contexts[index].lineTo(ex, ey); //终点
        vm.contexts[index].closePath();
        vm.contexts[index].strokeStyle = "rgb(20, 193, 253)";
        vm.contexts[index].stroke();
      };
    },
    // 画线222
    drawLine2(sx, sy, ex, ey, index, pindex) {
      // console.log("ssdrawLine2");
      const vm = this;
      vm.curCarHotspotPositionResultList =
        vm.carImageResult[index].carHotspotResultList[pindex].carHotspotPositionResultList;
      // 重绘第一种颜色无线画面
      let canvasWidth = vm.getChangeFit(vm.canvasWidth, "w");
      let canvasHeight = vm.getChangeFit(vm.canvasHeight, "h");
      let img = new Image();
      let img2 = new Image();
      // 第一张
      // 获取保存的无线画布状态
      img.src = vm.canvasFirstColorNoline[index];
      img.onload = function() {
        // 清除画布
        vm.contexts[index].clearRect(0, 0, canvasWidth*2, canvasHeight*2);
        // vm.contexts[index].scale(0.5,0.5);
        // 重绘画布
        vm.contexts[index].drawImage(img, 0, 0);
        // 绘制直线路径
        vm.contexts[index].beginPath();
        // vm.contexts[index].shadowBlur=0
        // console.log("contexts",vm.contexts[index]);
        vm.contexts[index].moveTo(sx, sy); //画线的起点
        vm.contexts[index].lineTo(ex, ey); //终点
        vm.contexts[index].closePath();
        vm.contexts[index].strokeStyle = "rgb(20, 193, 253)";
        vm.contexts[index].stroke();
        const canvas = vm.$refs[index][0];
        vm.canvasFirstColor[index] = canvas.toDataURL();
      };
      // 重绘第二种颜色无线画面
      // 第二张
      // 获取保存的无线画布状态
      img2.src = vm.canvasSecondColorNoline[index];
      img2.onload = function() {
        // 清除画布
        vm.contexts[index].clearRect(0, 0, canvasWidth, canvasHeight);
        // 重绘画布
        vm.contexts[index].drawImage(img2, 0, 0);
        // 绘制直线路径
        vm.contexts[index].beginPath();
        // console.log("contexts",vm.contexts[index]);
        vm.contexts[index].moveTo(sx, sy); //画线的起点
        vm.contexts[index].lineTo(ex, ey); //终点
        vm.contexts[index].closePath();
        vm.contexts[index].strokeStyle = "rgb(20, 193, 253)";
        vm.contexts[index].stroke();
        const canvas = vm.$refs[index][0];
        vm.canvasSecondColor[index] = canvas.toDataURL();
      };
    },
    // 点击圆点画线
    toLineBottom(cindex) {
      // console.log("text",this.allPositionArr);
      // console.log("in toLineBottom");
      // 点击的底图当前所有圆点坐标
      let curPosition = this.allPositionArr[cindex];
      // 获取鼠标点击的坐标
      let position = this.getEventPosition(event, cindex);
      // 计算鼠标点击的坐标和每个圆点的距离来判断是否点击到该圆点
      curPosition.map((item, index) => {
        // 两点距离小于半径则是点击该圆点
        if (this.calculateDistance(item.x, item.y, position.x*2, position.y*2)) {
          // 画垂直线
          // 这里1000足够大即可，超出部分画布不会显示的，y+6是得再圆点坐标下面即圆边开始画线
          // this.drawLine(item.x, item.y + 6, item.x, 1000, cindex, index);
          this.drawLine2(item.x, item.y + 20, item.x, 1000, cindex, index);
        }
      });
    },
    // 获取鼠标点击位置
    getEventPosition(ev, index) {
      const vm = this;
      // 轮播图所需（一张图的宽度）
      let canvasWidth = this.getChangeFit(vm.canvasWidth, "w");
      var x, y;
      if (ev.layerX || ev.layerX == 0) {
        // 轮播图第二、三。。张图距离左边的距离需要加上前面相应张数轮播图的宽度大小之和
        x = ev.layerX + canvasWidth * index;
        y = ev.layerY;
      } else if (ev.offsetX || ev.offsetX == 0) {
        // Opera
        x = ev.offsetX + canvasWidth * index;
        y = ev.offsetY;
      }
      return { x: x, y: y };
    },
    // 计算点和点距离（计算是否点击到圆）
    calculateDistance(sx, sy, ex, ey) {
      const vm = this;
      var dis = Math.sqrt((sx - ex) * (sx - ex) + (sy - ey) * (sy - ey)); //Math.sqrt()求平方跟
      // console.log("calculateDistance",dis);
      if (dis <= vm.radius) {
        return true;
      } else {
        return false;
      }
    },
    // 返回
    goBack() {
      // this.$router.go(-1);
      this.$router.push({
        name: "carDetail",
        query: {
          id:this.carId,
        }
      })
    },
    getRatio(){
      const canvas = this.$refs[0][0];
      const context= canvas.getContext("2d");
      var backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
        this.ratio = (window.devicePixelRatio || 1) / backingStore;
        // alert("ratio",this.ratio);
        // console.log("ratio",this.ratio);
        
    }
  }
};
</script>