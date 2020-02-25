
import axios from 'axios';


const state = { message: '' };

const mutations = {
  setMessage: (state, newMsg) => state.message = newMsg
};

const actions = {};

const getters = {
  get_currentMessage: state => state.message,
  get_messageActive: state => state.message.length ? true : false
};


export default {
  state,
  mutations,
  actions,
  getters
};
