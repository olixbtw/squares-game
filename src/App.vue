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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

$navfix: 20px;
#nav {
  position: fixed;
  top: 0 - $navfix;
  left: 0;
  width: 100%;
  padding: 5px 0;
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
  max-width: 600px;
  margin: $navfix auto 0;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0 15px;
  }
}
</style>
