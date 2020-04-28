import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MessageService {
constructor(private _http: HttpClient) { }
public sendMessage(form) {
    // return this._http.post('http://45.79.163.44:3002/formulario', form);
    return this._http.post('http://127.0.01:3002/formulario', form);
    
 }
}