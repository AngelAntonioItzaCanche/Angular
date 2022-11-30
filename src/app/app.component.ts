import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro Usuario';

mensaje="";

registrado=false;

nombre="";
apellido="";
cargo:string="";

entradas:any;
constructor(){
  this.entradas=[
    {titulo:"python es chido"},
    {titulo:"java present"},
    {titulo:"javascript es zzz"},
    {titulo:"kotlin es asco"},
    {titulo:"zmzmzmzmzm"},
//BAJAR LA ROPA 



  ]
} 

registrarUsuario(){
  this.mensaje="Usuario Registrado con Exito"
  this.registrado=true;
}


}
