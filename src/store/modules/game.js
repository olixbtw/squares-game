import axios from 'axios';


const state = {
  //setup
  playerName: '',
  gameDifficulty: '',

  //parameters
  gameStarted: null,
  gameProgress: 0,
  gameBoard: [],

  //default settings
  gameSettings: {}
}

const mutations = {
  setupSettings: (state, settings) => state.gameSettings = settings,
  setDifficulty: (state, difficulty) => state.gameDifficulty = difficulty,
  setPlayer: (state, name) => state.playerName = name,

  setBoard: (state, newBoard) => state.gameBoard = newBoard,
  setMoveCount: (state, count) => state.gameProgress = count,
  setGameProcess: (state, progress) => {
    state.gameStarted = progress
    state.gameProgress = 0
  }
}
const actions = {
  async fetchSettings({ commit }) {
    const result = await axios
      .get('https://starnavi-frontend-test-task.herokuapp.com/game-settings');

    // const result = { data: require('../../data/game-settings.json') };

    commit('setupSettings', result.data)
    commit('setMessage', `Let's play the game!`)
  },

  generateBoard({ commit, state }) {
    let size = state.gameSettings[state.gameDifficulty].field;
    let field = [];
    for (let i = 0; i < size * size; i++) {
      field.push(i);
    }

    commit('setBoard', field);
  },

  resetBoard({ commit }) {
    commit('setDifficulty', '');
    commit('setBoard', []);
  },

  startGame({ commit, dispatch, state }, player) {
    if (player && player.length && state.gameDifficulty) {

      commit('setPlayer', player)
      commit('setGameProcess', true)
      dispatch('generateBoard')
      dispatch('setActiveCell')

      commit('setMessage', `Game started`)
    }
  },

  finishGame({ commit, dispatch }, winner) {
    commit('setGameProcess', false)
    dispatch('addScore', winner)

    commit('setMessage', `${winner} wins`)
  },

  setActiveCell({ commit, state, dispatch }) {
    if (state.gameStarted) {

      let board = [...state.gameBoard]
      let movesLeft = board.filter(e => typeof e === 'number');

      let movesWon = {
        player: board.filter(e => e === 'player').length,
        computer: board.filter(e => e === 'computer').length
      }

      let obviousWinner = board.length / movesWon.player <= 2 || board.length / movesWon.computer <= 2

      if (!movesLeft.length || obviousWinner) {
        let winner = movesWon.player > movesWon.computer
          ? state.playerName
          : 'Computer'
        dispatch('finishGame', winner)
      }
      else {
        let nextMove = Math.floor(Math.random() * movesLeft.length);
        board[movesLeft[nextMove]] = 'active';
        commit('setBoard', board);
      }
    }
  },

  makeMove({ commit, dispatch, state }, { cell, winner }) {
    let board = [...state.gameBoard]
    if (board[cell] === 'active') {
      board[cell] = winner
      commit('setBoard', board);
      dispatch('setActiveCell')
    }
  },

  setDifficulty: ({ commit, dispatch }, newDifficulty) => {
    commit('setDifficulty', newDifficulty)
    dispatch('generateBoard')
  }
}
const getters = {
  get_playerName: state => state.playerName,
  get_gameDifficulty: state => state.gameDifficulty,
  get_gameSettings: state => state.gameSettings,
  get_gameStatus: state => state.gameStarted,
  get_gameBoard: state => state.gameBoard,
  get_delay: state => state.gameSettings[state.gameDifficulty].delay
}

export default {
  state,
  mutations,
  actions,
  getters
};;
