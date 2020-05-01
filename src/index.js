import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/routes/home/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
});