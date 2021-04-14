import Product from '../models/Products'

export const createProduct = async (req, res) => {
    console.log(req.body)

    // destruir objeto que llega del request
    const {name, price, category, brand, available} = req.body

    //definir el nuevo producto
    const newProduct = new Product({
        name,
        price,
        category,
        brand,
        available
    })

    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
}

export const getProducts = async (req, res) => {
    const products = await Product.find()

    res.status(200).json(products)
}

export const getProductById = async (req, res) => {}
export const updateProduct = async (req, res) => {}
export const deleteProduct = async (req, res) => {}