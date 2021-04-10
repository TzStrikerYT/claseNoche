import {Schema, model} from 'mongoose'

const productSchema = new Schema({
    name: String,
    price: String,
    category: String,
    brand: String,
    available: Boolean,
},{
    timestamps: true,
    versionKey: false
})

export default model('Product', productSchema)