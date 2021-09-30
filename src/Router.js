import { createRouter, createWebHistory } from 'vue-router';

const routes = [{
    path: '/',
    name: 'inicio',
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
    },
}, {
    path: '*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "NotFound" */'./views/NotFound.vue'),
    meta: {
        title: 'No encontrado',
    },
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? `${to.meta.title} | Vue + Chakra + D3` : 'Vue + Chakra + D3';
    next();
});

export default router;
