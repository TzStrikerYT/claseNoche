import {Schema, model} from 'mongoose'

/* Estructura del documento a insertar */
const courseSchema = new Schema({
    name: String,
    duration: Number,
    description: String,
    imgUrl: String
},{
    timestamps: true,
    versionKey: false
})