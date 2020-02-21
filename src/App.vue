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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
