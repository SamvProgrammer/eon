import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './layout/contenido/contenido.component';

const routes: Routes = [{
  path:'',component:ContenidoComponent,loadChildren:()=>import('./modules/empresas/empresa.module').then(m => m.empresaModule)
},{
  path:'tablas',component:ContenidoComponent,loadChildren:()=>import('./modules/tablas/tablas.module').then(m => m.tablasModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
