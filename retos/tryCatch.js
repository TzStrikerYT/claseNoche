try {

    let num = 501
    let array = [1,2,3,4,5,6,7]

    let objArr = [{
        nombre: "Michael",
        edad: 18,
        existe: true
    }, {
        nombre: "Michael",
        edad: 18,
        existe: true
    }, {
        nombre: "Michael",
        edad: 18,
        existe: false
    }, {
        nombre: "Michael",
        edad: 18,
        existe: true
    }]

    for(let persona of objArr){
        if(persona.existe === false){
            throw "una de las personas es falsa"
        }
    }

    for(let pos of array){
        if(isNaN(pos) === true){
            throw "el areglo no es de solo numeros"
        }
    }

    //false = si es un numero
    //true = No es un numero
    if(isNaN(num) === true){
        throw "No es un numero"
    }

    if(num > 500){
        throw "El numero es muy grande"
    }
} catch (error){
    console.log(`Error: ${error}`)
} finally {
    console.log("no me importa yo me ejecuto")
}

console.log("Termine")