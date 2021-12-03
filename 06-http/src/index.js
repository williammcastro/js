// importaciones para ejemplos 1 al 6
//import { obtenerChiste, obtenerInteraccion } from "./js/http-provider";

// //Importacion para el ejemplo 7 para produccion
import { init } from './js/chistes-page';

//const jokeUrl = 'https://api.chucknorris.io/jokes/random';



// //Ejemplo 2 de desestructuracion para q se vea como se usa fetch().then() y json().then()
// fetch( jokeUrl ).then( resp => {
//     //console.log(resp);
//     resp.json().then( data => {
//         console.log(data);

//     } )
// } )


// // Ejemplo 2 de fecth y desestructuracion resumido
// fetch( jokeUrl )
//     .then( resp => {return resp.json()})
//     .then( ({ id, value }) => {
//         console.log(id, value);
//     });

// //Ejemplo 3: llamar obtenerChiste() e imprimirlo solamente
// obtenerChiste().then(console.log)


// //Ejemplo 4: produccion, recibe el json puro y saca los valores q interesan en esta jerarquia(id y value)
// obtenerChiste().then( ({ icon_url, id, value }) => {
//     console.log( icon_url, id, value);
// });

// // Ejemplo 5: solicitar al api interaccion de medicamentos la version 
// obtenerInteraccion().then(({rxtermsVersion}) => {
//     console.log(`la version de la interaccion de medicamentos es: ${rxtermsVersion}`)
// });



// // Ejemplo 6: solicitar api de interaccion medicamentos con 3 medicamentos
// let datosJson = obtenerInteraccion()
//     .then( dato => {
//         //console.log(dato);
//         if (!dato.fullInteractionTypeGroup) {
//             console.log('No existe interaccion conocida entre los medicamentos');
//             console.log(dato.nlmDisclaimer);
//         }else {
//             for (let i=0; i < dato.fullInteractionTypeGroup.length; i++)  {
//                 let interaccion = dato.fullInteractionTypeGroup[i].fullInteractionType[0].interactionPair[0].description;
//                 console.log(interaccion);
//             } 
//         }
//     })
//     .catch( err => console.log(err) )


// //Ejemplo 7: produccion para el provider de chistes Chuck Norris
init();