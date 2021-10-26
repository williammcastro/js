

const hoy = new Date();
let dia = hoy.getDay();
let mes = hoy.getMonth();
let anio = hoy.getFullYear();
let x = hoy.


//hoy = 0 : domingo
//hoy = 1 : lunes
//hoy = 2 : martes
//hoy = 3 : miercoles
//hoy = 4 : jueves
//hoy = 5 : viernes
//hoy = 6 : sabado

//mes = 0 : enero
//mes = 1 : febrero
//mes = 9 : ocrubre

//anio = 2021


console.log(hoy);
console.log(dia);
console.log(mes);
console.log(anio)


if (dia == 1){
    console.log('Hoy es lunes');
}else if (dia == 2){
    console.log('Hoy es martes');
}

