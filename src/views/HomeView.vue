<template>
    <div class="wrap">
        <div class="panel">
            <div class="characteres" v-for="items in myData" :key="items.id">
                <CharacteresCard :charactere="items" />
            </div>
        </div>
    </div>
</template>

<script setup>
// @ is an alias to /src
import characteresCard from '@/components/characteresCard.vue'
import axios from 'axios'
import { watch, ref, onBeforeMount } from 'vue'
import MD5 from 'md5'
import CharacteresCard from '../components/characteresCard.vue'

const { VUE_APP_PUBLIC_KEY, VUE_APP_PRIVATE_KEY, VUE_APP_API_BACKEND } = process.env
const ts = new Date().getTime()
const stringToHash = ts + VUE_APP_PRIVATE_KEY + VUE_APP_PUBLIC_KEY
const hash = MD5(stringToHash).toString()

let myData = ref({})

let page = 0
const url =
    VUE_APP_API_BACKEND +
    '?' +
    'ts=' +
    ts +
    '&apikey=' +
    VUE_APP_PUBLIC_KEY +
    '&hash=' +
    hash +
    '&limit=99&offset=' +
    page

watch(myData, (currentValue, oldValue) => {})

const callApi = async () => {
    await axios.get(url).then(response => (myData.value = response.data.data.results))
}

onBeforeMount(callApi())
</script>
<style>
.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.panel {
    display: flex;
    flex-direction: row;
    width: 80%;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}
.characteres {
    width: 20%;
    height: auto;
}
</style>
