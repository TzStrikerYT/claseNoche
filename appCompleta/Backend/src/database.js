import mongoose from 'mongoose'

const atlas = 'mongodb+srv://striker:1010*@mongoclase1.a3jch.mongodb.net/store?retryWrites=true&w=majority'
const ipconnect = 'mongodb://localhost/nombreBD'

mongoose.connect(atlas, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => {
        console.log('BD conectada')
    })
    .catch(err => {
        console.log('Error ===========>', err)
    })

