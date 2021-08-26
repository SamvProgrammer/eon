import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContenidoComponent } from './layout/contenido/contenido.component';
import { FooterComponent } from './layout/footer/footer.component';
import { coreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenidoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    coreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
