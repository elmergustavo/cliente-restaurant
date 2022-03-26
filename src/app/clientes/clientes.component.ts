import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
//import { CLIENTES } from './clientes.json';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  
  clientes: Cliente[] = [];
  
  constructor(private clienteService: ClienteService) {
    
   }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }

}
