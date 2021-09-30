import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    // base: process.env.BASE_URL,
    routes: [{
        path: '/',
        redirect: 'inicio',
    }, {
        path: '/home',
        name: 'inicio',
        component: () => import(/* webpackChunkName: "MainLayout" */'./layouts/Main.vue'),
        children: [{
            path: '/app',
            component: () => import(/* webpackChunkName: "App" */'./App.vue'),
            meta: {
                title: 'Inicio',
            },
        }, {
            path: '/arbol',
            name: 'arbol',
            component: () => import(/* webpackChunkName: "Arbol" */'./views/Arbol.vue'),
            meta: {
                title: 'Árbol',
            }
        }]
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
