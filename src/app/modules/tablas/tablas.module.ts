import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { coreModule } from "src/app/core/core.module";
import { TablePostComponent } from "./pages/table-post/table-post.component";
import { PostssService } from "./services/postss.service";
import { tablasRoutingModule } from "./tablas-routing.module";

@NgModule({
    declarations:[TablePostComponent],
    imports:[CommonModule,FormsModule,tablasRoutingModule,HttpClientModule,coreModule],
    providers:[PostssService]
  })
  export class tablasModule{
  
  }