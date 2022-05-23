<template>
    <div class="charactere">
        <img class="marvel" :src="path + '.' + extension" />
        <button v-if="store.getters.isfav" v-on:click="click">
            <ion-icon
                v-on:click="console.log('hey')"
                name="heart"
                size="large"
                style="color: red"
            />
        </button>
        <button v-else v-on:click="click">
            <ion-icon name="heart-outline" size="large" style="color: red" />
        </button>
        <h1>{{ name }}</h1>
    </div>
</template>

<script setup>
import { defineProps, toRef } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const charactere2 = defineProps({ charactere: Object })
store.commit('loadStore')

let charactere = toRef(charactere2, 'charactere')
let {
    name,
    thumbnail: { path, extension },
} = charactere.value

const click = async () => {
    store.commit('click')
}
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
button {
    background-color: white;
    border: none;
    cursor: pointer;
}
</style>
