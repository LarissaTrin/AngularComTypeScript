import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncapsulamentoComponent } from './encapsulamento/encapsulamento.component';
import { HerancaComponent } from './heranca/heranca.component';
import { OriClassesComponent } from './ori-classes/ori-classes.component';
import { OriInterfaceComponent } from './ori-interface/ori-interface.component';
import { PolimorfismoComponent } from './polimorfismo/polimorfismo.component';
import { TipagemComponent } from './tipagem/tipagem.component';

const routes: Routes = [
  { path: 'tipagem', component: TipagemComponent},
  { path: 'classes', component: OriClassesComponent},
  { path: 'heranca', component: HerancaComponent},
  { path: 'encapsulamento', component: EncapsulamentoComponent},
  { path: 'polimorfismo', component: PolimorfismoComponent},
  { path: 'interface', component: OriInterfaceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
