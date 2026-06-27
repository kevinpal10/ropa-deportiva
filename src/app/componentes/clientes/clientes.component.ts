import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  comments = [
    {
      "nombre": "Josué A.",
      "img": "./assets/imagenes/hombres/camiseta1.jpg",
      "comment": "Camiseta elegante de buena calidad y muy comoda.",
      "rating": 5
    }
  ]

  estrellas(rating: number): boolean[] {
    return [1, 2, 3, 4, 5].map(n => n <= rating);
  }

}