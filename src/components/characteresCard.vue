<template>
    <div class="charactere">
        <img class="marvel" :src="path + '.' + extension" />
        <h1>{{ name }}</h1>
    </div>
</template>

<script setup>
import { defineProps, toRef } from 'vue'

const charactere2 = defineProps({ charactere: Object })

let charactere = toRef(charactere2, 'charactere')
let {
    name,
    thumbnail: { path, extension },
} = charactere.value
</script>

<style scoped>
.charactere {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
}
h1 {
    color: #242f9b;
}
.marvel {
    width: 100%;
    height: 350px;
    border-radius: 5%;
}
</style>
