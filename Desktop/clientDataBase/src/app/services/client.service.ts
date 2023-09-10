import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _http: HttpClient) { }

  addClient(data: any): Observable<any> {
    return this._http.post('http://localhost:json/clients', data);
  }
}
