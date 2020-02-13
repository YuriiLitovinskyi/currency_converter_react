import React, { useReducer } from 'react';
import CurrencyContext from './currencyContext';
import CurrencyReducer from './currencyReducer';
import { GET_ALL_EXCH_CUR, GET_ONE_EXCH_CUR } from '../types';

const BASE_URL = 'https://api.exchangeratesapi.io/latest';   //https://exchangeratesapi.io/

const CurrencyState = props => {
    const initialState = {
        allCurrency: {},
        oneCurrency: {},

        currencyOptions: [],
        fromCurrency: null,
        toCurrency: null,
        exchangeRate: null,
        amount: 1,
        amountInFromCurrency: true
    }


const [state, dispatch] = useReducer(CurrencyReducer, initialState);

const loadAllCurrency = async () => {
    const res = await fetch(BASE_URL)
    const data = await res.json();
    console.log(data);
    
    dispatch({
        type: GET_ALL_EXCH_CUR,
        payload: data
    });

    return data;
};

const loadOneCurrency = async (fromCurrency, toCurrency) => {
    const res = await fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
    const data = await res.json();
    console.log(data);

    dispatch({
        type: GET_ONE_EXCH_CUR,
        payload: data
    })
};

return <CurrencyContext.Provider
            value={{
                allCurrency: state.allCurrency,
                currencyOptions: state.currencyOptions,
                fromCurrency: state.fromCurrency,
                toCurrency: state.toCurrency,
                exchangeRate: state.exchangeRate,
                amount: state.amount,
                amountInFromCurrency: state.amountInFromCurrency,
                loadAllCurrency,
                loadOneCurrency
            }}
        >{props.children}
        </CurrencyContext.Provider>

}

export default CurrencyState;