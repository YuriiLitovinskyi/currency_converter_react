import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CurrencyState from './context/exch_currency/currencyState';

ReactDOM.render(<CurrencyState><App /></CurrencyState>, document.getElementById('root'));

