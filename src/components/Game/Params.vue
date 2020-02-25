<template>
  <div>
    <div class="gameSetup">
      <select @change="selectMode">
        <option v-for="(item, key) in get_gameSettings" :key="key" :value="key">
          {{ key }}
        </option>
      </select>
      <input type="text" placeholder="Enter your name" v-model="nameField" />
      <button @click="handleClick">Start Game</button>
    </div>

    <div class="message">
      Message Here
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
    ...mapActions(['setDifficulty', 'startGame']),
    handleClick() {
      this.startGame(this.nameField);
    },
    selectMode(e) {
      this.setDifficulty(e.target.value);
    }
  },
  computed: mapGetters(['get_gameSettings'])
};
</script>

<style>
.gameSetup {
  margin-bottom: 30px;
}
</style>
