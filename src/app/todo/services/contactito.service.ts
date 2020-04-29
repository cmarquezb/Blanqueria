import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactitoService {

  constructor(private _http: HttpClient) { }
  public sendContacto(form) {
    // return this._http.post('http://45.79.163.44:3002/formulario', form);
    return this._http.post('http://127.0.0.1:3002/formularioContacto', form);    
 }
}