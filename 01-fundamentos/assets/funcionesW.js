const saludarFlecha = (nombre2) => {
    console.log('Hola en saludarFlecha ' + nombre2);
    return 'retorno de saludarFlecha';
    //este es un comment
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola en saludarFlecha2 ' + nombre);
}

//saludarFlecha();//Hola Flecha
saludarFlecha2(saludarFlecha('will'));


/* Mira como el parametro william se le envia a saludarFlecha(), y esa entra de ultima a la pila de stack y por eso debe resolverse primero, por eso se ejecuta primero saludarFlecha y el resultado esta enel primer renglon “Hola en saludarFlecha”+ el parametro william.
y lo mas importante, esta funcion tiene un retorno q dice 'retorno de saludarFlecha' que es lo que precisamente le entra como parametro a saludarFlecha2(). por eso le concatena eso a “Hola en saludarFlecha2”

hay q ver q si no le coloco parentesis a la funcion saludarFlecha, ese parametro lo toma como si fuera una constante que estuviera definida literalmente como la funcion!!!
*/