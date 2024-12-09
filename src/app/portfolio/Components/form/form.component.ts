import { Component } from '@angular/core';

@Component({
  selector: 'port-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  showPopup(): void {
    alert("Enviando...");
    alert("Enviado");
  }
}
