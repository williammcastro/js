import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'
import { buscarHeroe } from './js/promesas';
import { buscarHeroeAsync } from './js/promesas';
import { obtenerHeroesArr, obtenerHeroesArr2, obtenerHeroesAwait } from './js/await';

import './styles.css';

import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'

const heroeId1 = 'capi';
const heroeId2 = 'spider';

// //Todos los ejemplos funcionan con el mismo promesas.js

// //Ejemplo 0 para la fx buscarHeroeCallback, funciona con el callback.js
// const recibir = buscarHeroeCallback( heroeId1, ( err, heroe ) =>{
//     console.log('funcionX  callback ejecutandose en index.js');
//     console.log(`este es el error : ${ err }`);
//     if ( err ){
//         console.log('dentro de if callback');
//         console.info(err);
//     }else{
//         console.log('dentro de else callback')
//         console.info( heroe );
//     }
//     console.log('Fin de funcionX')
// } );
// console.log(`este es recibir return: ${recibir}`);


// //Ejemplo 1 para mostrar como funca el .then, .catch y .finally
// buscarHeroe( heroeId1 )
// .then( heroeX => {
//     console.log(`Enviando a ${ heroeX.nombre } a la mision critica`);
// }).catch((err) => {
//     console.error( err );
// }).finally(( ) => {
//     console.log('Finalizada la promesa finally')
// } );
// console.log('fin del programa index.js');


// //Ejemplo2 de promise hell
// buscarHeroe( heroeId1 ).then( heroe1 => {
//     buscarHeroe( heroeId2 ).then( heroe2 => {
//         console.log(`Enviando a ${ heroe1.nombre } y a ${ heroe2.nombre } a la mision`);
//     });
// });


// //Ejemplo3 de ejecucion del promise.all()
// Promise.all([true, 'hola', 123]).then( arr => {
//     console.log('este es el resultado de promise.all : ', arr);
// } )


// //Ejemplo 4 con promise.all para llamar varias funciones/promesas al tiempo sin hacer promise hell.
// Promise.all([ buscarHeroe( heroeId1 ), buscarHeroe( heroeId2 ) ])
// .then( ([heroe1, heroe2]) => {
//     console.log(`Enviando a ${ heroe1.nombre } y a ${ heroe2.nombre } a la mision`);
// } ).catch( err => {
//     alert( err );
// } ).finally( () => {
//     console.log('Terminado en finally')
// } );



// Ejemplo 5 - promise.race, cual se ejecuta primero
// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );

// Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
// .then( ( mensaje ) => {console.log( mensaje )} );

// Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
// .then( mensaje => console.log( mensaje ) );

// Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
// .then( console.log );

// // Ejemplo 6 ASYNC
// //primera forma de verlo en pantalla (devuelve una promesa! ha, esto se hace con el .then() o con el async - await!!!
// const heroe = buscarHeroeAsync('capi');
// console.log(heroe);

// //segunda forma de verlo en pantalla con el .then()
// buscarHeroeAsync('capi2')
//     .then(heroe => console.log( heroe ))
//     .catch(err => console.warn( err ));

// buscarHeroeAsync('iron')
//     .then(console.log)
//     .catch(console.warn);


// //Ejemplo 6 AWAIT

//obtenerHeroesArr().then(console.log);

//obtenerHeroesArr2().then(console.table)
//console.table(heroes);
// console.log(heroes);

// // Ejemplo 7 Manejo de errores con AWAIT 
console.time('await');

obtenerHeroesAwait('capi3')
    .then(heroe => {
        console.log(heroe);
        console.timeEnd('await');
    }).catch( err => console.warn( err ))

