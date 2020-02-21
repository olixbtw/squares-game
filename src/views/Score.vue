<template>
  <div class="score">
    <h1>Scores</h1>
    <div class="scores" v-if="scoreList.length">
      <ScoreItem :name="item.winner" :date="item.date" v-for="item of scoreList" :key="item.id" />
    </div>
  </div>
</template>

<script>
import ScoreItem from '@/components/ScoreItem.vue';
// import { mapGetters } from 'vuex';

import axios from 'axios';

export default {
  name: 'Score',
  components: {
    ScoreItem
  },
  // computed: mapGetters(['allScores']),

  data: () => ({
    scoreList: [],
    err: []
  }),
  created() {
    axios
      .get('https://starnavi-frontend-test-task.herokuapp.com/winners')
      .then((res) => this.scoreList.unshift(...res.data))
      .catch((err) => this.err.push(err));
  }
};
</script>
