
// function saludar(){
//     console.log('Hola Mundo');
//     console.log(arguments[2]);
// }

//saludar('william', 40, 'timbuktu', 'azul');

//var saludar2 = 'abc';//Uncaught SyntaxError: Identifier 'saludar2' has already been declared
//var saludar = 132;//funciones.js:12 Uncaught TypeError: saludar is not a function
//let saludar = 132;//Uncaught SyntaxError: Identifier 'saludar' has already been declared

// const saludarFlecha = (nombre2) => {
//     console.log('Hola en saludarFlecha ' + nombre2);
//     return 'retorno de saludarFlecha';
//     //este es un comment
// }

// const saludarFlecha2 = ( nombre ) => {
//     console.log('Hola en saludarFlecha2 ' + nombre);
// }

// //saludarFlecha();//Hola Flecha
// saludarFlecha2(saludarFlecha('will'))


///------------------------------
// const test = ()=>{
//         let x=1;
//         let y=2;
//     return [x, y, true]
//     }
    
// const resultado = test();
// console.log(resultado[2]);
    

///------------------------------
// function sumar (a,b) {
//     return a+b;
// }

// const sumar2 = (a, b) => {
//     return a+b;
// }

// const sumar3 = (a,b) => a+b;

// console.log( sumar3( 1,2 ) );


///------------------------------
function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());

