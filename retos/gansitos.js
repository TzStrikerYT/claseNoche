let tiendas = [
    {
        nombre: "Tienda 1",
        gansitos: true,
        chocoBar: true
    },
    {
        nombre: "Tienda 2",
        gansitos: false,
        chocoBar: true,
    },
    {
        nombre: "Tienda 3",
        gansitos: true,
        chocoBar: false,
    },
    {
        nombre: "Tienda 4",
        gansitos: true,
        chocoBar: true,
    },
    {
        nombre: "Tienda 5",
        gansitos: true,
        chocoBar: true,
    },
    {
        nombre: "Tienda 6",
        gansitos: true,
        chocoBar: true,
    },
    {
        nombre: "Tienda 7",
        gansitos: true,
        chocoBar: true,
    },
    {
        nombre: "Tienda 8",
        gansitos: true,
        chocoBar: true,
    },
    {
        nombre: "Tienda 9",
        gansitos: true,
        chocoBar: true,
    },
    {
        nombre: "Tienda 10",
        gansitos: true,
        chocoBar: true,
    }
]

try {

    let mensaje = ""

    for(let tienda of tiendas){
        if(tienda.gansitos === false){
            mensaje += `A La tienda ${tienda.nombre} le faltan gansitos\n`
        }

        if(tienda.chocoBar === false){
            mensaje += `A La tienda ${tienda.nombre} le faltan Barras de chocorramo`
        }
    }

    if(mensaje !== ""){
        throw mensaje
    } else {
        console.log("Todo esta perfecto!")
    }
} catch (error) {
    console.log(`Error: ${error}`)
}