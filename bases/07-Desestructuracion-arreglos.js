const personajes = ['Goku', 'Vegetta', 'Trunks'];

//Manera antigua de acceder a los elementos del arreglo
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

//Desectructuracion de arreglos

const [ personaje1 ] = personajes; //Esto me devolveria el primer personaje del arreglo
const [ , personaje2 ] = personajes; //De esta forma podria conseguir al segundo personaje del arreglo y asi sucesivamente
const [ p1, p2, p3 ] = personajes; //De esta forma podria guardar los valores del arreglo en una variable y estas se guardan en el orden que se encuentran en el arreglo

const retornaArreglo = () => {
    return ['ABC', 123];
}

//Desestructuracion para las variables de retorno en una funcion

const [ letras, numeros ] = retornaArreglo();

const useState = ( nombre ) => {
    return [ nombre, () => {`Hola ${nombre}`}]
}

const [nombre, getSaludo] = useState("Melanie"); // En este ejemplo la funcion nos esta devolviendo otra funcion
console.log(getSaludo()); //Al usar desestrucuturacion podemos ejecutar la funcion