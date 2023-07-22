import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public formulario;

  constructor( private personajesService: PersonajesService) { }

  ngOnInit(): void {
  }

  public buildForm() {
    // this.formulario = this.formBuilder.group({
    //   buscador: '',
    // })
  }

  public barraBusqueda(nombrePersonaje: string): void {
    this.personajesService.filtrarPersonaje(nombrePersonaje).subscribe(resp => {
      console.log('respuestaPersonaje')
      console.log(resp)
    })
  }

}
