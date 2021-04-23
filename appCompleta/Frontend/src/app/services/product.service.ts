import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL_API:string = "http://localhost:5000/api"
  products:Product[]

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.URL_API)
  }
}
