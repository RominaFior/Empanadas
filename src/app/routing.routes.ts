import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { InicioComponent } from "./components/inicio/inicio.component";
import { AboutComponent } from "./components/about/about.component";
import { EmpanadasComponent } from "./components/empanadas/empanadas.component";
import { EmpanadaComponent } from "./components/empanada/empanada.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";

const APP_ROUTES: Routes = [
  { path: "home", component: InicioComponent },
  { path: "about", component: AboutComponent },
  { path: "empanadas", component: EmpanadasComponent },
  { path: "empanada/:id", component: EmpanadaComponent },
  { path: "buscador/:term", component: BuscadorComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
