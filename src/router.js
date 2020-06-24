const routers = [
    //
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    //首页
    {
        path: '/index',
        name: 'index',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    //车详情页
    {
        path: '/carDetail',
        name: 'carDetail',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/carDetail.vue'], resolve)
    },
    //车详情页
    {
        path: '/search',
        name: 'search',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/search.vue'], resolve)
    },
    //车型亮点详情
    {
        path: '/carBrightSpotDetail',
        name: 'carBrightSpotDetail',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/carBrightSpotDetail.vue'], resolve)
    },
    //车型亮点
    {
        path: '/carBrightSpot',
        name: 'carBrightSpot',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/carBrightSpot.vue'], resolve)
    },
];
export default routers;