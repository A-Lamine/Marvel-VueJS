<template>
    <div class="charactere">
        <img class="marvel" :src="path + '.' + extension" v-on:click="hello" />
        <button v-if="isFav.length !== 0" v-on:click="click">
            <ion-icon name="heart" size="large" style="color: red" />
        </button>
        <button v-else v-on:click="click">
            <ion-icon name="heart-outline" size="large" style="color: red" />
        </button>
        <h1>{{ name }}</h1>
    </div>
</template>

//MyJs Script

<script setup>
import { defineProps, ref, toRef, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const charactere2 = defineProps({ charactere: Object })

let charactere = toRef(charactere2, 'charactere')

let {
    id,
    name,
    thumbnail: { path, extension },
} = charactere.value

let isFav = computed(() => store.getters.isfav.filter(favItem => favItem.item.id === id))

const hello = async () => {
    console.log('hello')
}

const click = async () => {
    await store.commit('AddorRemove', {
        item: charactere.value,
    })
}
</script>

//MyStyleTemplate

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
    cursor: pointer;
    transition: 6ms;
}
.marvel:hover {
    width: 150%;
    height: 400px;
    position: relative;
}
button {
    background-color: white;
    border: none;
    cursor: pointer;
}
</style>
