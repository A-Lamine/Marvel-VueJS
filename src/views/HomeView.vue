<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <characteresCard msg="Welcome to Your Vue.js App"/>
      {{ info }}
  </div>
</template>

<script setup>
// @ is an alias to /src
import characteresCard from '@/components/characteresCard.vue'
import axios from "axios"
import { watch } from 'vue';

let myData = {}



console.log(myData)


</script>
