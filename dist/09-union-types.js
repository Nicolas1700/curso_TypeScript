"use strict";
(() => {
    let userId;
    userId = 132;
    userId = 'algo';
    function greeTing(myText) {
        // Los guardianes o type of
        if (typeof myText === 'string') {
            console.log(`Es un string ${myText.toLowerCase()}`);
        }
        else {
            console.log(`Es un string ${myText.toFixed(1)}`);
        }
    }
    greeTing('Hola');
    greeTing(12.36);
})();