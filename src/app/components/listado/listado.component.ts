import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  // Variable para guardar el listado de películas
  films: any[] = [];

  // Al constuctor le pasamos el servicio para poder utilizar sus métodos
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    // Al cargar el componente utilizamos el servicio para guardar los datos de las películas en la variable
    this.clienteService.mockFilmList().subscribe( res =>
      {
        this.films = res;
      })
  }

}
