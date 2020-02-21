import Vue from 'vue';
import VueRouter from 'vue-router';

import Game from '../views/Game.vue';
import Score from '../views/Score.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Game',
    component: Game
  },
  {
    path: '/score',
    name: 'Score',
    component: Score
  }
];

const router = new VueRouter({
  routes
});

export default router;
