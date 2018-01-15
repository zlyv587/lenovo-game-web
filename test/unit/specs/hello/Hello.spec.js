import Vue from 'vue';
import Hello from '@/view/Hello';

describe('Hello.vue', () => {
    // html内容的渲染的检测
    it('should render correct HTML contents', () => {
        const Constructor = Vue.extend(Hello);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.hello h1').textContent)
            .to.equal('Welcome to Your Vue.js App');
    });
    // 方法的检测
    it('should action', () => {
        const Constructor = Vue.extend(Hello);
        const vm = new Constructor().$mount();
        expect(vm.hello('keke'))
            .to.equal('keke');
    });
    // 赋值的检测
    it('should correct init data', () => {
        const Constructor = Vue.extend(Hello);
        const vm = new Constructor().$mount();
        expect(vm.msg)
            .to.equal('Welcome to Your Vue.js App');
    });
});
