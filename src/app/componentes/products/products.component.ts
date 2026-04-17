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
