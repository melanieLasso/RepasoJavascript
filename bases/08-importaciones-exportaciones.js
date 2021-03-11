// import heroes from './data/heroes'; Importacion cuando esta con default
// import heroes , {owners} from './data/heroes'; Importacion cuando el primero es por default y el segundo no
// import { heroes, owners } from './data/heroes'; Importar varios arreglos en el mismo export

import { heroes } from "../data/heroes"; //ctrl + tab para importar automaticamente

export const getHeroeById = (id) => {
    return heroes.find((heroe) => {
        return heroe.id === id;
    });
}

//La funcion mucha mas resumida

// const getHeroeById1 = id => heroes.find((heroe) => heroe.id === id );

console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => {
        heroe.owner === owner;
    })
}

console.log(getHeroesByOwner("DC"));