import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { EntrarComponent } from './componentes/entrar/entrar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

    CadastrarComponent,
    EntrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
