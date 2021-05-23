import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../model/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private _url: string = '/assets/data/data.json';

  constructor(private httpClient: HttpClient) {}

  getProduct(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this._url);
  }
}
