
(() => {

  let isEnable = true;

  isEnable = false;

  let isNew: boolean = false;
  console.log('isNew',isNew);
  isNew = true;
  console.log('isNew',isNew);

  const ramdom = Math.random();
  // Tambien el resultado debe ser booleano
  console.log(`Ek valor ramdom es: ${ramdom}`);
  isNew = ramdom >= 0.5 ? true : false ;
  console.log('ramdom: ',isNew);

})();
