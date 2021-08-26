import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TablePostComponent } from "./pages/table-post/table-post.component";

const rutas:Routes = [
    {path:'',children:[
        {path:'post',component:TablePostComponent}
    ]}
 ];
 
 @NgModule({
     imports:[RouterModule.forChild(rutas)]
 })
 export class tablasRoutingModule{
 
 
 }