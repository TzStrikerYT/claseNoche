import express from 'express'
import morgan from 'morgan'

/* Importacion bd */
import "./database"

const port = 5000

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({message: "Hello"})
})

app.listen(port, () => {
    console.log("Server escuchando el puerto", port)
})