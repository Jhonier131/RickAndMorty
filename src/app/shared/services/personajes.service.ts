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

  buscarPersonajes(): Observable<InfoGeneral>{
    const filtro = `${environment.apiUrl}`;
    return this.http.get<InfoGeneral>(filtro);
    
  }

  cambiarPagina(pag){
    return this.http.get<any>(pag)
  }

  filtrarPersonaje(nombrePersonaje: string): Observable<InfoGeneral> {
    const nombre = `?name=${nombrePersonaje}`;
    const filtro = `${environment.apiUrl}`;
    return this.http.get<InfoGeneral>(`${filtro}/${nombre}`);
  }


}
