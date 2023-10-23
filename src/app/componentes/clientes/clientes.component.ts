import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {


comments = [
  {
    "img": "./assets/imagenes/img11.jpg",
    "comment":"Excelente! Muy recomendado"
  },
  {
    "img": "./assets/imagenes/img11.jpg",
    "comment":"Me siento comoda, hecho a mi medida! "
  },
  {
    "img": "./assets/imagenes/img11.jpg",
    "comment":"Excelente servicio, 5 estrellas!"
  },
]

}
