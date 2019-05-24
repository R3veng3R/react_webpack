import BaseService from "@/services/base.service";
import {ErrorWrapper} from "@/util/ErrorWrapper";
import moment from 'moment';

const SUPPORTED_CURRENCIES_API = '/api/supported-currencies.json';
const CURRENT_PRICE_API = '/api/currentprice/';
const CURRENT_HISTORY_API = '/api/historical/close.json';
const DATE_FORMAT = 'YYYY-MM-DD';

/*
 * WE WRAP ALL OUR AXIOS REQUESTS IN ANOTHER PROMISE
 * TO PROCESS ALL THE ERRORS THAT COULD HAPPEN
 * WHEN FETCHING DATA AND HANDLE THEM CORRECTLY
*/
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

    getCurrentCurrencyData(code) {
        return new Promise((resolve, reject) => {
            return Promise.all([this.getCurrentPrice(code), this.getLastMonthHistory(code)])
                .then(([priceResponse, historyResponse]) => {
                    let priceData = priceResponse.data.bpi[code];
                    let historyData = historyResponse.data.bpi;

                    let currencyItem = {
                        code: code.toUpperCase(),
                        currentPrice: priceData.rate_float,
                        history: historyData
                    };

                    return resolve(currencyItem);
                })
                .catch(error => {
                    reject(new ErrorWrapper(error))
                });
        });
    }

    getCurrentPrice(code) {
        return this.request().get(CURRENT_PRICE_API + code + '.json');
    }

    getLastMonthHistory(code) {
        let startDate = moment()
                .subtract(1,'months')
                    .startOf('month')
                        .format(DATE_FORMAT);

        let endDate = moment()
                .subtract(1,'months')
                    .endOf('month')
                        .format(DATE_FORMAT);

        return this.request().get(CURRENT_HISTORY_API + '?currency=' + code + '&start=' + startDate + '&end=' + endDate);
    }
}

export default new BpiService();
