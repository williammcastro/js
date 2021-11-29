


class Persona{


    constructor(nombre, apellido, pais){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;

    }

    getInfo(){
        console.log(`Info : ${this.nombre} ${this.apellido} ${this.pais}`);
    }


}

const personita = new Persona('migue', 'pachon', 'el cairo');
personita.getInfo();