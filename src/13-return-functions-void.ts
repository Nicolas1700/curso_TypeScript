(() => {

  /* Especificamos que vamos a retornar un tipo de dato numerico,
  en una funcion normal tambien se puede hacer lo mismo despues
  de los parametros */
  const calcTotal = ( precies: number[] ): string => {

    let total = 0;

    precies.forEach((item) => {
      total += item;
    });

    return total.toString();
  }

  // Con void, funcion sin retorno
  const printTotal = ( precies: number[] ): void => {
    const rta = calcTotal(precies);
    console.log(rta);
  }

  printTotal([1,2,6]);

})();
