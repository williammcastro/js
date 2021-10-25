

function crearPersona ( nombre, apellido ) {
    return {
        nombre: nombre,
        apellido: apellido,
    }
}

const crearPersona2 = ( nombre, apellido ) => {
    return {
        nombre,
        apellido,
    }
}

const crearPersona3 = ( nombre, apellido ) =>  ( { nombre, apellido } )

const persona = crearPersona3( 'William', 'More');

//console.log( persona );

///-----------------------------------


// function imprimeArgumentos(){
//     console.log( arguments );
// }

// const imprimeArgumentos2 = ( args ) =>{
//     console.log(args);
// }

// const imprimeArgumentos3 = ( ...args ) =>{
//     console.log(args);
// }

// const imprimeArgumentos4 = ( edad, ...args ) =>{
//     console.log({edad, args});
// }

// imprimeArgumentos(10, true, 'William', 'Hole');//Arguments(4) [10, true, 'William', 'Hole', callee: ƒ, Symbol(Symbol.iterator): ƒ]

// imprimeArgumentos2(10, true, 'William', 'Hole');// 10

// imprimeArgumentos3(10, true, 'William', 'Hole');//(4) [10, true, 'William', 'Hole']

// imprimeArgumentos4(10, true, 'William', 'Hole');//{edad: 10, args: Array(3)}


///-----------------------------------

const imprimeArgumentos = ( edad, ...args ) =>{
    //console.log({edad, args});
    return args;
}

const argumentos = imprimeArgumentos(10, true, 'William', 'Hole')
console.log( argumentos );//(3) [true, 'William', 'Hole']
//Recordar q edad no viene ahi por q habria q sacarlo aparte y como el //console.log({edad, args}); esta comentado, no viene edad

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos(10, true, false, 'William', 'Hole')
console.log( {casado, vivo, nombre, saludo} );//{casado: true, vivo: false, nombre: 'William', saludo: 'Hole'}

//---------------------------------------
//En este caso me importa el apellido y lo voy a extraer del objeto persona directamente asi:
const { apellido } = crearPersona('William ', 'Moreno');
console.log({ apellido });

//En este caso tambien me importa el apellido y lo voy a extraer del objeto persona directamente asi:
//Peeero quiero q se llame de diferente manera x q en mi app se llama de otra manera:
const { apellido: nuevoApellido } = crearPersona('William ', 'Moreno');
console.log({ nuevoApellido });

//--------------------------------------
//DESESTRUCTURACION DE OBJETOS LITERALES
//Forma tradicional

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    //edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'], 
};

const imprimePropiedades = (personaje) => {
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);
}

imprimePropiedades(tony);

//Ahora lo voy a desestructurar en forma PRO:

const imprimePropiedades2 = ({ nombre,  codeName, vivo, edad = 15, trajes}) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades2(tony);




