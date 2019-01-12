import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit {

  constructor() { }

  const palabras:string[] = ["Guardar","Tomar","Raton"]

  ngOnInit() {  }


  
}
