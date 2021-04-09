import {Schema, model} from 'mongoose'

/* Estructura del documento a insertar */
const courseSchema = new Schema({
    name: String,
    duration: Number,
    description: String,
    imgUrl: String
},{
    timestamps: true, /* Fechas de creacion y actualizacion */
    versionKey: false /* omito la version de quien inserto */
})

export default model('Course', courseSchema);