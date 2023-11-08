import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { PortadaComponent } from './componentes/portada/portada.component';
import { NavVarComponent } from './sub-components/nav-var/nav-var.component';
import { ProductsComponent } from './componentes/products/products.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { CategoriaPrendasComponent } from './componentes/categoria-prendas/categoria-prendas.component';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import { BuscarProductoComponent } from './componentes/buscar-producto/buscar-producto.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PortadaComponent,
    NavVarComponent,
    ProductsComponent,
    FooterComponent,
    ClientesComponent,
    CategoriaPrendasComponent,
    CatalogoComponent,
    BuscarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTabsModule,
    NzModalModule,
    NzButtonModule,
    NzGridModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
