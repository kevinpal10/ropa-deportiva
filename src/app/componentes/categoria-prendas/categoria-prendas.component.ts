import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria-prendas',
  templateUrl: './categoria-prendas.component.html',
  styleUrls: ['./categoria-prendas.component.css']
})
export class CategoriaPrendasComponent {

  categorias_prendas = [
    {
      "img": "./assets/imagenes/categorias/resized_hoddie.jpg",
      "name": "Hoddies",
      "count": "Abriga con estilo",
      "src": "./#/catalogo"
    },
    {
      "img": "./assets/imagenes/categorias/resized_calentadores.jpg",
      "name": "Calentadores",
      "count": "Confort total",
      "src": "./#/catalogo"
    },
    {
      "img": "./assets/imagenes/categorias/resized_buzos.jpg",
      "name": "Buzos",
      "count": "Frescos y versátiles",
      "src": "./#/catalogo"
    }
  ]

}