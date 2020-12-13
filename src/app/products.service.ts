import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Produit} from './produit';
import { Observable } from 'rxjs';
import { Cat } from './cat';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProd(): Observable<Produit>{
    const productUrl = 'http://localhost:3000/LoohHome';

    return this.httpClient.get<Produit>(productUrl); // return an observable
  }

  getCat(): Observable<Cat>{
    const categoriesUrl = 'http://localhost:3000/Categories';
    return this.httpClient.get<Cat>(categoriesUrl);
  }

  createProduct(productBody): Observable<Produit> {
    const productUrl = 'http://localhost:3000/LoohHome';
    return this.httpClient.post<Produit>(productUrl, productBody); //noramelemnt iraja observable

  }
  viewProduct(productId): Observable<Produit>{
    const productUrl = 'http://localhost:3000/LoohHome/'+ productId;
    return this.httpClient.get<Produit>(productUrl); //noramelemnt iraja observable

  }

  updateProduct(productId, productBody): Observable<Produit>{
    const productUrl = 'http://localhost:3000/LoohHome/' + productId;
    return this.httpClient.put<Produit>(productUrl, productBody); // return an observable
  }

  deleteProduct(productId):Observable<Produit>{
    const productUrl = 'http://localhost:3000/LoohHome/'+productId;
    return this.httpClient.delete<Produit>(productUrl); //noramelemnt iraja observable

  }
  viewbycatProduct(category_id):Observable<Produit>{
    const productUrl = 'http://localhost:3000/LoohHome?category_id='+category_id;
    return this.httpClient.get<Produit>(productUrl); //noramelemnt iraja observable

  }

}
