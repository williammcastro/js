///------------------------
//PASO POR VALOR
let a = 10;
let b = a;

console.log({a, b});
a = 30;
console.log({a, b});

///------------------------
console.log('ejemplo 2 ---------------------')
//PASO POR REFERENCIA


let juan = {nombre: 'Juan'};
let ana = { juan };
ana.nombre = 'Ana';

console.log({juan, ana});

//---COMO SE CORRIGE:

let juan2 = {nombre: 'Juan2'};
let ana2 = { ...juan2 };
ana2.nombre = 'Ana2';

console.log({juan2, ana2});




//EJEMPLO DESLIGANDO EL PASO POR REFERENCIA CON SPREAD O .slice()

console.log('ejemplo 2 ---------------------')

const cambiaNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona
}

// Ejemplo sin usar el operador spread, hace paso por referencia
let peter = { nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});


//----COMO SOLUCIONO: Primera forma: usando el operador spread cuando invoco la funcion

const cambiaNombre2 = ( persona2 ) => {
    persona2.nombre = 'Tony2';
    return persona2
}

// Ejemplo usando el operador spread, NO hace paso por referencia, se rompe la referencia!!!

let peter2 = { nombre: 'Peter2'};
let tony2 = cambiaNombre2({ ...peter2 });

console.log({peter2, tony2});

//---COMO SOLUCIONO: Segunda forma: usando el spread cuando recibe el paramentro en la funcion

const cambiaNombre3 = ( { ...persona3 } ) => {
    persona3.nombre = 'Tony3';
    return persona3
}

// Ejemplo usando el operador spread, NO hace paso por referencia, se rompe la referencia!!!

let peter3 = { nombre: 'Peter3'};
let tony3 = cambiaNombre3( peter3 );

console.log({peter3, tony3});

//------------
//ROMPER LA REFERENCIA CON ARREGLOS

const frutas = [ 'Manzana', 'Pera', 'Piña' ];
const otrasFrutas = frutas;

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});

//Aqui mango se añade a ambos arreglos, frutas y otrasFrutas
//SOLUCION 1 CON EL OPERADOR SPREAD

const frutas2 = [ 'Manzana', 'Pera', 'Piña' ];

console.time('Spread');
const otrasFrutas2 = [ ...frutas2 ];//Aqui se arregla con llaves y spread
console.timeEnd('Spread');


otrasFrutas2.push('Mango');

console.table({frutas2, otrasFrutas2});


//SOLUCION 2 CON .slice()

const frutas3 = [ 'Manzana', 'Pera', 'Piña' ];

console.time('Slice');
const otrasFrutas3 = frutas3.slice();//Aqui se arregla con llaves y slice()
console.timeEnd('Slice');

otrasFrutas3.push('Mango');

console.table({frutas3, otrasFrutas3});




