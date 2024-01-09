import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PersonajesService } from '../../services/personajes.service';
import { ObservableService } from '../../services/observable.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public formulario;

  constructor( private personajesService: PersonajesService,  private formBuilder: FormBuilder, private dataService: ObservableService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
    this.formulario = this.formBuilder.group({
      buscador: '',
    })
  }

  public barraBusqueda(): void {

    console.log(this.formulario.controls.buscador.value);

    this.personajesService.filtrarPersonaje(this.formulario.controls.buscador.value).subscribe(resp => {

      this.dataService.cambiarValor(resp)
      console.log('respuestaPersonaje')
      console.log(resp)
    })
  }
}
