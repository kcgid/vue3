import instance from './apiInterceptors.js';

class ApiService {
    fetchNewList() {
        return instance.get('/news/1.json');
    }

    fetchAskList() {
        return instance.get('/ask/1.json');
    }


    fetchJobsList() {
        return instance.get('/jobs/1.json');
    }

    fetchUserInfo(username) {
        return instance.get(`/user/${username}.json`);
    }

    fetchItemInfo(id) {
        return instance.get(`/item/${id}.json`);
    }
}

//싱글톤으로 관리됨
export default new ApiService();