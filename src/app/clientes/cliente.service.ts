import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getClientes(): Observable <Cliente[]> {
    //return of(CLIENTES);
    //return this.http.get<Cliente[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Cliente[])
    )
  }

  create(cliente: any) {
    //return this.http.post<Cliente>(this.urlEndPoint, cliente,{headers: this.httpHeaders})
    return this.http.post(this.urlEndPoint,cliente, {headers: this.httpHeaders});
  }

  getCliente(id: any): Observable <Cliente> {
    return this.http.get<Cliente> (`${this.urlEndPoint}/${id}`)
  }

  update(cliente: any): Observable <Cliente> {
    return this.http.put<Cliente> (`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  }

  delete(id: number): Observable <Cliente> {
    return this.http.delete<Cliente> (`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})    
  }
}
