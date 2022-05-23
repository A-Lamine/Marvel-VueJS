<template>
    <div class="characteres">
        <ul>
            <li v-for="items in myData" :key="items.id">
                <p>{{ items.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
// @ is an alias to /src
import characteresCard from '@/components/characteresCard.vue'
import axios from 'axios'
import { watch, ref, onBeforeMount } from 'vue'
import MD5 from 'md5'

const { VUE_APP_PUBLIC_KEY, VUE_APP_PRIVATE_KEY, VUE_APP_API_BACKEND } = process.env
const ts = new Date().getTime()
const stringToHash = ts + VUE_APP_PRIVATE_KEY + VUE_APP_PUBLIC_KEY
const hash = MD5(stringToHash).toString()

let myData = ref({})
let test = [
    {
        id: 1,
        action: 'aze',
    },
    {
        id: 2,
        action: 'action',
    },
]

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
