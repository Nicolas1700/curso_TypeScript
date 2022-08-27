
(() => {

  // Podemos delcara el tipo de dato null y undefined
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  /* Es util en el momento de usar algun framekor, que
  devuelven temporalmente null, y luego el tipo dedo que
  si sea necesario */
  let myNumber: number | null = null;
  myNumber = null;

  let myString: string | undefined = undefined;
  myString = undefined;

  // Primera foram de utilizar una posible variable con null
  function hi ( name: string | null) {
    let hello = 'hello ';
    if (name) {
      hello += name;
    }else {
      hello += 'nobody';
    }
    console.log(hello);
  }
  hi('Nicolas');
  hi(null);

  // Segunda foram de utilizar una posible variable con null
  // optional chaining
  function hiV2 ( name: string | null) {
    let hello = 'hello ';
    /* parte de optional chaining, con el signo ?,
    que este realiza una validacion si este es null o
    undefoned */
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }
  hiV2('Nicolas');
  hiV2(null);


})();
