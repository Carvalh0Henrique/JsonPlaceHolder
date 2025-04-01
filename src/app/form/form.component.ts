import { Component, OnInit } from '@angular/core';
import { PlaceHolderService } from '../place-holder.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit {
  
  Dados: any[] = [];

  constructor(private placeHolderService: PlaceHolderService) { }

  ngOnInit(): void {
    this.placeHolderService.getDados().subscribe({
      next: (Dados) =>{
        this.Dados = Dados;}
      }
    )
  }
}
