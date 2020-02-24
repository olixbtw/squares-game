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
    ...mapActions(['startGame'])
  },
  components: { Square },
  computed: {
    ...mapGetters(['get_gameBoard', 'get_gameDifficulty'])
  },
  created() {
    //start only when player cicks
    this.startGame();
  }
};
</script>

<style lang="scss" scoped>
.game-board {
  margin: 50px auto;

  display: grid;
  grid-gap: 1px;
  width: 100%;
  grid-auto-columns: auto;
}

$width: 1fr;
.easyMode {
  //25
  grid-template-columns: repeat(5, $width);
}
.normalMode {
  //100
  grid-template-columns: repeat(10, $width);
}
.hardMode {
  //225
  grid-template-columns: repeat(15, $width);

  @media (max-width: 330px) {
    grid-template-columns: repeat(9, $width);
  }
}
</style>
