let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip:'10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infiniti War'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);

console.log('No Trajes', personaje.trajes.length);
console.log('Primer elemento', personaje.trajes[0]);
console.log('ultimo objeto', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo:', personaje[x]);
console.log('Ultima peli', personaje['ultima-pelicula']);


//borrar una propiedad

delete personaje.edad;
console.log(personaje)

//CREAR UNA NUEVA PROPIEDAD EN UN OBJETO
personaje.casado = true;
console.log(personaje);

//TRABAJAR EL OBJ COMO SI FUERA UN ARRAY

const entiresPares = Object.entries( personaje );
console.log( entiresPares );

//PARA QUE NO SE PUEDA MODIFICAR EL OBJETO
Object.freeze( personaje );
personaje.dinero = 100000000;
console.log(personaje);

//SACAR LAS PROPIEDADES o VALORES DE UN OBJETO EN UN ARREGLO
const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );

console.log({propiedades});
console.log({valores});



