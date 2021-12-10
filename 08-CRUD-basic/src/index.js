
// // Opcion 1 para importar y utilizar la importacion 
//import { getUsuario } from "./js/crud-provider";

// getUsuario(4).then( (datos) => {
//     console.log(datos);
// })


// //Opcion 2 para importar y utilizar la importacion 
import * as CRUD from './js/crud-provider'


// //1. obtener usuario
// CRUD.getUsuario( 2 ).then( console.log );


//2.Crear usuario
CRUD.crearUsuario({
    name: 'Manuel',
    job: 'Radiotecnico'
}).then( console.log );


// //Actualizar usuario
// CRUD.actualizarUsuario(1, {
//     name: 'Melisa',
//     job: 'Developer'
// }).then(console.log);


//  //Borrar usuario
// CRUD.borrarUsuario(2).then(console.log);