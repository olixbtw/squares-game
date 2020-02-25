import Vue from 'vue';
import Vuex from 'vuex';

import game from './modules/game';
import score from './modules/score';
import messages from './modules/messages';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game,
    score,
    messages
  }
});
