import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
    { id: 1, nombre: 'Gustavo', apellido: 'Pu', email: 'gusta@correo.com', createAt: '2022-10-05' },
  ];
  constructor() {
   }

  ngOnInit(): void {
  }

}
