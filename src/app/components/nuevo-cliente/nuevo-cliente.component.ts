import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Film } from '../../film'

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

  film: Film;
  constructor(private clienteService: ClienteService) { }

  filmForm = new FormGroup({
    originalTitle: new FormControl('', Validators.required),
    spanishTitle: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  creaPelicula(): void{
    let datos = this.filmForm.value;
    this.clienteService.addFilm(datos).subscribe(film => 
      {
        alert("Se ha añadido la película");
        this.filmForm.reset();
      })
  }
}
