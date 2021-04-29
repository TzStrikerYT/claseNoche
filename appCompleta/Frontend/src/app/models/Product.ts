export class Product {

    //atributos
    _id?: string;
    name: string;
    price: string;
    category: string;
    brand: string;
    imgUrl: string;
    createdAt?: string;
    updatedAt?: string;

    //constructor
    constructor(_id = "", name="", price="", category="", brand="", imgUrl=""){
        this._id = _id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.brand = brand;
        this.imgUrl = imgUrl;
    }

    //metodos
}