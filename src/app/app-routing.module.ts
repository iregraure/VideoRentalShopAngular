import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: ListadoComponent },
  { path: 'nuevaPelicula', component: NuevoClienteComponent },
  { path: 'detalles/:id', component: PeliculaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
