//PASO POR VALOR - Las variables en JS tienen paso por valor!!!
var fruta = 'banana';
var fruta2 = fruta;

console.log({fruta});
console.log({fruta2});

// fruta2 = 'mandarina';
fruta = 'mandarina';


console.log({fruta});
console.log({fruta2});

//PASO DE UN PARAMETRO COMO VALOR - POR VALOR
//cuando se ejecuta la fx, no se modifica el valor de la variable fruta q esta fuera de la funcion!!!
//esto es cuando se termina de ejegutar la fx, fruta vale 4

function comer(fruta){
    fruta = fruta -1;
}

var fruta = 4;

comer(fruta);

//PASO DE UN PARAMETRO POR REFERENCIA
//Cuando se ejecuta la funcion en la ultima linea(43) se modifica directamente el objeto, osea la prop cantidad pasa de 4 a 3!!!

function comerRef(fruta2){
    fruta2.cantidad = fruta2.cantidad -1
}

var fruta2 = {
    nombre:'banana',
    cantidad : 4
}

comerRef(fruta2)