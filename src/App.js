import React, { useEffect, useState }  from 'react';
import * as JsBarcode from 'jsbarcode'

import './App.css';

function App() {

    const [code, setCode] = useState("........");

  useEffect(() => {
    JsBarcode("#barcode", code);
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
        <label>
          BARCODE GENERATOR
        </label>
        <input type="text" placeholder="Enter code to generate" onChange={updateCode}/>
      </form>

      <svg id="barcode"></svg>
    </div>
  );
}

export default App;
