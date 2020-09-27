import React, {useState }  from 'react';
import $ from 'jquery'
import * as html2canvas from 'html2canvas'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

//Components
import Label from './components/Label'
import Barcode from './components/Barcode'

import './App.css';

function App() {

    const [code, setCode] = useState("XXXXXX");
    const [labelType, setLabelType] = useState("zonea");

  
  

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

  var handleLabelType = (event) =>{
    setLabelType(event.target.value)
  }

  return (
    <div className="App">
      <form className="formBarcode">
        <label className="main-title">BARCODE GENERATOR</label>
        <input type="text" placeholder="Enter code to generate" onChange={updateCode}/>

        <label className="title-labeltype">
          Label tipe:
          <select value={labelType} onChange={handleLabelType}>
            <option value="zonea">Zone A/B/C</option>
            <option value="zonef">Zone F-G</option>
            <option value="cart">Cart Label</option>
          </select>
        </label>
      </form>


      <div id="printableArea" className="barcode-container">
            <Label type={labelType} code={code}/>
            <Barcode type={labelType} code={code}/>
      </div>
    
      <Button variant="primary" size="lg" onClick={()=> printDiv('printableArea')}>Print barcode</Button>{' '}
    </div>
  );
}

export default App;
