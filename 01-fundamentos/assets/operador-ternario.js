

/*
Dias de la semana abrimos a las 11
Fines de semana abrimos a las 9
 */

const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje;


    // if ( dia === 0 || dia === 6 ) {
    //     horaApertura = 9;
    //     console.log('Fin de semana');
    //     console.log('Abrimos a las 9');
    // }else{
    //     horaApertura = 11;
    //     console.log('Es dia de semana');
    //     console.log('Abrimos a las 11');
    // }

    horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

    // if ( horaActual >= horaApertura ){
    //     mensaje = 'Esta abierto';
    // }else{
    //     mensaje = 'esta cerrado, hoy abrimos a las ' + horaApertura; 
    // }

    mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : 'Esta cerrado, hoy abrimos a las ' + horaApertura;


console.log({ horaApertura, mensaje });



