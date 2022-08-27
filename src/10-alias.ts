
(() => {

  /*  Creando nustro propio tipo, y
  se utiliza pascal case.
  */
  type UserID = string | number | boolean;
  let userId: UserID;

  // Literal types
  type Size  =  'M' | 'S' | ' L' | 'XL' ;
  /* El conjunto de tallas de camisa son:  */
  let shirtSize: Size;
  shirtSize = 'S';
  // Pero p no esta en el conjunto de tallas de camisa
  shirtSize = 'XL';


  function greeTing (userId: UserID, shirtSize: Size) {
    // Los guardianes o type of
    if (typeof userId === 'string') {
      console.log(`Es un string ${userId.toLowerCase()}`);
    }
  }

  greeTing(1,'XL');

})();
