import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
    lastSearch: ""
}


let mutations = {

    SET_LAST_SEARCH(state, payload) {
        state.lastSearch = payload
    }
}


let store = new Vuex.Store({

    state,
    mutations
})


export default store