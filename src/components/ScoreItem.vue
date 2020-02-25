<template>
  <div class="score_item">
    <span class="name">{{ winner }}</span>
    <span class="date">{{ date }}</span>
  </div>
</template>

<script>
export default {
  name: 'ScoreItem',
  props: { winner: String, date: String }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import '@/vars.scss';
.score_item {
  padding: 9px 15px;
  display: block;
  text-align: left;
  background: $col4;
  border-radius: 2px;
  color: $col1;
  margin-bottom: 3px;
  display: flex;
}
.name {
  margin-right: 20px;
}

.date {
  margin-left: auto;
  text-align: right;
}
</style>
