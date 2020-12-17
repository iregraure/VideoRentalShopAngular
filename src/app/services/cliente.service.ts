import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FILMS } from '../mock-film';
import { Film } from '../film';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // Le pasamos el HttpClient en el constructor para poder hacer las peticiones
  constructor(private http: HttpClient) { }

  // Método que devuelve un observable con los datos de todos los clientes
  filmsList(): Observable<any>
  {
    const url = 'localhost:8080/api/film';
    return this.http.get(url);
  }

  // Por problemas con los CORS utilizo un mock
  mockFilmList(): Observable<Film[]>
  {
    return of(FILMS);
  }

  // Método que devuelve los datos de un cliente sabiendo su id
  filmDetails(id: number): Observable<any>
  {
    const url = `localhost:8080/api/film/${id}`;
    return this.http.get(url);
  }

  // Por problemas con los CORS utilizo un mock
  mockFilmDetails(id: number): any
  {
    return FILMS.find(f => f.id == id);
  }

  // Método para añadir una película
  addFilm(film: Film): Observable<any>
  {
    const url = 'localhost:8080/api/film';
    return this.http.post(url, film);
  }

}
