import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados:Empleado[];

  constructor(private empleadoService : EmpleadoService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  actualizarEmpleado(id:Number){
    this.router.navigate(['actualizar-empleado',id]);
  }

  private obtenerEmpleados(){
    this.empleadoService.obtenerListaEmpleados().subscribe(dato =>{
      this.empleados = dato;
    });
  }

  eliminarEmpleado(id:number){
    this.empleadoService.eliminarEmpleado(id).subscribe(dato => {
      this.obtenerEmpleados();
    });
  }

  verDetalleEmpleado(id:number){
    this.router.navigate(['empleado-detalles',id]);
  }
}
