import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipagemComponent } from './tipagem/tipagem.component';
import { OriClassesComponent } from './ori-classes/ori-classes.component';
import { HerancaComponent } from './heranca/heranca.component';
import { EncapsulamentoComponent } from './encapsulamento/encapsulamento.component';
import { PolimorfismoComponent } from './polimorfismo/polimorfismo.component';
import { OriInterfaceComponent } from './ori-interface/ori-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    TipagemComponent,
    OriClassesComponent,
    HerancaComponent,
    EncapsulamentoComponent,
    PolimorfismoComponent,
    OriInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
