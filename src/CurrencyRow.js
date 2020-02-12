import React, { useContext } from 'react';
import CurrencyContext from './context/exch_currency/currencyContext';

const CurrencyRow = ({ currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount }) => {

    const currencyContext = useContext(CurrencyContext);

   // const { currencyOptions, selectedCurrency, amount } = currencyContext;

    return (
        <div>
            <input type="number" className="input" value={amount || 0} onChange={onChangeAmount} /> 
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}                
            </select>     
        </div>
    )
}

export default CurrencyRow;
