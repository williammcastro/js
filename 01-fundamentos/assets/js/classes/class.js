



class Persona {

    

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias de la clase'
    }

    static mensaje(){
        //console.log( this.nombre ); //da undefined
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

const spiderman = new Persona('Peter Parker','spiderman', 'Hola soy tu vecino spiderman');
//const ironman = new Persona('Tony Stark', 'Ironman', 'Hola soy Ironman')

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
spiderman.nemesis = 'Duende Verde';
//spiderman.comida = 'Duende Verde';

// console.log( spiderman.getComidaFavorita )

console.log('conteo estatico ', Persona._conteo);
console.log( Persona.conteo );
Persona.mensaje();

Persona.propiedadExtena = 'hola soy una propiedad externa a la clase';
console.log(Persona.propiedadExtena);
console.log(Persona);

