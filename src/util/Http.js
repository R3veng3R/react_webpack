import axios from 'axios';

export default class Http {
    constructor() {
        this.instance = axios.create();
        return this.init();
    }

    init() {
        this.instance.interceptors.request.use(request => {
            // request.headers['Access-Control-Allow-Origin'] = '*';
            return request;
        }, error => {return Promise.reject(error)});

        this.instance.interceptors.response.use(response => {
            // response.headers['Access-Control-Allow-Origin'] = '*';
            return response;
        }), error => {return Promise.reject(error)};

        return this.instance;
    }
}
