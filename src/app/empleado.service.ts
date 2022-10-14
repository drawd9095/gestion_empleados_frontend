import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //obtiene lista de empleados en backend
  private baseUrl = "http://localhost:8080/api/v1/empleados";

  constructor(private httpclient : HttpClient) { }

  //llamada al servicio que obtiene los emppleados
  obtenerListaEmpleados():Observable<Empleado[]>{
    return this.httpclient.get<Empleado[]>(`${this.baseUrl}`);
  }

  //registra un empleado
  registrarEmpleado(empleado:Empleado):Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`, empleado);
  }

  //actulizarEmpleado
  actualizarEmpleado(id:number,empleado:Empleado):Observable<Object>{
    return this.httpclient.put(`${this.baseUrl}/${id}`, empleado);
  }

  //eliminar empleado
  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl}/${id}`);
  }
  
}
