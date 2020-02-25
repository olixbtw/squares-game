<template>
  <div>
    <div class="gameSetup">
      <select @change="selectMode">
        <option v-for="(item, key) in get_gameSettings" :key="key" :value="key">
          {{ key }}
        </option>
      </select>
      <input type="text" placeholder="Enter your name" v-model="nameField" />
      <button @click="startGame(nameField)" v-if="firstGame">Play</button>
      <button @click="startGame(nameField)" v-if="!firstGame && !get_gameStatus">Play Again</button>
      <button @click="finishGame('Computer')" v-if="get_gameStatus">Finish Game</button>
    </div>

    <div class="message" :class:active="get_messageActive">
      {{ get_currentMessage }}
      <!--  -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Params',
  data: () => ({
    nameField: ''
  }),
  methods: {
    ...mapActions(['setDifficulty', 'startGame', 'finishGame']),
    selectMode(e) {
      this.setDifficulty(e.target.value);
    }
  },
  computed: {
    ...mapGetters([
      'get_gameSettings',
      'get_gameStatus',
      'get_messageActive',
      'get_currentMessage'
    ]),
    firstGame() {
      return this.get_gameStatus === null ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
.gameSetup {
  display: flex;
  justify-content: space-around;
}

button {
}

.message {
  margin: 25px 0;
  min-height: 1.2em;
  line-height: 1.2;
  .active {
    color: red;
    font-weight: bold;
  }
}
</style>
