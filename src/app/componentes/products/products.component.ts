import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  isVisible = false;
  items_productos = [
    {
      "categoria": "Hombre",
      "productos": [
        {
          "nombre": "Hoddie",
          "precio_neg": 45.99,
          "precio": 45.99,
          "color": "Blanco",
          "talla": "M",
          "img": "./assets/imagenes/img1.jpg"
        },
        {
          "nombre": "Hoddies",
          "precio_neg": 55.00,
          "precio": 45.99,
          "color": "Azul",
          "talla": "32",
          "img": "./assets/imagenes/img2.jpg"
        },
        {
          "nombre": "Hoddies",
          "precio_neg": 55.00,
          "precio": 45.99,
          "color": "Azul",
          "talla": "32",
          "img": "./assets/imagenes/img2.jpg"
        },
        {
          "nombre": "Hoddies",
          "precio_neg": 55.00,
          "precio": 45.99,
          "color": "Azul",
          "talla": "32",
          "img": "./assets/imagenes/img2.jpg"
        },
        {
          "nombre": "Hoddies",
          "precio_neg": 55.00,
          "precio": 45.99,
          "color": "Azul",
          "talla": "32",
          "img": "./assets/imagenes/img2.jpg"
        },
        {
          "nombre": "Hoddies",
          "precio_neg": 55.00,
          "precio": 45.99,
          "color": "Azul",
          "talla": "32",
          "img": "./assets/imagenes/img2.jpg"
        },
        // Otros productos...
      ]
    },
    {
      "categoria": "Mujer",
      "productos": [
        {
          "nombre": "Hoddie con estampado",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro",
          "talla": "S",
          "img": "./assets/imagenes/img18.jpg"
        },
        {
          "nombre": "Hoddie llano",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro",
          "talla": "S",
          "img": "./assets/imagenes/oficiales/img1.png"
        }, 
        {
          "nombre": "Hoddie llano",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro",
          "talla": "M",
          "img": "./assets/imagenes/oficiales/img2.png"
        },
        {
          "nombre": "Hoddie llano",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro", 
          "talla": "M",
          "img": "./assets/imagenes/oficiales/img1.png"
        },
        // Otros productos...
      ]
    },
    {
      "categoria": "Ninos",
      "productos": [
        {
          "nombre": "Hoddie",
          "precio_neg": 19,
          "precio": 25,
          "color": "Gris",
          "talla": "S",
          "img": "./assets/imagenes/img8.jpg"
        },
        {
          "nombre": "Hoddie",
          "precio_neg": 19,
          "precio": 25,
          "color": "Negro",
          "talla": "S",
          "img": "./assets/imagenes/img10.jpg"
        },
        {
          "nombre": "Hoddie",
          "precio_neg": 19,
          "precio": 25,
          "color": "Celeste",
          "talla": "S",
          "img": "./assets/imagenes/img14.jpg"
        },
        {
          "nombre": "Hoddie",
          "precio_neg": 19,
          "precio": 25,
          "color": "Negro",
          "talla": "S",
          "img": "./assets/imagenes/img15.jpg"
        },
        {
          "nombre": "Hoddie",
          "precio_neg": 19,
          "precio": 25,
          "color": "Gris",
          "talla": "S",
          "img": "./assets/imagenes/img16.jpg"
        },
        {
          "nombre": "Hoddie",
          "precio_neg": 19,
          "precio": 25,
          "color": "Celeste",
          "talla": "S",
          "img": "./assets/imagenes/img17.jpg"
        },
        // Otros productos...
      ]
    }
  ]
  productos_aux=this.items_productos
  producto_modal={
    "nombre": "",
    "precio_neg": 0,
    "precio": 0,
    "color": "",
    "talla": "",
    "img": ""
  }
  
  constructor() {}
  
  changeDates(cadena:string):void{
    switch(cadena) {
      case 't':
        this.productos_aux = this.items_productos
        break;
      case 'm':
        this.productos_aux = this.items_productos.filter(item => item.categoria === 'Mujer')
        break
      case 'h':
        this.productos_aux = this.items_productos.filter(item => item.categoria === 'Hombre')
        break
      case 'n':
        this.productos_aux = this.items_productos.filter(item => item.categoria === 'Ninos')
        break
    }
  }

  showModal(producto:any): void {
    this.isVisible = true;
    console.log(producto) 
    this.producto_modal = producto
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  

}
