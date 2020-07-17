import Vue from 'vue'
import App from './App.vue'

// 导入router
import router from './router/index'

import { Lazyload } from 'vant';
Vue.use(Lazyload);

//导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
    // axios.defaults.baseURL = '';





Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')