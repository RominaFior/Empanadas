import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { InicioComponent } from "./components/inicio/inicio.component";
import { AboutComponent } from "./components/about/about.component";
import { EmpanadasComponent } from "./components/empanadas/empanadas.component";

const APP_ROUTES: Routes = [
  { path: "home", component: InicioComponent },
  { path: "about", component: AboutComponent },
  { path: "empanadas", component: EmpanadasComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
