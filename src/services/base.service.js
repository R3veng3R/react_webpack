import Http from '@/util/Http';

/*
 * Base service for all the services
 * request - Axios instance
 */
export default class BaseService {
    request() {
        return new Http();
    }
}
