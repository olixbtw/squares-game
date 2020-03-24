<template>
  <div class="game-board" v-bind:class="get_gameDifficulty">
    <Square
      v-bind:index="index"
      v-bind:status="status"
      v-for="(status, index) of get_gameBoard"
      :key="index"
    />
  </div>
</template>

<script>
import Square from '@/components/Game/Square.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Board',
  methods: {
    ...mapActions(['finishGame', 'resetBoard'])
  },
  components: { Square },
  computed: {
    ...mapGetters(['get_gameBoard', 'get_gameDifficulty', 'get_gameStatus'])
  },
  destroyed() {
    if (this.get_gameStatus) {
      this.resetBoard();
      this.finishGame('Computer');
    }
  }
};
</script>

<style lang="scss" scoped>
.game-board {
  margin: 25px auto;

  display: grid;
  grid-gap: 1px;
  width: 100%;
  grid-auto-columns: auto;
}

.easyMode {
  //25
  grid-template-columns: repeat(5, 1fr);
}
.normalMode {
  //100
  grid-template-columns: repeat(10, 1fr);
}
.hardMode {
  //225
  grid-template-columns: repeat(15, 1fr);

  @media (max-width: 330px) {
    grid-template-columns: repeat(9, 1fr);
  }
}
</style>
