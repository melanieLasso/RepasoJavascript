//Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

//Para realizar una asignación desestructurante

const {} = persona // De esta forma extraigo los atributos del objeto persona
const {nombre, edad, clave} = persona //estos elementos se convierten en variables
console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ({nombre, edad, clave, rango = "capitán"}) => { //se puede hacer la desestructuración directamente 
    //console.log(nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        lating: {
            lat: 14.235.toExponential,
            lng: -12.53
        }    
    }
}

const { nombreClave, anios, lating: {lat, lng}} = retornaPersona(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
