import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//SERVICES
import { EmpanadasService } from "./services/empanadas.service";

//ROUTES
import { APP_ROUTING } from "./routing.routes";

// COMPONENTS
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { AboutComponent } from "./components/about/about.component";
import { EmpanadasComponent } from "./components/empanadas/empanadas.component";
import { EmpanadaComponent } from './components/empanada/empanada.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { EmpanadacardComponent } from './components/empanadacard/empanadacard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AboutComponent,
    EmpanadasComponent,
    EmpanadaComponent,
    BuscadorComponent,
    EmpanadacardComponent
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [EmpanadasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
