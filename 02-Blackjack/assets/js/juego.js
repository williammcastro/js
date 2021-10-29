/* 
2C = CLUBS - TREBOLES
2D = DIAMONDS - DIAMANTES
2H = HEARTS - CORAZONES
2S = SWORDS - ESPADAS
*/

let deck = [];
let tipos = ['C', 'D', 'H', 'S'];
let especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias html

const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');//funca sin esteeee!!! revisar x q?!!
const btnNuevo = document.querySelector('#btnNuevo');//funca sin esteeee!!! revisar x q?!!


const divCartasJugador = document.querySelector('#jugador-cartas'); 
const divCartasComputadora = document.querySelector('#computadora-cartas'); 
const puntosHTML = document.querySelectorAll('small');

//Esta funcion crea un nuevo deck
const crearDeck = () => {
    for (let i = 2; i < 11; i++){
        for (let tipo of tipos){
            deck.push(i+tipo);
        }
    }

    for (let esp of especiales){
        for ( let tipo of tipos){
            deck.push(esp+tipo);
        }
    }
    //console.log( deck );
    deck = _.shuffle(deck);
    //console.log( deck );
    return deck;
}

crearDeck();

//Esta funcion me permite servir una carta/no requiere parametro de entrada!
const pedirCarta = () => {
    if (deck.length ===0){
        throw 'No hay mas cartas en el deck';
    }
    const carta = deck.pop();
    //console.log(carta);
    return carta;
}

//console.log(pedirCarta());

//Esta funcion averigua el valor de la carta pasada como parametro/se le pasa como parametro una carta
const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);//quita el ultimo valor del string
    let puntos = (isNaN(valor)) ? 
                 ( valor === 'A' ) ? 11 : 10 
                 : valor * 1 ; //multiplicar x 1 convierte a numero ese string
    //console.log(puntos);
    return puntos;
}
//Funcion que ejecuta el turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {
    

    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;//aqui se forma la src de la carta
        imgCarta.classList.add('carta');//Esta carta es de CSS!!!! toma el mismo formato!!
        divCartasComputadora.append( imgCarta );
        if ( puntosMinimos > 21 ){//si el jugador saco mas de 21 la computadora solo saca 1 carta y con eso gana
            break;
        }
    }while((puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21) );
    

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos){
            alert('Nadie Gana ');
        }else if(puntosMinimos > 21){
            alert('Computadora Gana!');
        } else if(puntosComputadora > 21){
            alert('Ganaste!!!');
        } else {
            alert('Computadora Gana');
        }
    }, 100);
}



valorCarta(pedirCarta());

//Eventos
//Funcion que ejecuta el turno del jugador con el click
btnPedir.addEventListener('click', () => {

    //console.log('click on');
    const carta = pedirCarta();
    //console.log(carta);
    puntosJugador = puntosJugador + valorCarta( carta );
    //console.log(puntosJugador);
    puntosHTML[0].innerText = puntosJugador;
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;//aqui se forma la src de la carta
    imgCarta.classList.add('carta');//Esta carta es de CSS!!!! toma el mismo formato!!
    //console.log( imgCarta )
    divCartasJugador.append( imgCarta );

    if (puntosJugador>21){
        console.warn('Lo siento, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
        
    } else if (puntosJugador ===21) {
        console.warn('21 Genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );

    }
    
});

//Funcion para detener el juego parte del jugador con click
btnDetener.addEventListener('click', () => {
    console.log(puntosJugador);
    console.log(puntosComputadora);
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador );
});

//Funcion para iniciar un juego nuevo parte del jugador con click
btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck();
    puntosComputadora = 0;
    puntosJugador = 0;

    btnPedir.disabled = false;
    btnDetener.disabled = false;

    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;
});



//----------------------------------------opciones ------------------------
//Esta funcion es la primera opcion con los if, pero la idea es hacerla con los ternarios
// const valorCarta = ( carta ) => {
//     const valor = carta.substring(0, carta.length - 1);//quita el ultimo valor del string
//     let puntos = 0;
//     if (isNaN( valor )){
//         puntos = ( valor === 'A' ) ? 11 : 10;
//     }else{
//         puntos = valor * 1;//multiplicar x 1 convierte a numero ese string
//     }

//     console.log(puntos);
// }
