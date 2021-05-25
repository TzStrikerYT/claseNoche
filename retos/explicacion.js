let nums = [1,2,3,4,5]
let aj = ""
try {
    if (isNaN("ñ")){
        throw "No es un numero"
    }
} catch (error) {
    console.error(error)
}

for(let num of nums){
    console.log(num);
}