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

@NgModule({
  declarations: [AppComponent, NavbarComponent, InicioComponent],
  imports: [BrowserModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
