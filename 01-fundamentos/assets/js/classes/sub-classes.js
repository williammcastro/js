
class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias de la clase'
    }

    static mensaje(){
        //console.log( this.nombre ); //da undefined si se ejecuta antes de inicializar la var nombre
        console.log('Hola a todos, soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';
    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {
        if ( !nombre ) throw Error('Se requiere el nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
        Persona._conteo = Persona._conteo + 1;
        Persona._conteo++;
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy (){
        console.log(`Yo soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice : ${this.frase} `);
    }
}

class Heroe extends Persona{
    clan = 'sin clan';
    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Avengers';

        this.setComidaFavorita = 'esta es la comida favorita calamar';
        super.setComidaFavorita = 'esta es la comida favorita pie';
    }

    quienSoy (){
        console.log(`Soy ${this.nombre} y pertenezco a  ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker','spiderman', 'Hola soy tu vecino spiderman', 'el pai de May' );

console.log(spiderman);
spiderman.quienSoy();


//---

