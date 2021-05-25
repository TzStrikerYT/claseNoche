for(let i = 5; i <= 5; i++){// la tabla en si
    console.log("**************")
    for(let j = 1; j <= 5; j++){// cada una de las multiplicaciones
        let result = i * j
        if(result < 10){
            console.log(`| ${i} x ${j} = ${result}  |`)
        } else {
            console.log(`| ${i} x ${j} = ${result} |`)
        }
    }    
    console.log("**************")
}