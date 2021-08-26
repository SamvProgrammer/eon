import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmpresaComponent } from "./pages/empresa/empresa.component";


const rutas:Routes = [
   {path:'empresa',children:[
       {path:'',component:EmpresaComponent}
   ]}
];

@NgModule({
    imports:[RouterModule.forChild(rutas)]
})
export class empresaRoutingModule{


}