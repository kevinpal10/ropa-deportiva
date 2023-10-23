import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'catalogo', component: CatalogoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
