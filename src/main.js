import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
    state() {
        return {
            isfav: false,
        }
    },
    getters: {
        isfav(state) {
            return state.isfav
        },
    },
    mutations: {
        loadStore() {
            if (localStorage.getItem('store')) {
                try {
                    this.replaceState(JSON.parse(localStorage.getItem('store')))
                } catch (e) {
                    console.log('Could not initialize store', e)
                }
            }
        },
        click(state) {
            console.log('Hey')
            /* state.isfav ? (state.isfav = false) : (state.isfav = true) */
        },
    },
})

createApp(App).use(router).use(store).mount('#app')
