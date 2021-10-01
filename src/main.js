import Vue from 'vue';
import Chakra, {
  // CColorModeProvider,
  CReset,
  CThemeProvider,
} from '@chakra-ui/vue';
import App from './App.vue';
import router from './Router';

// Vue.use(Chakra, {
//   extendTheme: {},
//   icons: {
//     iconPack: 'fa',
//     iconSet: {},
//     extend: {
//       // github: {
//       //     path: '<path>...</path>',
//       //     viewbox: '0 0 24 24'
//       // }
//     },
//   },
// });
Vue.use(Chakra);

Vue.config.productionTip = false;

new Vue({
  router,
  // render: (h) => h(App),
  render(h) {
    return h(CThemeProvider, [
      // h(CColorModeProvider, [
      h(CReset),
      h(App),
      // ]),
    ]);
  },
}).$mount('#app');
