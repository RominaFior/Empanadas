import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { InicioComponent } from "./components/inicio/inicio.component";
/* import { Name2Component } from './';
import { Name3Component } from './';
import { Name4Component } from './';
import { PageNotFoundComponent } from './'; */

const APP_ROUTES: Routes = [
  { path: "home", component: InicioComponent },
  /*  { path: 'path2', component: Name2Component },
  { path: 'path3', component: Name3Component },
  { path: 'path4', component: Name4Component }, */
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
