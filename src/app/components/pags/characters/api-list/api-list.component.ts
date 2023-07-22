import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of} from 'rxjs';
import { tap } from 'rxjs/Operators';
import { InfoGeneral } from 'src/app/shared/services/personajes.interface';
import { PersonajesService } from 'src/app/shared/services/personajes.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css'],
})
export class ApiListComponent implements OnInit {

  public infoGeneral: InfoGeneral;
  private pags = 1;


  constructor(private personajes: PersonajesService) {}

  ngOnInit(): void {
    this.getPersonajesServices();
  }

  private getPersonajesServices(): void {
    this.personajes
      .buscarPersonajes()
      // .pipe(tap((data: InfoGeneral) => console.log(data.results)))
      .subscribe({
        next: (data: InfoGeneral) => {
          this.infoGeneral = data;
          console.log('this.infoGeneral');
          console.log(this.infoGeneral);
        },
      });
  }

  nextPage(){
    if (this.infoGeneral.info.next !== null){
      this.personajes.cambiarPagina(this.infoGeneral.info.next).subscribe({
        next: (data) => {
          this.infoGeneral = data;
          console.log(data, 'la dataaaaa')
        }
      })
    }
  }

  prevPage(){
    if (this.infoGeneral.info.prev !== null){
      this.personajes.cambiarPagina(this.infoGeneral.info.prev).subscribe({
        next: (data) => {
          this.infoGeneral = data;
        }
      })
    }
  }
}
