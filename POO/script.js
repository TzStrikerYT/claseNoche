class Animales {

    constructor(nombre, edad, especie, tipo) {
        this.nombre = nombre
        this.edad = edad
        this.especie = especie
        this.tipo = tipo
    }

    //metodos
    habla(){
        return `El ${this.especie} hizo un sonido`
    }

    getEdad(){
        return `${this.nombre} tiene ${this.edad} años`
    }


}

class Humanos extends Animales {

    constructor(nombre, edad, especie, tipo, apellidos, region) {
        super(nombre, edad, especie, tipo);
        this.apellidos = apellidos
        this.region = region        
    }

    escribe(){
        return `Hola mi nombre es ${this.nombre} ${this.apellidos} y voy a escribirte algo genial`
    }

}

let gato = new Animales("felix", 1, "Gato", "Mamifero")
let perro = new Animales("Rex", 0.6, "Perro", "Mamifero")

let persona = new Humanos("Michael", 24, "Humano", "Mamifgeros", "Cocuy", "Colombia")

console.log(persona.escribe())
//(console.log(gato.getEdad())
//console.log(perro.getEdad())