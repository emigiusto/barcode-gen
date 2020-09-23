import React, { useEffect, useState }  from 'react';
import * as JsBarcode from 'jsbarcode'

import './App.css';

function App() {

    const [code, setCode] = useState("........");

  useEffect(() => {
    JsBarcode("#barcode", code, {
      height: 80,
      displayValue:false
    });
  },[code]);
  

  const updateCode = e => {
    if (e.target.value!=="") {
      setCode(e.target.value)
    }else{
      setCode("........")
    }
  };

  return (
    <div className="App">
      <form className="formBarcode">
        <label>BARCODE GENERATOR</label>
        <input type="text" placeholder="Enter code to generate" onChange={updateCode}/>
      </form>
      <div className="barcode-container">
        <div className="code-name-container">
            <h1>{code.substring(0, 2)}</h1>
            <h1>{code.substring(2, 4)}</h1>
            <h1>{code.substring(4, 6)}</h1>
        </div>
        

        <svg  id="barcode"></svg>
      </div>
      
    </div>
  );
}

export default App;
