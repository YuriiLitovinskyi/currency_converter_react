import { GET_ALL_EXCH_CUR, GET_ONE_EXCH_CUR } from '../types';

export default (state, action) => {
    switch(action.type){
        case GET_ALL_EXCH_CUR:
            return {
                ...state,
                allCurrency: action.payload,
                currencyOptions: [action.payload.base, ...Object.keys(action.payload.rates)],
                fromCurrency: action.payload.base,
                toCurrency: Object.keys(action.payload.rates)[0],
                exchangeRate: action.payload.rates[Object.keys(action.payload.rates)[0]]

            };
        case GET_ONE_EXCH_CUR:
            return {
                ...state,
                oneCurrency: action.payload,
                exchangeRate: action.payload.rates[state.toCurrency]                
            }
        default:
            return state;
    }
}

// const firstCurrency = Object.keys(data.rates)[0];
//         setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
//         setFromCurrency(data.base);
//         setToCurrency(firstCurrency);
//         setExchangeRate(data.rates[firstCurrency])

//.then(data => setExchangeRate(data.rates[toCurrency]))