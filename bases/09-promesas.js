import { getHeroeById } from "../bases/08-importaciones-exportaciones";

import { getHeroeById } from "../bases/08-importaciones-exportaciones";

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(2);
            console.log(p1);
            if(p1){ //si ecuentra el heroe ejecuta el resolvem caso contrario reject
                resolve(p1); //Lo que se envie en el resolve(o al reject) se enviara al then
            }else{
            reject('No se pudo manejar el error'); //Este es el caso que la promesa devuelva un error
        }
            //resolve(); Si no se llama el resolve, nunca se ejecutara el then
        }, 2000);
    });
    
    // promesa.then( (heroe) => {
    //     console.log("Se ejecuta despues de la promesa");
    //     console.log(heroe);
    // })
    // .catch( err => console.warn(err) );
}

getHeroeByIdAsync(10)
    .then(console.log) // Una forma mas larga heroe => console.log('Heroe', heroe)
    .catch( console.warn) // err => console.warn(err)