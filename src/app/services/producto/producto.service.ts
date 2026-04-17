import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  precio: number;
  talla: string;
  stock: number;
  imagen?: File;
  categoria: string;
  tipo_persona: string;
}

@Injectable({
  providedIn: 'root'
})


export class ProductoService {
  private apiUrl = 'https://modaestilo-johnnysan.com/api/productos/';

  constructor(private http: HttpClient) {}

  productoToFormData(producto: Producto): FormData {
    const formData = new FormData();
    formData.append('nombre', producto.nombre);
    formData.append('descripcion', producto.descripcion);
    formData.append('precio', producto.precio.toString());
    formData.append('talla', producto.talla);
    formData.append('stock', producto.stock.toString());
    formData.append('categoria', producto.categoria);
    formData.append('tipo_persona', producto.tipo_persona);

    if (producto.imagen) {
      formData.append('imagen', producto.imagen);
    }


    return formData;
  }


  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  crearProducto(data: any): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, data);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }

  actualizarProducto(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}${id}/`, producto);
  }
}
