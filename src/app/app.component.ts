import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado empleados';
empleados:Empleado[]=[

new Empleado("Juan","papu","velador",7500),
new Empleado("Elver","galarga","adasdas",12312),

new Empleado("perez","gomes","nooo",232),

new Empleado("tela","tragas","dash y su disfraz",137289),


];

agregarEmpleados(){
  let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)


  this.empleados.push(miEmpleado);
}

cuadroNombre:string="";
cuadroApellido:string="";

cuadroCargo:string="";

cuadroSalario:number=0;





}
