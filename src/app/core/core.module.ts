import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { interceptorServices } from "./interceptors/interceptores";

@NgModule({
    imports:[CommonModule],
    providers:[ {
        provide: HTTP_INTERCEPTORS,
        useClass: interceptorServices, multi: true
      },]
})
export class coreModule{

}