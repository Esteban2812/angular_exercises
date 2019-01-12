import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PalabrasComponent } from './palabras/palabras.component';
import { SignificadoComponent } from './significado/significado.component';

@NgModule({
  declarations: [
    AppComponent,
    PalabrasComponent,
    SignificadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
