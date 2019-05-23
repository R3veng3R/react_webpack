import BaseService from "@/services/base.service";
import {ErrorWrapper} from "@/util/ErrorWrapper";

const SUPPORTED_CURRENCIES_API = '/api/supported-currencies.json';

class BpiService extends BaseService {

    getSupportedCurrencies() {
        return new Promise((resolve, reject) => {
            return this.request().get(SUPPORTED_CURRENCIES_API)
                .then( response => resolve(response.data))
                .catch(error => {reject(new ErrorWrapper(error))});
        });
    }
}

export default new BpiService();
