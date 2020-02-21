<template>
  <div>
    <div class="gameSetup">
      <select v-model="gameMode">
        <option v-for="(item, key) in settings" :key="key" :value="key">
          {{ key }}
        </option>
      </select>
      <input
        type="text"
        placeholder="Enter your name"
        v-model="currentPlayer"
        :selected="gameMode"
      />
      <button @click="startGame">Start Game</button>
    </div>

    <div class="message">
      Message Here
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Params',
  data: () => ({
    currentPlayer: '',
    gameMode: '',
    settings: {},
    err: []
  }),
  methods: {
    startGame() {
      let { field, delay } = this.settings[this.gameMode];

      if (this.currentPlayer && currentPlayer.length) {
        this.$emit('clicked', this.settings[this.gameMode]);
        this.currentPlayer = '';
      }
    }
  },
  created() {
    axios
      .get('https://starnavi-frontend-test-task.herokuapp.com/game-settings')
      .then(res => {
        this.settings = res.data;
        this.gameMode = [...Object.keys(this.settings)][0];
        return res;
      })
      .catch(error => err.push(error));
  }
};
</script>

<style></style>
