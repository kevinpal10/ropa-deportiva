import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  items_productos = [
    {
      "categoria": "Hombre",
      "productos": [
        {
          "nombre": "Camisa de vestir",
          "precio": 45.99,
          "color": "Blanco",
          "talla": "M",
          "img": "../../../assets/imagenes/img2.jpg"
        },
        {
          "nombre": "Pantalones vaqueros",
          "precio": 55.00,
          "color": "Azul",
          "talla": "32",
          "img": "../../../assets/imagenes/img2.jpg"
        },
        {
          "nombre": "Pantalones vaqueros",
          "precio": 55.00,
          "color": "Azul",
          "talla": "32",
          "img": "../../../assets/imagenes/img2.jpg"
        },
        {
          "nombre": "Pantalones vaqueros",
          "precio": 55.00,
          "color": "Azul",
          "talla": "32",
          "img": "../../../assets/imagenes/img2.jpg"
        },
        {
          "nombre": "Pantalones vaqueros",
          "precio": 55.00,
          "color": "Azul",
          "talla": "32",
          "img": "../../../assets/imagenes/img2.jpg"
        },
        {
          "nombre": "Pantalones vaqueros",
          "precio": 55.00,
          "color": "Azul",
          "talla": "32",
          "img": "../../../assets/imagenes/img2.jpg"
        },
        // Otros productos...
      ]
    },
    {
      "categoria": "Mujer",
      "productos": [
        {
          "nombre": "Vestido de cóctel",
          "precio": 59.99,
          "color": "Rojo",
          "talla": "S",
          "img": "../../../assets/imagenes/img3.jpg"
        },
        {
          "nombre": "Falda plisada",
          "precio": 39.99,
          "color": "Negro",
          "talla": "M",
          "img": "../../../assets/imagenes/img3.jpg"
        },
        // Otros productos...
      ]
    },
    {
      "categoria": "Niños",
      "productos": [
        {
          "nombre": "Camiseta de super",
          "precio": 19.99,
          "color": "Rojo",
          "talla": "6-8",
          "img": "../../../assets/imagenes/img3.jpg"
        },
        {
          "nombre": "Pantalones cortos",
          "precio": 14.99,
          "color": "Azul",
          "talla": "10-12",
          "img": "../../../assets/imagenes/img3.jpg"
        },
        // Otros productos...
      ]
    }
  ]
  
  

}
