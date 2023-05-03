import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoGeneral } from './personajes.interface';
import { environment } from 'src/environments/environment';
import { tap,  } from 'rxjs/Operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {

  constructor(private http: HttpClient) {}

  buscarPersonajes(pag = 1, personajesPorPag = 20): Observable<InfoGeneral> {
    const filtro = `${environment.apiUrl}`;
    this.http.get<InfoGeneral>(filtro);
    
    const indexInicaial = ( pag - 1)*personajesPorPag;
    const indexFinal = indexInicaial + personajesPorPag;
    const pagPersonajes = [];

    for ( let i = indexInicaial; i < indexFinal; i ++) {
      if ( i < 100 ) {
        pagPersonajes.push(`Personajes${i + 1}`);
      }
    }
    return pagPersonajes
  }

  optenerPersonajes() {
    // return this.http.get<Personaje>(`${environment.apiUrl}/${id}`)
  }
}
