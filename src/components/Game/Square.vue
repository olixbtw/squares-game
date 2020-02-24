<template>
  <div class="game-square">
    <div class="square_content" @click="handleClick" v-bind:class="status" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Square',
  props: ['index', 'status'],
  methods: {
    ...mapActions(['makeMove']),
    handleClick(e, winner = 'player') {
      this.makeMove({ cell: this.index, winner });
    }
  },
  computed: {
    ...mapGetters(['get_delay'])
  },
  updated() {
    if (this.status === 'active')
      setTimeout(e => {
        this.handleClick(e, 'computer');
      }, this.get_delay);
  },
  created() {
    if (this.status === 'active')
      setTimeout(e => {
        this.handleClick(e, 'computer');
      }, this.get_delay);
  }
};
</script>

<style lang="scss" scoped>
.game-square {
  border: 1px solid rgb(153, 151, 150);
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
  position: relative;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
}

.active {
  background: rgb(83, 83, 190);
}

.player {
  background: rgb(62, 134, 13);
}

.computer {
  background: rgb(199, 71, 71);
}

.square_content {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
