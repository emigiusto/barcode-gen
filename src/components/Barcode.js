import React, { useEffect}  from 'react';
import * as JsBarcode from 'jsbarcode'

function Barcode({type, code}) {

    useEffect(() => {
        switch (type) {
            case 'zonea':
                JsBarcode("#barcode", code, {
                    height: 100,
                    displayValue:false
                  });
            break;
     
             case 'zonef':
                JsBarcode("#barcode", code, {
                    height: 80,
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
        <svg id="barcode" className="mr-4"></svg>
    )
    
}

export default Barcode;