import { Component, OnInit } from "@angular/core";
import { EmpanadasService, Empanada } from "../../services/empanadas.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  providers: [EmpanadasService]
})
export class NavbarComponent implements OnInit {
  empanada: any = {};
  empanadasEncontradas: Empanada[] = [];
  constructor(
    private empanadasService: EmpanadasService,
    private router: Router
  ) {}

  ngOnInit() {}

  buscarEmpanada(term) {
    this.router.navigate(["/buscador", term]);
  }
}
