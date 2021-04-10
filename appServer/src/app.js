import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import './database'

const app = express();
const port = 5000;

app.use(morgan('dev'));

//get devolver informacion
//post enviar informacion y crear un registro
//put actualizar informacion existente
//delete Elimine informacion

app.set('pkg', pkg)

app.get('/', (req, res) => {
    res.json({
        version: app.get('pkg').version,
        author: app.get('pkg').author,
        name: app.get('pkg').name
    })
})

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto', port)
})