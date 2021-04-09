import express from 'express'
import morgan from 'morgan'

/* Importacion bd */
import "./database"

const port = 5000

const app = express()

app.use(morgan('dev'))

// Importacion de rutas
import courseRoutes from './routes/course.routes'

// uso de rutas


app.listen(port, () => {
    console.log("Server escuchando el puerto", port)
})