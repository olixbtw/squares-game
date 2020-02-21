<template>
  <div class="game">
    <h1>Game here</h1>
    <Params />
    <Board />
  </div>
</template>

<script>
// @ is an alias to /src
import Params from '@/components/Game/Params.vue';
import Board from '@/components/Game/Board.vue';

export default {
  name: 'Game',
  components: {
    Params,
    Board
  }
};
</script>
