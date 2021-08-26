import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { empresaRoutingModule } from "./empresa-routing.module";
import { EmpresaComponent } from "./pages/empresa/empresa.component";
import { TarjetaPresentacionComponent } from "./pages/tarjeta-presentacion/tarjeta-presentacion.component";
import { FormularioPersonaComponent } from './pages/formulario-persona/formulario-persona.component';

@NgModule({
  declarations:[EmpresaComponent,TarjetaPresentacionComponent, FormularioPersonaComponent],
  imports:[CommonModule,FormsModule,ReactiveFormsModule,empresaRoutingModule]
})
export class empresaModule{

}