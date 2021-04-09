import mongoose from "mongoose"

const atlas = "mongodb+srv://striker:1010*@mongoclase1.a3jch.mongodb.net/express?retryWrites=true&w=majority"
const native = "mongodb://localhost/nombreBD"

mongoose.connect(atlas, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => {
        console.log("BD conectada")
    })
    .catch(err => {
        console.log("Error: =======> ", err)
    })