

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];


let i=0;
while ( i < carros.length ) {
    console.log(carros[i]);
    i++;
}

//Son considerados falsos para el while
//Undefined
//null
//false

//En el siguiente while la 1 vale undefined cuando se acaban los elementos del arreglo => sale del ciclo
while ( carros[i] ) {//Cuando i = 4, no existe elemento en el arreglo, enton retorna Undefined => sale del while!!!
    console.log(carros[i]);
    i++;
}

//En el siguiente while si i===1, se salta ese elemento, en este caso mazda
while ( carros[i] ) {
    if (i === 1){
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}

//El siguiente es un do-while, en el cual se ejecuta al menos una vez el codigo entre llaves.
//Se ejecuta mientras j sea un elemento valido del arreglo, pero al menos se ejecuta 1 vez.

do {
    console.log(carros[j])
    j++
}while(carros[j]);

