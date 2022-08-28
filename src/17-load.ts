
/* Esta es la forma de usarlo desde la
documentacion, asi que lo transformamos a
una forma que sea legible para TypeScript */
// var _ = require('lodash');
// Forma legible para TypeScript
import _ from 'lodash';

const data = [
  {
    username: 'Nicolas',
    role: 'admin'
  },
  {
    username: 'Pedro',
    role: 'seller'
  },
  {
    username: 'Laura',
    role: 'seller'
  },
  {
    username: 'Luis',
    role: 'customer'
  },
]

// Esta funcion nos permite agrupar por lo que le indiquemos
const rta = _.groupBy(data, (item) => item.role);
console.log(rta);


