import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _http: HttpClient) { }

  addClient(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/clients', data);
  }

  updateClient(id: number,data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/clients/${id}`, data);
  }

  getClient(): Observable<any> {
    return this._http.get('http://localhost:3000/clients');
  }

  deleteClient(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/clients/${id}`);
  }
}
