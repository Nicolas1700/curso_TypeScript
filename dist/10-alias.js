"use strict";
(() => {
    let userId;
    /* El conjunto de tallas de camisa son:  */
    let shirtSize;
    shirtSize = 'S';
    // Pero p no esta en el conjunto de tallas de camisa
    shirtSize = 'XL';
    function greeTing(userId, shirtSize) {
        // Los guardianes o type of
        if (typeof userId === 'string') {
            console.log(`Es un string ${userId.toLowerCase()}`);
        }
    }
    greeTing(1, 'XL');
})();
