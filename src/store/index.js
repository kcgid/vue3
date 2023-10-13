import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";

const store = createStore({
    state: {
        news: [],
        jobs: [],
        asks: [],
        user: {},
        item: [],
    },
    getters: {
        fetchedJobs(state){
            return state.jobs;
        },
        fetchedItem(state){
            return state.item;
        }
    },
    mutations,
    actions,
})

export default store;