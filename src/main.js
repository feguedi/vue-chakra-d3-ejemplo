import Vue from 'vue';
import App from './App.vue';
import router from './Router';
import Chakra from '@chakra-ui/vue';

Vue.use(Chakra);

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
