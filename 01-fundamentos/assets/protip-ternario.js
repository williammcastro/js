
// const elMayor = (a, b) => {
//     return ( a > b ) ? a : b;
// }


//---Operador ternario verificando una condicion de dos primitivos
const elMayor = (a, b) =>  ( a > b ) ? a : b;

console.log(elMayor(5,9));

//--- Operador ternario verificando solo un primitivo
const tieneMembresia = ( miembro ) => ( miembro ) ? '2 dolares' : '10 dolares';

console.log( tieneMembresia(false) );

//---Operador ternario dentro de un arreglo
const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr Strange',
    amigo ? 'Thor' : 'Loki',
    (()=> 'Nick Fury')(),//Se puede invocar esta funcion anonima aqui
    elMayor(5,12)//tambien se puede invocar esta funcion explicitamente.
];

console.log(amigosArr);

//---Operador ternario con varias condiciones al tiempo

const nota = 91;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({nota, grado});