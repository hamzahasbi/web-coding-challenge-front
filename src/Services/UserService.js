import axios from 'axios';

class UserService {

    static getUserToken(userObject) {

        return axios.post("http://localhost:80/api/login_check", userObject);
    }

    static getShops(token, likedLayout = false) {
        const options = {
            'headers' : {'Authorization': 'Bearer ' + token}
        }
        const endPoint = "http://localhost:80" + (likedLayout ? '/api/shops/liked' : '/api/shops');
        return axios.get(endPoint, options);
    }  

    static postLikeShop(token, shopId) {
        const options = {
            'header' : {'headers' : {'Authorization': 'Bearer ' + token}},
            'data'   : {'shop' : shopId}
        }
        return axios.post("http://localhost:80/api/shops/likes", options.data, options.header);
    }  

    static postAccountCreation(userData) {
        return axios.post("http://localhost:80/api/sign_up", userData);
    }

    static disconnectUser(status) {
        if (parseInt(status) === 401) localStorage.removeItem('token');
    }

}

export default UserService;