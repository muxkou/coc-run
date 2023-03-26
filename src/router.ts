import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import KpView from './views/kp/kp.view.vue';
import PlaygroundView from './views/playground/playground.view.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/kp'
  },
  {
    path: '/kp',
    component: KpView
  },
  {
    path: '/go',
    component: PlaygroundView
  }
];

const router =  createRouter({
  history: createWebHistory(),
  routes
});

export default router;
