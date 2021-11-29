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

//Este callback retorna un heroe si lo encuentra y sino envia la descripcion del error!!
export const buscarHeroe = (id, callback) => {
    //const buscarHeroe = (id, callback) => {

    console.log('funcion buscarHeroe ejecutandose en callbacks.js');

    const heroe = heroes[id];

    if ( heroe ){
        console.log('dentro de IF - ANTES llamar el callback en buscar heroe')
        callback( null, heroe);
        console.log('dentro de IF - DESPUES llamar el callback en buscar heroe')

    } else {
        console.log('dentro de ELSE - ANTES llamar el callback en buscar heroe')

        //el error siempre se envia en el primer argumento!!!
        //callback(`No existe un heroe con el id ${id}`);
        callback(`conErrores no existe el ID ${id}`)
        console.log('dentro de ELSE - DESPUES llamar el callback en buscar heroe')
        
    }
    console.log('Fin de buscarHeroe')
    return 'hola mundirijillo'

}



