//Funcion que no tiene problemas
function saludar(nombre){
    return `Hola, ${nombre}`;
}

//saludar = 30; //Esto no me da un error, aunque obviamente lo es

//Funcion como debe ser creada
const saludar1 = function(nombre){
    return `Hola, ${nombre}`;
}

//saludar1 = 30; //Esto si me retorna un error

//Funciones de flecha

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`; //Tienen como ventaja que se pueden simplificar
}

const saludar3 = (nombre) =>  `Hola, ${nombre}`; //Tienen como ventaja que se pueden simplificar
const saludar4 = () =>  `Hola mundo`; //Tienen como ventaja que se pueden simplificar

//Retornar un objeto

const getUser = () => ({
    uid: 'ABC123',
    username: 'Mel123'
});

//Tarea 
const getUsuarioActivo = ( nombre ) =>
    ({
        uid: 'ABC123',
        username: nombre
    });

 const UsuarioActivo = getUsuarioActivo('Melanie');
 console.log( UsuarioActivo); //Los arreglos son un tipo de objetos y en la documentacion aparecen como array.prototype y en el objeto encontramos la palabra _proto_