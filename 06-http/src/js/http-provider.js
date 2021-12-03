

const jokeUrl           = 'https://api.chucknorris.io/jokes/random';
//const interaccionUrl  = 'https://rxnav.nlm.nih.gov/REST/RxTerms/version.json'
//const interaccionUrl  = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=207290+190465'
const interaccionUrl  =  'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=207106+152923+656659'
//const interaccionUrl  = 'https://rxnav.nlm.nih.gov/REST/interaction/sources.json'


// Documentacion del API para obtener la version
//https://lhncbc.nlm.nih.gov/RxNav/APIs/api-RxTerms.getRxTermsVersion.html

// Ejemplo 1 para entender
// fetch( jokeUrl ).then( resp => {
//     console.log(resp);
//     resp.json().then( data => {
//         console.log(data.id);
//         console.log(data.value);

//     } )
// } )

// // Ejemplo2 resumido
// fetch( jokeUrl )
//     .then( resp => resp.json())
//     .then( ({ id, value }) => {
//         console.log(id, value);
//     });


// // Ejemplo3 para produccion
const obtenerChiste = async() => {

    try{

        const resp = await fetch( jokeUrl );

        if ( !resp.ok  ) throw 'No se pudo realizar la peticion';  

        const { icon_url, id, value }  = await resp.json();
        
        return { icon_url, id, value };

        // Otra opcion para el return para q se entienda mas:
        // return { 
        //     icon_url:icon_url,
        //     id:id,
        //     value:value };

    } catch ( err ){
        console.log('Este es el error en la consulta:')
        throw err;

        // Otra opcion para el return para devolver que no hay chiste
        // return {
        //     id:'chiste no encontrado'
        // }
    }


}

// //Ejemplo 4: pedir a la api de interaccion de medicamentos
const obtenerInteraccion = async() => {
    try{
        const resp2 = await fetch( interaccionUrl );
        //console.log(resp2);
        if ( !resp2.ok ) throw 'No se puede realizar la peticion a interaccion de medicamentos';
        
        const respInteraccion = await resp2.json();
        //console.log(respInteraccion);
        return respInteraccion;

    }catch (err2){
        throw err2;
    }
}

export {
    obtenerChiste,
    obtenerInteraccion
}

// obtenerChiste().then( ({ value }) => {
//     console.log( value);
// });
