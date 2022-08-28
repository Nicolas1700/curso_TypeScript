
/* Se importan las funciones creadas en product.service.ts
para darles uso e imprimir resultados de sus usos*/
import { addProducts, products, calcStock } from './product_service';

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

// Agregamos 3 producto
addProducts({
  title: 'product 3',
  createAt: new Date(),
  stock: 44,
  size: 'XL'
});

console.log(products);

const total = calcStock();
console.log(total);
