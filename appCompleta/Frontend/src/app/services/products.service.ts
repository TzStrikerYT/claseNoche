import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL_API = 'http://localhost:5000/api' /* definen url del api */

  //interfaz
  products:Product[]

  constructor(private http: HttpClient) { } //inicializar los metodos de la clase para acceder los metodos

  /* Metodos de clase */
  getProducts(){
    return this.http.get<Product[]>(this.URL_API)
  }

}
