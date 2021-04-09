import express from 'express'
import morgan from 'morgan'

// importacion info pjson
import pkg from '../package.json'

/* Importacion bd */
import "./database"

const port = 5000

const app = express()

app.set('pkg', pkg)

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

// Importacion de rutas
import courseRoutes from './routes/course.routes'

// uso de rutas
app.use('/api', courseRoutes)


app.listen(port, () => {
    console.log("Server escuchando el puerto", port)
})