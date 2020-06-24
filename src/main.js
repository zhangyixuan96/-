import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import App from './app.vue';
import 'iview/dist/styles/iview.css';

import Axios from 'axios'
import VueAxios from 'vue-axios'
import Mixins from './mixins'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter);
Vue.use(iView);

Vue.use(VueAxios, Axios);
// 路由配置
const RouterConfig = {
    mode: 'hash',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    // iView.LoadingBar.start();
    // Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    // iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    mounted () {
        // 显示打开的页面的列表
        // this.$store.commit('setOpenedList');
        // this.$store.commit('initCachepage');
        // // 权限菜单过滤相关
        // //this.$store.commit('updateMenulist');
        // // iview-admin检查更新
        // util.checkUpdate(this);
    },
    created () {
        // let tagsList = [];
        // Routers.map((item) => {
        //     if (item.children.length <= 1) {
        //         tagsList.push(item.children[0]);
        //     } else {
        //         tagsList.push(...item.children);
        //     }
        // });
        // this.$store.commit('setTagsList', tagsList);
    }
});
Vue.mixin(Mixins);

