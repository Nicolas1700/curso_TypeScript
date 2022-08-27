
(() => {

  const login = (obj: { email: string, password:string } ) =>{
    console.log(obj.email,obj.password);
  }

  login({
    email: 'a@a.a',
    password: 'asasa163541'
  });

  type Sizes = 'M' | 'S' | 'L' | 'XL';

  const prodcts: any[] = [];

  const addProducts = ( data:{
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    prodcts.push(data);
  }

  // Agregamos 1 producto
  addProducts({
    title: 'product 1',
    createAt: new Date(),
    stock: 12,
  });
  // Agregamos 2 producto
  addProducts({
    title: 'product 2',
    createAt: new Date(),
    stock: 22,
    size: 'L'
  });

  console.log(prodcts);

})();
