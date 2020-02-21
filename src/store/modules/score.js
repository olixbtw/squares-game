
import axios from 'axios';


const state = { scores: [] };

const mutations = {
  setScores: (state, scores) => state.scores = scores,
  addScore: (state, newScore) => state.scores = [...state.scores, newScore]
};

const actions = {
  async fetchScores({ commit }) {
    const result = await axios
      .get('https://starnavi-frontend-test-task.herokuapp.com/winners');

    commit('setScores', result.data);
  },

  async addScore({ commit }, winner) {
    const result = await axios.post(
      'https://starnavi-frontend-test-task.herokuapp.com/winners',
      { winner, date: `${new Date().toDateString()}` }
    );

    commit('addScore', result.data[result.data.length - 1])
  }
};

const getters = {
  scoreList: state => state.scores
};


export default {
  state,
  mutations,
  actions,
  getters
};
