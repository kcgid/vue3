import ApiService from '@/api/index.js';

export default {
    FETCH_NEWS(context) {
        ApiService.fetchNewList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_NEWS', response.data);
        })
        .catch( error => {
          console.log(error);
        })
    },
    FETCH_JOBS({commit}) {
        ApiService.fetchJobsList()
        .then( ({data}) => {
            console.log(data);
            commit('SET_JOBS', data);
        })
        .catch( error => {
          console.log(error);
        })
    },
    FETCH_ASKS({commit}) {
        ApiService.fetchAskList()
            .then( ({data}) => {
                console.log(data);
                commit('SET_ASKS', data);
            })
            .catch( error => {
                console.log(error);
            })
    },
    FETCH_USER({commit}, name) {
        ApiService.fetchUserInfo(name)
            .then( ({data}) => {
                console.log(data);
                commit('SET_USER', data);
            })
            .catch( error => {
                console.log(error);
            })
    },
    FETCH_ITEM({commit}, id) {
        ApiService.fetchItemInfo(id)
            .then( ({data}) => {
                console.log(data);
                commit('SET_ITEM', data);
            })
            .catch( error => {
                console.log(error);
            })
    }
}
