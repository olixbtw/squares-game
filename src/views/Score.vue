<template>
  <div class="score">
    <h1>Scores</h1>
    <div class="scores" v-if="scoreList.length">
      <ScoreItem v-bind="item" v-for="item of scoreList" :key="item.id" />
    </div>
  </div>
</template>

<script>
import ScoreItem from '@/components/ScoreItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Score',
  components: {
    ScoreItem
  },
  computed: mapGetters(['scoreList']),
  methods: {
    ...mapActions(['fetchScores'])
  },

  created() {
    this.fetchScores();
  }
};
</script>
