
const heroes = ['Batman', 'Sperman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For Tradicional');
for( let i=0; i < heroes.length  ; i++ ){
    console.log( heroes[i] );
}

console.warn('For in');
for( let i in heroes ){
    console.log( heroes[i] );
}

//Se acostumbra colocar en singular 'heroe' el elemento del iterable 'heroes'
console.warn('For of');
for( let heroe of heroes ){
    console.log( heroe );
}



