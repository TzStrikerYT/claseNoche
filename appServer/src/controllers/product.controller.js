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

export const getProducts = (req, res) => {
    res.json({message: "Listando"})
}

export const getProductById = (req, res) => {}
export const updateProduct = (req, res) => {}
export const deleteProduct = (req, res) => {}