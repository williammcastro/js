import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];

// //Metodo normal para barrer 
// const obtenerHeroesArr = async() => {
    
//     const heroesArr = [];

//     for( const id of heroesIds ){
//         heroesArr.push( buscarHeroe( id ));
//     }
//     console.log('justo antes de terminar el progrma con return');
//     return await Promise.all(heroesArr)
// };

// //Este es el metodo fancy que se debe utilizar
// export const obtenerHeroesArr2 = async() => {
//     return await Promise.all( heroesIds.map( buscarHeroe ) );
// };



export const obtenerHeroesAwait = async( id ) => {

    try{
        const heroe = await buscarHeroeAsync( id );
        return heroe;
    }catch( err ){
        console.log('Ejecutando el CATCH!!!');
        //throw err;
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
    }
}



