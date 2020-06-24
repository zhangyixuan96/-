<style scoped lang="less">
    .indexLoading{
        .logOut{
            margin-top: 0.5rem;
            width: 100%;
            text-align: right;
            .logo{
                width: 3.5rem;
                padding-right: 0.5rem;
            }
        }
        .loading{
            text-align: center;
            img{
                margin-top:2.34rem;
                width: 3.27rem;
            }
            .loadingCircle{
                margin-top: 0.81rem;
            }
            .tip{
                margin-top:0.2rem;
                font-size:0.28rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:0.84rem;
            }
        }
        .internetError{
            text-align: center;
            img{
                margin-top:2.08rem;
                width: 2.8rem;
            }
            .errTip1{
                margin-top:0.2rem;
                font-size:0.28rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(51,51,51,1);
            }
            .errTip2{
                margin-top: 0.3rem;
                font-size:0.24rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(153,153,153,1);
            }
            .button{
                background:rgba(20,193,253,1);
                box-shadow:0 0.06rem 0.25rem 0 rgba(20,193,253,0.4);
                border-radius:0.25rem;
                width:1.6rem;
                height:0.5rem;  
                line-height: 0.5rem;  
                font-size:0.24rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(255,255,255,1);
                display: inline-block;
                margin-top: 0.76rem;
            }
        }
        .index{
            padding: 0rem 0.3rem 0.2rem 0.3rem;
            .oneCar{
                cursor:pointer;
                width:6.9rem;
                height:2.28rem;
                background:rgba(255,255,255,1);
                box-shadow:0 0.06rem 0.25rem 0 rgba(0, 0, 0, 0.08);
                border-radius:0.3rem;
                margin-top:0.2rem;
                background-size: cover;
                background-position: center;
            }
            .otherCar{
                margin-top:0.8rem;
                font-size:0.24rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:0.84rem;
                text-align: center;
                vertical-align: middle;
                img{
                    vertical-align: middle;
                }
            }
        }
    }
</style>
<template>
    <div class="indexLoading loadMoudle" @touchstart="touchStart($event)" @touchmove="touchMove($event)" :style="{transform: 'translate3d(0,' + top + 'px, 0)'}">
        <!-- <Header :title="title"></Header> -->
        <div class="logOut">
            <img class="logo" src="../images/a2_logo.png" alt />
        </div>
        <!-- 加载页 -->
        <div class="loading" v-if="loading">
                <img src="../images/a2_logo.png" alt="">
                <div class="loadingCircle">
                    <Circle :percent="percent">
                        <span class="demo-Circle-inner" style="font-size:24px">{{percent}}%</span>
                    </Circle>
                    <div class="tip">加载中</div>
                </div>
        </div>
        <!-- 首页 -->
        <div class="index" v-if="!loading&&!error">
            <div class="oneCar" v-for="item in carList" :style="{backgroundImage:'url('+item.carImage+')'}" @click="goDetail(item.id,item.type,item.oldUrl)">
            <!-- <div class="oneCar" v-for="item in carList"> -->
                <!-- <img :src="item.img" alt=""> -->
            </div>
            <div class="otherCar"  v-if="hasMoreCar" @click="touchBottom">更多车型<img src="../images/a2_icon_arrow.png" alt="" ></div>
        </div>
        <!-- 网络异常 -->
        <div class="internetError" v-if="error">
            <img src="../images/no_wifi.png" alt="">
            <div class="errTip1">网络不给力</div>
            <div class="errTip2">世界上最遥远的距离，莫过于网路不给力</div>
            <div class="button" @click="refresh">刷新</div>
        </div>
    </div>
</template>
<script>
import Header from "./header.vue";
    export default {
        data() {
            return {
                // 标题
                title:'',
                // 圆形进度条
                percent:0,
                // 加载中
                loading:true,
                // 网络错误
                error:false,
                // 车列表
                carList:[],
                // 失败回调的
                fallBack:false,
                pageNumber:1,
                pageSize:5,
                // 还能获取其他车
                hasMoreCar:true,
                // 定时器
                setTime:'',
                // carList:[
                //     {
                //         img:require('../images/oneCar.png')
                //     },
                //     {
                //         img:require('../images/oneCar.png')
                //     },
                //     {
                //         img:require('../images/oneCar.png')
                //     },
                //     {
                //         img:require('../images/oneCar.png')
                //     },
                // ]
                //下拉加载
                // pageNumber: 1,
                totalNum: 0,
                top: 0,
                startY: 0,
            }
        },
        mounted() {
            const vm = this;
            // 圆形进度条加载定时器
            let time = setInterval(function(){
                if(vm.percent>=100){
                    clearInterval(time);
                    return;
                }
                vm.percent += 1;
            },100)
            // 获取车列表
            this.getCarList();
            // 3秒后失败
            setTimeout(function(){
                 if(vm.fallBack){
                    return;
                }
                if(!vm.carList.length){
                    vm.error = true;
                    vm.loading = false;
                }
            },3000)
            // 从缓存车ID中拿出
            // let carId = this.getCookie("carId");
            // let noFirstIn  = this.$route.query.noFirstIn;
            // if(carId&&!noFirstIn){
            //     this.goDetail(carId);
            // }
        },
         components: {
            Header
        },
        methods: {
            // 跳转车详情页
            goDetail(id,type,oldUrl){
                if(type==2&&oldUrl){
                    if(oldUrl.indexOf("http")==-1){
                        window.location.href = "http://"+oldUrl;
                    }else{
                        window.location.href = oldUrl;
                    }
                }else{
                    this.$router.push({
                        name: "carDetail",
                        query: {
                        id: id
                        }
                    });
                }
            },
            // 获取车列表
            getCarList(){
                const vm = this;
                let params={
                    pageNumber:vm.pageNumber,
                    pageSize:vm.pageSize
                }
                this.api(vm, '/api/app/car/getCarList.json', params, function (res) {
                    // console.log("res",res);
                    // if(res.length<vm.pageSize){
                    //     vm.hasMoreCar = false;
                    // }
                    vm.carList = res.carResultList;
                    vm.totalNum = res.count;
                    if(vm.carList.length>=vm.totalNum){
                        vm.hasMoreCar = false;
                    }
                    vm.percent = 100;
                    vm.loading = false;
                    // let url = res;
                    // window.location.href=url; 
                },function(err){
                    vm.fallBack = true;

                })
            },
            // 网络错误的刷新
            refresh(){
                const vm = this;
                vm.percent = 0;
                vm.error = false;
                vm.loading = true;
                vm.fallBack = false;
                this.getCarList();
                // 3秒后失败
                setTimeout(function(){
                    if(vm.fallBack){
                    return;
                }
                if(!vm.carList.length){
                    vm.error = true;
                    vm.loading = false;
                }
            },3000)
            },
            // 触底调用
            touchBottom(){
                const vm = this;
                // 防抖
                // clearTimeout(this.setTime);
                // this.setTime = setTimeout(function(){
                    vm.addCar();
                // },100)
            },
            // 点击其他车型加载车
            addCar(){
                this.pageNumber += 1;
                const vm = this;
                if(vm.carList.length>=vm.totalNum){
                        return;
                }
                let params={
                    pageNumber:vm.pageNumber,
                    pageSize:vm.pageSize
                }
                this.api(vm, '/api/app/car/getCarList.json', params, function (res) {
                    // console.log("res",res);
                    // if(res.length<vm.pageSize){
                    //     vm.hasMoreCar = false;
                    // }
                    vm.carList = vm.carList.concat(res.carResultList);
                    if(vm.carList.length>=vm.totalNum){
                        vm.hasMoreCar = false;
                    }
                },function(err){
                    // vm.fallBack = true;
                })
            },
            //下拉加载
                touchStart(e) {
                    this.startY = e.targetTouches[0].pageY
                    // console.log("touchStart",e);
                },
                touchMove(e) {
                    // console.log("touchMove",e);  
                    if (e.targetTouches[0].pageY < this.startY) { // 上拉
                        this.judgeScrollBarToTheEnd()
                    }
                },
                // 判断滚动条是否到底
                judgeScrollBarToTheEnd() {
                    let innerHeight = document.querySelector('.loadMoudle').clientHeight
                    // 变量scrollTop是滚动条滚动时，距离顶部的距离
                    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                    // 变量scrollHeight是滚动条的总高度
                    let scrollHeight = document.documentElement.clientHeight || document.body.scrollHeight
                    // 滚动条到底部的条件
                    if (scrollTop + scrollHeight >= innerHeight) {
                            // this.pageNumber++;
                            this.touchBottom();
                    }
                },
            
        }
    }
</script>