/* 
2C = CLUBS - TREBOLES
2D = DIAMONDS - DIAMANTES
2H = HEARTS - CORAZONES
2S = SWORDS - ESPADAS
*/

let deck = [];
let tipos = ['C', 'D', 'H', 'S'];
let especiales = ['A', 'J', 'Q', 'K'];

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
    console.log(carta);
    return carta;
}

//console.log(pedirCarta());

//Esta funcion averigua el valor de la carta pasada como parametro/se le pasa como parametro una carta
const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);//quita el ultimo valor del string
    let puntos = (isNaN(valor)) ? 
                 ( valor === 'A' ) ? 11 : 10 
                 : valor * 1 ; //multiplicar x 1 convierte a numero ese string
    
    console.log(puntos);
    return puntos;
}

valorCarta(pedirCarta());


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
