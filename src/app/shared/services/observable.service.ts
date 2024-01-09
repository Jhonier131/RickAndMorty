import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  private miObservable = new BehaviorSubject<any>('Valor inicial');

  // Método para cambiar el valor del observable
  cambiarValor(valor: any) {
    this.miObservable.next(valor);
  }

  // Método para obtener el observable
  obtenerObservable() {
    return this.miObservable.asObservable();
  }
}
