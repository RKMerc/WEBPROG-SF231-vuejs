<template>
    <div v-on:click="countClicks">
      <h2>{{ name }}</h2>  
      <p>{{ message }}</p>
      <p id="yellow">You have clicked me {{ clicks }} times.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Mango',
        message: 'I like mangoes',
        clicks: 0
      }
    },
    methods: {
      countClicks() {
        this.clicks++;
      }
    }
  }
  </script>
  
  <style>
    #yellow {
      font-weight: bold ;
      color: rgb(231, 217, 21);
    }
  </style>