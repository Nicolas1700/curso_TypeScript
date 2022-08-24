"use strict";
(() => {
    let isEnable = true;
    isEnable = false;
    let isNew = false;
    console.log('isNew', isNew);
    isNew = true;
    console.log('isNew', isNew);
    const ramdom = Math.random();
    console.log('ramdom', ramdom);
    // Tambien el resultado debe ser booleano
    isNew = ramdom >= 0.5 ? true : false;
    console.log('ramdom', isNew);
})();
