
(() => {

  let productTitile = 'My amazing product ';
  productTitile = 'My amazing product change ';
  console.log('productTitile',productTitile);

  /* La comilla simple se puede relacionar con la doble
  por ejemplo se usan dobles al momento de utilizar las comillas
  simples de manera textual*/
  const productDescription = "B'la bla bla bla bla";
  console.log('productDescription',productDescription);


  let productPrice = 100;
  let typeDateProductoPrice = typeof productPrice;
  let isNew: boolean = false;

  const sumary = `
    title: ${productTitile}
    descripcion: ${productDescription}
    precio: ${productPrice}
    Tipo de dato del precio: ${typeDateProductoPrice}
    isNew: ${isNew}
  `;

  console.log(sumary);

})();
