import Vue from 'vue';
import App from './App.vue';
import router from './Router';
import Chakra, {
    CColorModeProvider,
    CReset,
    CThemeProvider
} from '@chakra-ui/vue';

Vue.use(Chakra, {
    extendTheme: {},
    icons: {
        iconPack: 'fa',
        iconSet: {},
        extend: {
            // github: {
            //     path: '<path>...</path>',
            //     viewbox: '0 0 24 24'
            // }
        },
    },
});

Vue.config.productionTip = false;

new Vue({
    router,
    // render: (h) => h(App),
    render: (h) => h(CThemeProvider, [
        h(CColorModeProvider, [
            h(CReset),
            h(App),
        ]),
    ]),
}).$mount('#app');
