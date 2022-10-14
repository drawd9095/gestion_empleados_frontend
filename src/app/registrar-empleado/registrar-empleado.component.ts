import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado:Empleado = new Empleado();
  constructor(private empleadoServicio : EmpleadoService, private router:Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.registrarEmpleado();
  }

  registrarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato =>{
      console.log(dato);
      this.listarEmpleados();
    },error => console.log(error));
  }

  listarEmpleados(){
    this.router.navigate(['/empleados'])
  }



}
