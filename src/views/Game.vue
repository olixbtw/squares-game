<template>
  <div class="game">
    <h1>Game</h1>
    <Params @clicked="gameStart" />
    <Board />
  </div>
</template>

<script>
// @ is an alias to /src
import Params from '@/components/Game/Params.vue';
import Board from '@/components/Game/Board.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Game',
  components: {
    Params,
    Board
  },
  methods: {
    ...mapActions(['fetchSettings']),
    gameStart(val) {
      //all game start logic
      console.log(val);
    }
  },
  created() {
    this.fetchSettings();
  }
};
</script>
