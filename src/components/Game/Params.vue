<template>
  <div>
    <div class="gameSetup">
      <select @change="selectMode">
        <option disabled hidden selected>{{ defaultModeMsg }}</option>
        <option v-for="(item, key) in get_gameSettings" :key="key" :value="key">
          {{ key.split(/[A-Z]/)[0].replace(/^\w/, c => c.toUpperCase()) }}
        </option>
      </select>
      <input type="text" placeholder="Enter your name" v-model="nameField" />
      <button @click="startGame(nameField)" v-if="!get_gameStatus" :disabled="buttonDisabled">
        Play <span v-if="!firstGame">Again</span>
      </button>
      <button @click="finishGame('Computer')" v-if="get_gameStatus">Finish Game</button>
    </div>

    <div class="message">
      {{ get_currentMessage }}
      <!--  -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Params',
  data: () => ({
    nameField: '',
    defaultModeMsg: 'Pick game mode'
  }),
  methods: {
    ...mapActions(['setDifficulty', 'startGame', 'finishGame']),
    selectMode(e) {
      this.setDifficulty(e.target.value);
    }
  },
  computed: {
    ...mapGetters([
      'get_gameSettings',
      'get_gameStatus',
      'get_currentMessage',
      'get_gameDifficulty'
    ]),
    buttonDisabled() {
      return this.get_gameDifficulty.length && this.nameField.length ? false : true;
    },
    firstGame() {
      return this.get_gameStatus === null ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/vars.scss';

.gameSetup {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: stretch;
  }

  select,
  input,
  button {
    margin: 3px 7px;
    border: 2px solid $col3;
    background: $col3;
    color: $col-main;
    padding: 10px;
    border-radius: 3px;
    transition: 0.2s all ease-in-out;

    &:focus {
      outline: none;
      border-color: $col2;
    }
  }
  input {
    background: $col4;
    border-color: $col4;
    color: $col1;
    &::placeholder {
      color: $col2;
    }
  }
  button {
    min-width: 175px;
    background: $col1;
    border-color: $col1;
    color: $col5;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      background: lighten($col1, 5%);
    }
    &:active {
      background: lighten($col1, 10%);
      border-color: lighten($col1, 5%);
    }
    &:disabled {
      border-color: $col3;
      background: $col3;
      color: $col1;
    }
  }
}

.message {
  margin: 25px 0;
  min-height: 1.2em;
  line-height: 1.2;
}
</style>
