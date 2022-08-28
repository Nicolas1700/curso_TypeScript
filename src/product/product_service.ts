// Los metodos para incluir o operar los datos

/* Importamos los tipos o modelo de datos para que
funcione */

import { product } from './product_model';

export const products: product[] = [];

export const addProducts = ( data: product ) => {
  products.push(data);
}

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });
  return total;
};

