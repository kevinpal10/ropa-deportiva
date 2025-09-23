import { Component, OnInit } from '@angular/core';
import { Producto, ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productos: Producto[] = [];
  productos_aux: Producto[] = [];
  isVisible = false;


  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
      this.productos_aux = this.productos
      console.log(this.productos);
    });
  }

  constructor(
    private productoService: ProductoService
  ) {}

  items_productos = [
    {
      "categoria": "Hombre",
      "productos": [
        {
          "nombre": "Calentador para caballeros",
          "precio_neg": 35,
          "precio": 35,
          "color": "Blanco",
          "talla": "S-M-L",
          "imgenes": [
            "./assets/imagenes/hombres/img1.jpg",
            "./assets/imagenes/hombres/img1.jpg",
            "./assets/imagenes/hombres/img1.jpg",
            "./assets/imagenes/hombres/img1.jpg",
          ]
        },
        {
          "nombre": "Calentador para caballeros",
          "precio_neg": 35,
          "precio": 35,
          "color": "Blanco",
          "talla": "S-M-L",
          "imgenes": [
            "./assets/imagenes/hombres/img2.jpg",
            "./assets/imagenes/hombres/img2.jpg",
            "./assets/imagenes/hombres/img2.jpg",
            "./assets/imagenes/hombres/img2.jpg",
          ]
        },
        {
          "nombre": "Calentador para caballeros",
          "precio_neg": 35,
          "precio": 35,
          "color": "Blanco",
          "talla": "S-M-L",
          "imgenes": [
            "./assets/imagenes/hombres/img3.jpg",
            "./assets/imagenes/hombres/img3.jpg",
            "./assets/imagenes/hombres/img3.jpg",
            "./assets/imagenes/hombres/img3.jpg",
          ]
        },
        {
          "nombre": "Calentador para caballeros",
          "precio_neg": 35,
          "precio": 35,
          "color": "Blanco",
          "talla": "S-M-L",
          "imgenes": [
            "./assets/imagenes/hombres/img4.jpg",
            "./assets/imagenes/hombres/img4.jpg",
            "./assets/imagenes/hombres/img4.jpg",
            "./assets/imagenes/hombres/img4.jpg",
          ]
        },
        {
          "nombre": "Calentador para caballeros",
          "precio_neg": 35,
          "precio": 35,
          "color": "Blanco",
          "talla": "S-M-L",
          "imgenes": [
            "./assets/imagenes/hombres/img5.jpg",
            "./assets/imagenes/hombres/img5.jpg",
            "./assets/imagenes/hombres/img5.jpg",
            "./assets/imagenes/hombres/img5.jpg",
          ]
        },
        {
          "nombre": "Calentador para caballeros",
          "precio_neg": 35,
          "precio": 35,
          "color": "Blanco",
          "talla": "S-M-L",
          "imgenes": [
            "./assets/imagenes/hombres/img6.jpg",
            "./assets/imagenes/hombres/img6.jpg",
            "./assets/imagenes/hombres/img6.jpg",
            "./assets/imagenes/hombres/img6.jpg",
          ]
        },{
          "nombre": "Hoddie para caballeros",
          "precio_neg": 35,
          "precio": 23,
          "color": "Blanco",
          "talla": "S-M-L",
          "imgenes": [
            "./assets/imagenes/hombres/img7.jpg",
            "./assets/imagenes/hombres/img7.jpg",
            "./assets/imagenes/hombres/img7.jpg",
            "./assets/imagenes/hombres/img7.jpg",
          ]
        },
        // Otros productos...
      ]
    },
    {
      "categoria": "Mujer",
      "productos": [
        {
          "nombre": "Buzos para dama",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img-b-16.jpg",
            "./assets/imagenes/mujeres/img-b-16.jpg",
            "./assets/imagenes/mujeres/img-b-16.jpg",
            "./assets/imagenes/mujeres/img-b-16.jpg",
          ]
        },
        {
          "nombre": "Buzos para dama",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img11.jpg",
            "./assets/imagenes/mujeres/img11.jpg",
            "./assets/imagenes/mujeres/img11.jpg",
            "./assets/imagenes/mujeres/img11.jpg",
          ]
        },
        {
          "nombre": "Buzos para dama",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img12.jpg",
            "./assets/imagenes/mujeres/img12.jpg",
            "./assets/imagenes/mujeres/img12.jpg",
            "./assets/imagenes/mujeres/img12.jpg",
          ]
        },
        {
          "nombre": "Buzos para dama",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img14.jpg",
            "./assets/imagenes/mujeres/img14.jpg",
            "./assets/imagenes/mujeres/img14.jpg",
            "./assets/imagenes/mujeres/img14.jpg",
          ]
        },
        {
          "nombre": "Buzos para dama",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img15.jpg",
            "./assets/imagenes/mujeres/img15.jpg",
            "./assets/imagenes/mujeres/img15.jpg",
            "./assets/imagenes/mujeres/img15.jpg",
          ]
        },
        {
          "nombre": "Buzos para dama",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img17.jpg",
            "./assets/imagenes/mujeres/img17.jpg",
            "./assets/imagenes/mujeres/img17.jpg",
            "./assets/imagenes/mujeres/img17.jpg",
          ]
        },
        {
          "nombre": "Buzos para dama",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img18.jpg",
            "./assets/imagenes/mujeres/img18.jpg",
            "./assets/imagenes/mujeres/img18.jpg",
            "./assets/imagenes/mujeres/img18.jpg",
          ]
        },
        {
          "nombre": "Buzos para dama",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img-b-1.jpg",
            "./assets/imagenes/mujeres/img-b-2.jpg",
            "./assets/imagenes/mujeres/img-b-3.jpg",
            "./assets/imagenes/mujeres/img-b-4.jpg",
          ]
        },
        {
          "nombre": "Buzos para dama",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img-b-5.jpg",
            "./assets/imagenes/mujeres/img-b-6.jpg",
            "./assets/imagenes/mujeres/img-b-7.jpg",
            "./assets/imagenes/mujeres/img-b-8.jpg",
          ]     
        }, 
        {
          "nombre": "Buzos para dama",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img-b-13.jpg",
            "./assets/imagenes/mujeres/img-b-9.jpg",
            "./assets/imagenes/mujeres/img-b-14.jpg",
            "./assets/imagenes/mujeres/img-b-15.jpg",
          ]
        },
        {
          "nombre": "Buzos para dama",
          "precio_neg": 18,
          "precio": 23,
          "color": "Negro", 
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img-b-10.jpg",
            "./assets/imagenes/mujeres/img-b-11.jpg",
            "./assets/imagenes/mujeres/img-b-12.jpg",
            "./assets/imagenes/mujeres/img-b-12.jpg",
          ]
        },      {
          "nombre": "Calentador para dama",
          "precio_neg": 18,
          "precio": 35,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img-c-1.jpg",
            "./assets/imagenes/mujeres/img-c-1.jpg",
            "./assets/imagenes/mujeres/img-c-1.jpg",
            "./assets/imagenes/mujeres/img-c-1.jpg",
          ]
        },
        {
          "nombre": "Calentador para dama",
          "precio_neg": 18,
          "precio": 35,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img-c-2.jpg",
            "./assets/imagenes/mujeres/img-c-2.jpg",
            "./assets/imagenes/mujeres/img-c-2.jpg",
            "./assets/imagenes/mujeres/img-c-2.jpg",
          ]
        },
        {
          "nombre": "Calentador para dama",
          "precio_neg": 18,
          "precio": 35,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img-c-3.jpg",
            "./assets/imagenes/mujeres/img-c-3.jpg",
            "./assets/imagenes/mujeres/img-c-3.jpg",
            "./assets/imagenes/mujeres/img-c-3.jpg",
          ]
        },
        {
          "nombre": "Calentador para dama",
          "precio_neg": 18,
          "precio": 35,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img-c-4.jpg",
            "./assets/imagenes/mujeres/img-c-4.jpg",
            "./assets/imagenes/mujeres/img-c-4.jpg",
            "./assets/imagenes/mujeres/img-c-4.jpg",
          ]
        },
        {
          "nombre": "Calentador para dama",
          "precio_neg": 18,
          "precio": 35,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img-c-5.jpg",
            "./assets/imagenes/mujeres/img-c-5.jpg",
            "./assets/imagenes/mujeres/img-c-5.jpg",
            "./assets/imagenes/mujeres/img-c-5.jpg",
          ]
        },
        {
          "nombre": "Calentador para dama",
          "precio_neg": 18,
          "precio": 35,
          "color": "Negro",
          "talla": "S-M",
          "imgenes": [
            "./assets/imagenes/mujeres/img-c-6.jpg",
            "./assets/imagenes/mujeres/img-c-6.jpg",
            "./assets/imagenes/mujeres/img-c-6.jpg",
            "./assets/imagenes/mujeres/img-c-6.jpg",
          ]
        },

      ]
    },
    {
      "categoria": "Ninos",
      "productos": [
        {
          "nombre": "Hoddie para niños",
          "precio_neg": 19,
          "precio": 20,
          "color": "Gris",
          "talla": "XS-S",
          "imgenes": [
            "./assets/imagenes/ninos/img1.jpg",
            "./assets/imagenes/ninos/img2.jpg",
            "./assets/imagenes/ninos/img1.jpg",
            "./assets/imagenes/ninos/img2.jpg",
          ]
        },
        {
          "nombre": "Hoddie para niños",
          "precio_neg": 19,
          "precio": 20,
          "color": "Gris",
          "talla": "XS-S",
          "imgenes": [
            "./assets/imagenes/ninos/img3.jpg",
            "./assets/imagenes/ninos/img3.jpg",
            "./assets/imagenes/ninos/img3.jpg",
            "./assets/imagenes/ninos/img3.jpg",
          ]
        },
        // Otros productos...
      ]
    }
  ]

  producto_modal={
    "nombre": "",
    "precio_neg": 0,
    "precio": 0,
    "color": "",
    "talla": "",
    "imagen": ""
  }
  

  // Método para cambiar la categoría de productos
  changeDates(cadena:string):void{
    switch(cadena) {
      case 'todo':
        this.productos_aux = this.productos
        break;
      case 'mujeres':
        this.productos_aux = this.productos.filter(item => item.tipo_persona === 'Mujer')
        break
      case 'hombres':
        this.productos_aux = this.productos.filter(item => item.tipo_persona === 'Hombre')
        break
      case 'niños':
        this.productos_aux = this.productos.filter(item => item.tipo_persona === 'Ninos')
        break
    }
  }

  // Método para mostrar el modal con la información del producto
  showModal(producto:any): void {
    this.isVisible = true;
    this.producto_modal = producto
  }

   handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  
/*
  changeImgSelected(indice:any): void {
    console.log(indice)
    var aux = this.producto_modal.imgenes[0]
    this.producto_modal.imgenes[0] = this.producto_modal.imgenes[indice] 
    this.producto_modal.imgenes[indice] = aux
  } */

}
