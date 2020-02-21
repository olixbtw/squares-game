
import axios from 'axios';


const state = [
  { id: 1, winner: 'Alex', date: 'today' },
  { id: 2, winner: 'Max', date: 'yesterday' },
  { id: 3, winner: 'Alexios', date: 'today' }
];

const mutations = {
  addItems: (state, item) => state.unshift(...item)
};

const actions = {

};
const getters = {
  allScores: (state) => [...state]
};


export default {
  state,
  mutations,
  actions,
  getters
};
