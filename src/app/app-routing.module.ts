import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AgregarProductoComponent } from './paginas/agregar-producto/agregar-producto.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'catalogo', component: CatalogoComponent},
  {path:'agregar_producto', component: AgregarProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
