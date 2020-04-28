import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //Myapi_URI='http://45.79.163.44:3000/castelapi';
  Myapi_URI='http://localhost:3000/castelapi';
  constructor(private http: HttpClient) { }
 
  getAllProducts(): any {
    return this.http.get(`${this.Myapi_URI}/articulos`);
  }

  getSingleProduct(id: string): Observable<any> {
    return this.http.get(`${this.Myapi_URI}/articulos/${id}`);
  } 

  getOneProduct(id: string): Observable<any> {
    return this.http.get(`${this.Myapi_URI}/articulos/one/${id}`);
  } 

  getModeloProduct(id: string): Observable<any> {
    return this.http.get(`${this.Myapi_URI}/articulos/FilModelo/${id}`);
  } 
  getMarcaProduct(id: string): Observable<any> {
    return this.http.get(`${this.Myapi_URI}/articulos/FilMarca/${id}`);
  } 
  getcategoriaProduct(id: string): Observable<any> {
    return this.http.get(`${this.Myapi_URI}/articulos/FilTipos/${id}`);
  } 

  getMaterialProduct(id: string): Observable<any> {
    return this.http.get(`${this.Myapi_URI}/articulos/FilMaterial/${id}`);
  } 

} 
    