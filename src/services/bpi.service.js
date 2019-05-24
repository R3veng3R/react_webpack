import BaseService from "@/services/base.service";
import {ErrorWrapper} from "@/util/ErrorWrapper";

const SUPPORTED_CURRENCIES_API = '/api/supported-currencies.json';
const CURRENT_PRICE_API = '/api/currentprice/';
const CURRENT_HISTORY_API = '/api/historical/close.json';

class BpiService extends BaseService {

    getSupportedCurrencies() {
        return new Promise((resolve, reject) => {
            return this.request().get(SUPPORTED_CURRENCIES_API)
                .then(response => resolve(response.data))
                .catch(error => {
                    reject(new ErrorWrapper(error))
                });
        });
    }

    getCurrentPrice(code) {
        return this.request().get(CURRENT_PRICE_API + code + '.json');
    }

    getCurrentHistory(code) {
        return this.request().get(CURRENT_HISTORY_API + '?currency='+code+'&start=2019-05-01&end=2019-05-24');
    }

    getCurrentCurrencyData(code) {
        return new Promise((resolve, reject) => {
            return Promise.all([this.getCurrentPrice(code), this.getCurrentHistory(code)])
                .then(([priceResponse, historyResponse]) => {
                    let data = {
                        currentPrice: priceResponse,
                        history: historyResponse
                    };

                    return resolve(data);
                })
                .catch(error => {
                    reject(new ErrorWrapper(error))
                });
        });
    }
}

export default new BpiService();
