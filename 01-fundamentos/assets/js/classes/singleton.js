


class Singleton {

    static instancia;
    nombre = '';

    constructor ( nombre = '') {
        
        if ( !!Singleton.instancia ){//si existe la instancia con doble !!
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        return this;//no es necesario, esto regresa siempre this

    }
}

const instancia1 = new Singleton('Ironman');
const instancia2  = new Singleton('BlackPanther');

console.log(`Nombre en la instancia1 es : ${ instancia1.nombre }`);
console.log(`Nombre en la instancia1 es : ${ instancia2.nombre }`);



