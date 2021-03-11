const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45, 
    direccion: {
        ciudad: 'New York',
        Zip: 55321321,
        lat: 34.9233321, /*Poner una coma al final es una buena practica*/
    }
};

console.log( persona );
console.log( persona.nombre );
console.log( persona.apellido );
console.log( persona.edad );

// De esta forma se pueden ver mejor los atributos del objeto
console.table(persona);

//Crea una copia de la referencia por lo cual si cambiamos algo en persona2 tambien se cambiara en persona
const persona2 = persona;
console.log(persona2);

//Crea una copia del objeto
const persona3 = {...persona};
console.log(persona3);