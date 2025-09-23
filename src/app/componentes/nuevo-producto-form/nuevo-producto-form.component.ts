import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductoService, Producto } from '../../services/producto/producto.service';

@Component({
  selector: 'app-nuevo-producto-form',
  templateUrl: './nuevo-producto-form.component.html',
  styleUrls: ['./nuevo-producto-form.component.css']
})
export class NuevoProductoFormComponent {

  constructor(
    private productoService: ProductoService
  ) {
  }


  producto : Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    talla: '',
    stock: 0,
    categoria: '',
    tipo_persona: '',
    imagen: undefined
  };

  archivoSeleccionado: File | null = null;


  onFileSelected(event: any) {
    this.archivoSeleccionado = event.target.files[0];
  } 


  cargar_producto(){
    this.producto.imagen = this.archivoSeleccionado || undefined; // Asignar el archivo seleccionado al producto
    this.productoService.crearProducto(this.producto).subscribe({
      next: (response) => {
        console.log('Producto creado:', response);
        alert('Producto creado exitosamente');
      },
      error: (error) => {
        console.error('Error al crear el producto:', error);
        alert('Error al crear el producto');
      }
    });

  }
}

