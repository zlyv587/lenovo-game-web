import Vue from 'vue';
import App from './App';
import router from './router';
// promise兼容ie，处理axios菜蔬
import 'babel-polyfill';
// 初始化全局http回调
import {init} from './common/request.js';

import './main.less';
// 引入头部Header，公共组件
import Header from './components/header';
Vue.use(Header);


Vue.prototype.$bus = new Vue();

/* eslint-disable no-new */
console.log('============================================');
console.log('执行了main代码');
// 图片懒加载
Echo.init({
    offset: 900,
    throttle: 0
});
const vm = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});

init({
    success(res) {

        // vm.$message.success('操作成功');
    },
    error(err) {

    }
});

