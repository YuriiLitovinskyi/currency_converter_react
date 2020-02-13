import React, { useEffect, useState, useContext } from 'react';

import './App.css';
import CurrencyRow from './CurrencyRow';
import CurrencyContext from './context/exch_currency/currencyContext';

//const BASE_URL = 'https://api.exchangeratesapi.io/latest';   //https://exchangeratesapi.io/

const App = () => {

  const currencyContext = useContext(CurrencyContext);

  const { allCurrency,
          currencyOptions,
          //fromCurrency,
          //toCurrency,
          exchangeRate,
         // amount,
         // amountInFromCurrency, 
          loadAllCurrency, 
          loadOneCurrency} = currencyContext;        

  // const [currencyOptions, setCurrencyOptions] = useState([]);
   const [fromCurrency, setFromCurrency] = useState();
   const [toCurrency, setToCurrency] = useState();
  // const [exchangeRate, setExchangeRate] = useState();
   const [amount, setAmount] = useState(1);
   const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  // console.log(currencyOptions);
  // console.log(exchangeRate);
  console.log(fromCurrency);

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    loadAllCurrency()
      .then(() => {
        if (allCurrency !== undefined && allCurrency !== null) {
          setFromCurrency(allCurrency.base);
          //setToCurrency(Object.keys(allCurrency.rates)[0]);
        }
      })
    //if (allCurrency) {
      //setFromCurrency(allCurrency.base);
      //setToCurrency(Object.keys(allCurrency.rates)[0]);
   // }    
    //eslint-disable-next-line 
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      loadOneCurrency();     
    }   
    //eslint-disable-next-line 
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }


  // const loadExchangeCurrency = async () => {
  //   const res = await fetch(BASE_URL)
  //   const data = await res.json();
  //   console.log(data);
  //   return data;
  // }

  // const loadOneExchangeCurrency = async () => {
  //   const res = await fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
  //   const data = await res.json();
  //   console.log(data);
  //   return data;
  // }

  return (
    
      <div className="App">
        <h1>Convert</h1> 
        <CurrencyRow 
          currencyOptions={currencyOptions} 
          selectedCurrency={fromCurrency}
          onChangeCurrency={e => setFromCurrency(e.target.value) }
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
        />
        <div className="equals">=</div>
        <CurrencyRow 
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={e => setToCurrency(e.target.value) }
          amount={toAmount}
          onChangeAmount={handleToAmountChange}
        />     
      </div>
   
  );
}

export default App;
