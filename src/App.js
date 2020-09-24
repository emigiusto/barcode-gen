import React, { useEffect, useState }  from 'react';
import * as JsBarcode from 'jsbarcode'
import $ from 'jquery'
import * as html2canvas from 'html2canvas'

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
      setCode(e.target.value.toUpperCase())
    }else{
      setCode("........")
    }
  };

  var printDiv = (divName) =>{
      var element = $("#" + divName)[0];
        html2canvas(element).then(function (canvas) {
          var myImage = canvas.toDataURL("image/png");
          var tmp = window.open("");  
          
          $(tmp.document.body)
          .html("<img src=" + myImage + " alt=''>")
          .ready(function () {
              tmp.focus();
              tmp.print();
              tmp.close();
          })
          
        });
  }

  return (
    <div className="App">
      <form className="formBarcode">
        <label>BARCODE GENERATOR</label>
        <input type="text" placeholder="Enter code to generate" onChange={updateCode}/>
      </form>
      <div id="printableArea" className="barcode-container">
        <div className="code-name-container">
            <h1>{code.substring(0, 2)}</h1>
            <h1>{code.substring(2, 4)}</h1>
            <h1>{code.substring(4, 6)}</h1>
        </div>
        <svg  id="barcode"></svg>
      </div>

      <input type="button" onClick={()=> printDiv('printableArea')} value="Print barcode"/>
      <div id="GFG"></div>
      
    </div>
  );
}

export default App;
