import { Injectable } from '@angular/core';
import { formatDate, DatePipe } from '@angular/common';
// import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPoint:string = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient, private router: Router) { }

  getClientes(): Observable <Cliente[]> {
    //return of(CLIENTES);
    //return this.http.get<Cliente[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => {
        let clientes = response as Cliente[];
        return clientes.map(cliente => {
          cliente.nombre = cliente.nombre.toUpperCase();
          cliente.apellido = cliente.apellido.toUpperCase();
          let datePipe = new DatePipe('en-US');

          //cliente.createAt = datePipe.transform(cliente.createAt, 'dd/MM/yyyy');
          cliente.createAt = formatDate(cliente.createAt, 'EEEE dd, MMMM yyyy', 'es')
          return cliente;
        })
      })
    )
  }

  create(cliente: any) {
    //return this.http.post<Cliente>(this.urlEndPoint, cliente,{headers: this.httpHeaders})
    return this.http.post(this.urlEndPoint,cliente, {headers: this.httpHeaders}).pipe(
      catchError (e => {
        console.error(e.error.mensaje);
        Swal.fire('Error al crear al cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }

  getCliente(id: any): Observable <Cliente> {
    return this.http.get<Cliente> (`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes']);
        console.log(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e)
      } )
    )
  }

  update(cliente: any): Observable <Cliente> {
    return this.http.put<Cliente> (`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
      catchError (e => {
        console.error(e.error.mensaje);
        Swal.fire('Error al editar al cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }

  delete(id: number): Observable <Cliente> {
    return this.http.delete<Cliente> (`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError (e => {
        console.error(e.error.mensaje);
        Swal.fire('Error al Eliminar al cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }

  subirFoto(archivo: File, id : any): Observable <Cliente>  {
    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("id", id);
    return this.http.post(`${this.urlEndPoint}/upload`, formData).pipe(
      map((response: any) => response.cliente as Cliente),
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire('Error al subir al la foto', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
}
