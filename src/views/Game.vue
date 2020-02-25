<template>
  <div class="game">
    <h1>Game</h1>
    <Params />
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
    ...mapActions(['fetchSettings'])
  },
  created() {
    this.fetchSettings();
  }
};
</script>
