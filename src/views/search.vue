<style  lang="less">
    .search{
        text-align: center;
        .searchInput{
            margin-top:0.38rem;
        }
        .rightButton{
            font-size:0.28rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(102,102,102,1);
            line-height:0.8rem;
            display: inline-block;
            height: 0.8rem;
            vertical-align: bottom;
            margin-left:0.1rem;
        }
        .searchTip{
            margin-top:0.2rem;
            margin-left: 0.3rem;
            width:4rem;
            padding:0 0.39rem 0 0.3rem;
            // height:355px;
            background:rgba(245,248,250,1);
            border-radius:0.3rem;
            font-size:0.24rem;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:0.84rem;
            .oneTip{
                border-bottom: 1px solid rgba(235,237,240,1);
            }
        }
    }
    .ivu-input{
            width: 6.17rem !important;
            height: 0.8rem !important;
            background-color: rgba(245,248,250,1) !important;
            border-radius: 0.4rem !important;
    }
    .ivu-input-prefix i, .ivu-input-suffix i{
       line-height:0.8rem !important;
    }
    .ivu-input-icon{
         line-height:0.8rem !important;
    }
    .ivu-input:focus, .ivu-input:hover{
        border-color:rgb(220, 222, 226) !important;
    }
    .header{
        height: 0.88rem;
        line-height: 0.88rem;
        // border: 1px solid;
        position: relative;
        text-align: center;
        img{
            width: 0.7rem;
            position: absolute;
            left:0.2rem;
            top:0.1rem;
        }
        h2{
            font-size:0.36rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(51,51,51,1);
        }
    }
</style>
<template>
    <div class="search">
        <!-- <Header :title="title"></Header> -->
        <div class="header">
        <!-- <img src="../images/a_nav_icon_back.png" alt="" @click="goBack"> -->
        <h2>{{title}}</h2>
    </div>
        <!-- 搜索框 -->
        <Input class="searchInput" :clearable="true" prefix="ios-search-outline" placeholder="请输入" style="width: auto" v-model="name" @on-change="inputValue"/>
        <!-- 右边按钮 -->
        <span class="rightButton">
            <span v-show="isSearch">取消</span>
            <span v-show="!isSearch" @click="getCarHotspotPositionList">搜索</span>
        </span>
        <!-- 下方搜索内容 -->
        <div class="searchTip">
            <div class="oneTip" v-for="item in carHotPositionList" @click="goDetail(item.id)">
                {{item.postName}}
            </div>
            <!-- <div class="oneTip">
                制动保持工作指示灯
            </div>
            <div class="oneTip">
                制动保持工作指示灯
            </div>
            <div class="oneTip">
                制动保持工作指示灯
            </div> -->
        </div>
    </div>
</template>
<script>
import Header from "./header.vue";
    export default {
        
        data() {
            return {
                // 标题名
                title:'搜索',
                // 是否显示搜索
                isSearch:true,
                pageNumber:1,
                pageSize:100,
                // 车ID
                id:'',
                // 搜索值
                name:'',
                // 搜索出的部位名列表
                carHotPositionList:[],
                // 输入框防抖
                timer:''

            }
        },
        mounted() {
             //   获取ID
            let id  = this.$route.query.id;
            if(id){
                this.id = id;
            }
        },
         components: {
            Header
        },
        methods: {
            // 切换搜索和取消
            changeSearch(){
                this.isSearch = !this.isSearch;
            },
            // 搜索
            getCarHotspotPositionList(){
                const vm = this;
                // console.log("test",vm.name);
                if(!vm.name.trim()){
                    vm.name='';
                    vm.$Message.error("搜索不可空");
                    return;
                }
                let params={
                    pageNumber:vm.pageNumber,
                    pageSize:vm.pageSize,
                    id:vm.id,
                    name:vm.name.trim()
                }
                    // 在这里进行我们的操作  这样就不会频繁的进行我们这里面的操作了
                vm.api(vm, '/api/app/car/getCarHotspotPositionList.json', params, function (res) {
                    if(res.length==0){
                        vm.$Message.error("搜索结果为空");
                    }
                    vm.carHotPositionList = res;
                },function(err){
                    // vm.fallBack = true;
                })
                
            },
            // 跳转详情页
            goDetail(id){
                console.log("goDetail",);
                
                this.$router.push({
                        name: "carBrightSpotDetail",
                        query: {
                        id: id
                        }
                    });
            },
            // 输入值后切换为搜索
            inputValue(){
                const vm = this;
                // 输入框防抖
                    clearTimeout(vm.timer) // 每次进来的时候都将之前的清除掉，如果还没到一秒的时候就将之前的清除掉，这样就不会触发之前setTimeout绑定的事件， 如果超过一秒，之前的事件就会被触发下次进来的时候同样清除之前的timer
                    vm.timer = setTimeout(function () {
                     // 切换为搜索
                    if(vm.isSearch){
                        vm.isSearch = false;
                    }
                    vm.getCarHotspotPositionList();
                    }, 500)
            },
            // 返回
            goBack(){
            this.$router.go(-1)
            }
        }
    }
</script>