import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Film } from 'src/app/film';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  film: Film;

  constructor(private route: ActivatedRoute, private location: Location, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getFilm();
  }

  goBack(): void {
    this.location.back();
  }

  getFilm(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.film = this.clienteService.mockFilmDetails(id);
  }

}
