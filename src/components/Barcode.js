import React, { useEffect}  from 'react';
import * as JsBarcode from 'jsbarcode'

function Barcode({type, code}) {

    useEffect(() => {
        console.log("running useeffect")
        switch (type) {
            case 'zonea':
                JsBarcode("#barcode", code, {
                    height: 90,
                    displayValue:false
                  });
            break;
     
             case 'zonef':
                JsBarcode("#barcode", code, {
                    height: 60,
                    displayValue:false
                  });
                break;
     
             case 'cart':
                JsBarcode("#barcode", code, {
                    height: 80,
                    displayValue:false
                  });
                  break;

            default:
                break;
        
      }},[code, type])


    return (                    
        <svg id="barcode"></svg>
    )
    
}

export default Barcode;