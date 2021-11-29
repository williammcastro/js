const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones letales sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Reaccion alergica extraordinaria a picadura de araña'
    }
}

export const buscarHeroe = ( id ) => {
    const heroe = heroes[id];

    return new Promise( ( resolve, reject ) => {
        if ( heroe ) {
            resolve(heroe);//devuelvo lo q quiero regresar donde se llamó la promesa, se puede enviar varios arg, obj etc.
        } else {
            reject(`No existe un heroe con el id ${ id }`)
        }
    } );
}

export const buscarHeroeAsync = async( id ) => {

    const heroe = heroes[id];

        if ( heroe ) {
            return heroe;
        } else {
            throw `No existe un heroe con el id ${ id }`
            //throw Error(`No existe un heroe con el id ${ id }`);//Envia el error verbose!
        }
}

const promesaLenta = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Promesa Lenta'), 2000);
} );

const promesaMedia = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Promesa Media'), 1500);
} );

const promesaRapida = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Promesa Rapida'), 1000);
} );


export {
    promesaLenta,
    promesaRapida,
    promesaMedia

}


console.log('fin de archivo promesas');






//---otra forma de crear la promesa

// const buscarHeroe = ( id ) => {

//     const heroe = heroes[id];

//     const promesa = new Promise();//aqui en el arg se recibe el argumento (funcion callback )que se quiere ejecutar

//     return promesa;

// }