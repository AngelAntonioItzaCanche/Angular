import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]

})
export class EmpleadoComponent implements OnInit {


  nombre="omeprazon"
  apellido="de gastritis"
  edad=24;

 empresa="amazon adasd"


habilitarCuadro=false;
usuRegistrado=false;
textoDeRegistro="No hay nadie registrado";


getRegistroUsuario(){

  this.usuRegistrado=false;

  
}

aea(event:Event){
  //  alert("El usuario se acaba de registrar")

  //this.textoDeRegistro="El usuario se acaba de registrar";

  if((<HTMLInputElement>event.target).value =="si"){

      this.textoDeRegistro="El usuario se acaba de registrar";

  }else{
    this.textoDeRegistro="No hay nadie registrado";

  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
