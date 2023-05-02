import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoGeneral } from './personajes.interface';
import { environment } from 'src/environments/environment';
import { tap,  } from 'rxjs/Operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  constructor(private http: HttpClient) {}

  buscarPersonajes(query = '', pag = 1): Observable<InfoGeneral> {
    const filtro = `${environment.apiUrl}`;
    return this.http.get<InfoGeneral>(filtro);
  }

  optenerPersonajes() {
    // return this.http.get<Personaje>(`${environment.apiUrl}/${id}`)
  }
}
