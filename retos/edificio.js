for(let pisos = 1; pisos <= 9; pisos++){
    console.log("*******************")
    process.stdout.write("| ")
    for(let habitaciones = 1; habitaciones <= 3; habitaciones++){
        process.stdout.write(" |*| ")
    }
    process.stdout.write(" |")
    process.stdout.write("\n")
    console.log("*******************")
}