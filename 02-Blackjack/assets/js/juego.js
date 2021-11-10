const miModulo = (() => {
    'use strict'

        
    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

       let puntosJugadores = [];

    //Referencias html

    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),//funca sin esteeee!!! revisar x q?!!
          btnNuevo = document.querySelector('#btnNuevo');//funca sin esteeee!!! revisar x q?!!

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

    //Esta funcion inicializa el juego

    const inicializarJuego = ( numJugadores = 2) => {
        deck = crearDeck();

        puntosJugadores = [];
        for (let i=0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }

        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }

    //Esta funcion crea un nuevo deck
    const crearDeck = () => {
        deck = [];
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
        return _.shuffle(deck);
        
    }
    //inicializarJuego();

    //Esta funcion me permite servir una carta/no requiere parametro de entrada!
    const pedirCarta = () => {
        
        if (deck.length ===0){
            throw 'No hay mas cartas en el deck';
        }
        return deck.pop();
    }

    //Esta funcion averigua el valor de la carta pasada como parametro/se le pasa como parametro una carta
    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1);//quita el ultimo valor del string
        return ( isNaN( valor ) ) ?
                    ( valor === 'A' ) ? 11 : 10 
                    : valor * 1 ; //multiplicar x 1 convierte a numero ese string
    }

    //Esta funcion acumula los puntos de los jugadores, ya sea la computadora o cualquier jugador
    //Truno 0:es el primer jugador y el ultimo siempre sera la computadora
    const acumularPuntos = ( carta, turno ) =>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;//aqui se forma la src de la carta
        imgCarta.classList.add('carta');//Esta carta es de CSS!!!! toma el mismo formato!!
        divCartasJugadores[turno].append( imgCarta );

    }

    const determinarGanador = () =>{

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

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

    //Funcion que ejecuta el turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1 );
            crearCarta( carta, puntosJugadores.length - 1 );
            
        }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
        
        determinarGanador();
       
    }

    //valorCarta(pedirCarta());

    //Eventos
    //Funcion que ejecuta el turno del jugador con el click
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos( carta, 0 );

        crearCarta( carta, 0 );


        if ( puntosJugador > 21 ){
            console.warn('Lo siento, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
            
        } else if ( puntosJugador === 21 ) {
            console.warn('21 Genial');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );

        }
        
    });

    //Funcion para detener el juego parte del jugador con click
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugadores[0] );
    });

    //Funcion para iniciar un juego nuevo parte del jugador con click
    btnNuevo.addEventListener('click', () => {

        inicializarJuego();

    });

    return {
        nuevoJuego: inicializarJuego
    };

})();




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
