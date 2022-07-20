import { createStore } from 'vuex'

export default createStore({
    state: {
        index: {}
    },
    getters: {

    },
    mutations: {
        setIndex(state, index) {
            state.index = index
        }
    },
    actions: {
        getIndex({state,commit}) {
            this.axios.get('/api/index').then(res => {
                commit('setIndex' ,[...state.index, ...res.data])
            })
        }
    }
})
