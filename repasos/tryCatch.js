
let texto = "Holx como estxs"

try {

    for(let letra of texto){
        if (letra === "a" || letra === "A"){
            throw `El texto no puede llevar la letra "A" ó "a"`
        }
    }
    console.log("Gracias, viva lo inclusivo")
} catch (error) {
    console.log(`Error: ${error}`)
}

