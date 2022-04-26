import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'datalle-cliente',
  templateUrl: './datelle.component.html',
  styleUrls: ['./datelle.component.css']
})
export class DatelleComponent implements OnInit {
  cliente: Cliente;
  titulo: string = "Detalle del cliente";
  private fotoSeleccionada: File;
  constructor( private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute ) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      //let id:number = +params.get('id');
      let id = params.get('id');

      if (id){
        this.clienteService.getCliente(id).subscribe(cliente => {
          this.cliente = cliente;
        });
      }
    })
  }

  seleccionarFoto(event: any) {
    this.fotoSeleccionada = event.target.files[0];
    console.log(this.fotoSeleccionada);

    if(this.fotoSeleccionada.type.indexOf('image') < 0){
      Swal.fire('Error: Seleccionar imganen: ', 'El archivo debe de ser tipo imagen', 'error')
      return;
    }
  }

  subirFoto(){
    if (!this.fotoSeleccionada){
      Swal.fire('Error: Updload', 'debe seleccionar una foto', 'error')
    } else {
      this.clienteService.subirFoto(this.fotoSeleccionada, this.cliente.id).subscribe(
        cliente => {
          this.cliente = cliente;
          Swal.fire("La foto se ha subido correctamente",`La foto se ha subido con exito: ${this.cliente.foto}`, "success" )
        }
      )
    }

  }

}
