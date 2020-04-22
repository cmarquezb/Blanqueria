import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  //Myapi_URI='http://45.79.163.44:3000/castelapi';
  Myapi_URI='http://localhost:3000/castelapi';
  constructor(private http: HttpClient) { }
 
  getAllProductsp(): any {
    return this.http.get(`${this.Myapi_URI}/promociones`);
  }

  getSingleProductp(id: string): Observable<any> {
    return this.http.get(`${this.Myapi_URI}/promociones/${id}`);
  } 

} 