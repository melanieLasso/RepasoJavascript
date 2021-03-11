const arreglo = [1,2,3,4];
console.log(arreglo);

arreglo.push(1); //Es mejor no utilizar push porque modifica el objeto directamente

let arregloCopia = [...arreglo, 5];

console.log(arreglo);
console.log(arregloCopia);

//Multplicar los valores del arreglo por 2

const arreglo2 = arregloCopia.map( function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arregloCopia);
console.log(arreglo2);