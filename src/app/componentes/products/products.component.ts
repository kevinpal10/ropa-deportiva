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
  busqueda: string = '';
  filtroActual: string = 'todo';

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
      this.productos_aux = this.productos;
      console.log(this.productos);
    });
  }

  constructor(
    private productoService: ProductoService
  ) {}

  producto_modal: any = {
    "nombre": "",
    "precio_neg": 0,
    "precio": 0,
    "color": "",
    "talla": "",
    "stock": 0,
    "categoria": "",
    "descripcion": "",
    "imagen": ""
  };

  // Aplica filtro de categoría + búsqueda por texto
  private aplicarFiltros(): void {
    let base = this.productos;

    switch (this.filtroActual) {
      case 'mujeres':
        base = base.filter(item => item.tipo_persona === 'Mujer');
        break;
      case 'hombres':
        base = base.filter(item => item.tipo_persona === 'Hombre');
        break;
      case 'niños':
        base = base.filter(item => item.tipo_persona === 'Ninos');
        break;
    }

    const texto = this.busqueda.trim().toLowerCase();
    if (texto) {
      base = base.filter(item =>
        item.nombre.toLowerCase().includes(texto) ||
        (item.categoria || '').toLowerCase().includes(texto)
      );
    }

    this.productos_aux = base;
  }

  // Cambia la categoría de productos (desde las pestañas)
  changeDates(cadena: string): void {
    this.filtroActual = cadena;
    this.aplicarFiltros();
  }

  // Filtro por búsqueda de texto
  filtrar(): void {
    this.aplicarFiltros();
  }

  // Muestra el modal con la información del producto
  showModal(producto: any): void {
    this.isVisible = true;
    this.producto_modal = producto;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}