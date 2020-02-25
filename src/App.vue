<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <router-link to="/">Game</router-link> |
        <router-link to="/score">Scores</router-link>
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/vars.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $col-main;
  font-size: 20px;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#nav {
  padding: 10px 0;
}

#nav a {
  font-weight: bold;
  color: $col-main;
}

#nav a.router-link-exact-active {
  color: $col-green;
}

h1 {
  margin: 25px 0;
}

.container {
  width: 90%;
  max-width: 600px;
  margin: 0 auto 0;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0 15px;
  }
}
</style>
