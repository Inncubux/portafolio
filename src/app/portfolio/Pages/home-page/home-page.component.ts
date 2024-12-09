import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../Components/button/button.component';
import { initFlowbite } from 'flowbite';
import { CardComponent } from '../../Components/card/card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormComponent } from "../../Components/form/form.component";

@Component({
  selector: 'home-page',
  imports: [CardComponent, HttpClientModule, CommonModule, ButtonComponent, FormComponent],
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
