import { Component, OnInit } from '@angular/core';
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
          console.log('info ' , this.infoGeneral.results)
        },
      });
  }
}
