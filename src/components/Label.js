import React from 'react';

function Label({type, code}) {

   switch (type) {
       case 'zonea':
            return (
                <div className="code-name-container big-label ml-4">
                    <h1>{code.substring(0, 2)}</h1>
                    <h1>{code.substring(2, 4)}</h1>
                    <h1>{code.substring(4, 6)}</h1>
                </div>
                );

        case 'zonef':
            return (
                <div className="code-name-container small-label ml-4">
                    <h1>{code.substring(0, 2)}</h1>
                    <h1>{code.substring(2, 4)}</h1>
                    <h1>{code.substring(4, 6)}</h1>
                </div>
            );

        case 'cart':
                return (
                    <div className="code-name-container small-label ml-4">
                        <h1>{code}</h1>
                    </div>
                );
   
       default:
                return (                    
                    <div className="code-name-container">
                        <h1>Incorrect code</h1>
                    </div>
                )
   }

    
}

export default Label;