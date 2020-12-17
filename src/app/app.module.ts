import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    NuevoClienteComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
