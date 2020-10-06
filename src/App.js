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

  var printDiv = (divName, labelType) =>{
    var finalWidth;
    switch (labelType) {
      case 'zonea':
          finalWidth = 680
        break;

      case 'zonef':
          finalWidth = 400
        break;
    
      default:
          finalWidth = 680
        break;
    }
    

    var w = 1000;
    var h = 1000;
    var div = document.querySelector('#' + divName);
    var canvas = document.createElement('canvas');
    canvas.width = w*2;
    canvas.height = h*2;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    var context = canvas.getContext('2d');
    context.scale(2,2);
    html2canvas(div, { canvas: canvas }).then(function(canvas) {
        var myImage = canvas.toDataURL("image/png");
        var tmp = window.open("");  
        
        $(tmp.document.body)
        .html("<img src=" + myImage + " alt='' style=width:"+ finalWidth +"px>")
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
        <input type="text" placeholder="Enter location code" onChange={updateCode}/>

        <label className="title-labeltype mx-auto my-4">
          Label type:
          <select className="ml-2" value={labelType} onChange={handleLabelType}>
            <option value="zonea">Zone A/B/C/D</option>
            <option value="zonef">Zone F-G</option>
            <option value="cart">Cart</option>
          </select>
        </label>
      </form>

      <div className="border-div">
          <div id="printableArea" className="barcode-container">
                <Label type={labelType} code={code}/>
                <Barcode type={labelType} code={code}/>
          </div>
      </div>
      
    
      <Button className="mx-auto my-4" variant="primary" size="lg" onClick={()=> printDiv('printableArea',labelType)}>Print barcode</Button>{' '}
    
      <h2 className="madeby">Made by Emiliano Giusto</h2>
    </div>
  );
}

export default App;
