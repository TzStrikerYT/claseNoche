import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; //paso 3

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  capturar(pato: NgForm) {
    // paso 3

    try {
      if (
        !pato.value.age||
        !pato.value.name||
        !pato.value.lastName
      ) {
        throw 'Todos los valores deben ser diligenciados';
      }

      alert(`${pato.value.name}\n${pato.value.lastName}\n${pato.value.age}`);
      pato.reset()
    } catch (error) {
      alert(`${error}`);
    }
  }
}
