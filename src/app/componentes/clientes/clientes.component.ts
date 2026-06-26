import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  comments = [
    {
      "nombre": "María S.",
      "img": "./assets/imagenes/mujeres/img-b-16.jpg",
      "comment": "Excelente calidad, el hoodie llegó rapidísimo y la talla fue perfecta. ¡Ya pedí otro!",
      "rating": 5
    },
    {
      "nombre": "Valeria R.",
      "img": "./assets/imagenes/mujeres/img15.jpg",
      "comment": "Me siento cómoda, hecho a mi medida. Los precios son muy accesibles.",
      "rating": 5
    },
    {
      "nombre": "Andrés P.",
      "img": "./assets/imagenes/hombres/img7.jpg",
      "comment": "Excelente servicio, coordinamos todo por WhatsApp. 5 estrellas.",
      "rating": 5
    }
  ]

  estrellas(rating: number): boolean[] {
    return [1, 2, 3, 4, 5].map(n => n <= rating);
  }

}