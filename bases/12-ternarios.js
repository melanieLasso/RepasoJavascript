const activo = true;

let mensaje = {activo} ? 'Activo' : 'Inactivo';
let mensaje1 = {activo} ? 'Activo' : null;
let mensaje2 = activo && 'Activo';

console.log(mensaje);
console.log(mensaje1);
console.log(mensaje2);