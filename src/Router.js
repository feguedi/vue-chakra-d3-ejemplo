import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "App" */'./views/Home.vue'),
    meta: {
      title: 'Inicio',
    },
  }, {
    path: '/arbol',
    name: 'arbol',
    component: () => import(/* webpackChunkName: "Arbol" */'./views/Arbol.vue'),
    meta: {
      title: 'Árbol',
    },
  }, {
    path: '*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "NotFound" */'./views/NotFound.vue'),
    meta: {
      title: 'No encontrado',
    },
  }],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | Vue + Chakra + D3` : 'Vue + Chakra + D3';
  next();
});

export default router;
