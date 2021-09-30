import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';
import Chakra, {
    CColorModeProvider,
    CReset,
    CThemeProvider
} from '@chakra-ui/vue';

createApp({
    // render: (h) => h(App),
    render: (h) => h(CThemeProvider, [
        h(CColorModeProvider, [
            h(CReset),
            h(App),
        ]),
    ]),
}).use(router).use(Chakra, {
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
}).$mount('#app');
