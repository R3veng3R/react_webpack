import axios from 'axios';

export default class Http {
    constructor() {
        this.instance = axios.create();
        return this.init();
    }

    init() {
        this.instance.interceptors.request.use(request => {
            return request;
        }, error => {return Promise.reject(error)});

        this.instance.interceptors.response.use(response => {
            return response;
        }), error => {return Promise.reject(error)};

        return this.instance;
    }
}