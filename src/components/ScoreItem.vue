<template>
  <div class="score_item">
    <span class="name">{{ name }}</span>
    <span class="date">{{ date_edited }}</span>
  </div>
</template>

<script>
export default {
  name: 'ScoreItem',
  props: { name: String, date: String },
  computed: {
    date_edited() {
      // unified output for date
      return this.date;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.score_item {
  padding: 7px 15px;
  display: block;
  text-align: left;
  background: #b0b3bd;
  color: #403f44;
  margin-bottom: 2px;
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
