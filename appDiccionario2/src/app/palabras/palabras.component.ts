import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  palabras:string[] = ["Guardar","Tomar","Raton"]

  @Output() palabraSelect  = new EventEmitter()

   palabraDefault:string="N/A"
  palabraSelected(){

    this.palabraSelect.emit(this.palabraDefault)
  }


}
