import { Component, OnInit } from "@angular/core";
import { EmpanadasService, Empanada } from "../../services/empanadas.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-empanadas",
  templateUrl: "./empanadas.component.html",
  providers: [EmpanadasService]
})
export class EmpanadasComponent implements OnInit {
  empanadas: Empanada[] = [];
  constructor(
    private empanadasService: EmpanadasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.empanadas = this.empanadasService.getEmpanadas();
  }
  verEmpanada(idx: number) {
    this.router.navigate(["/empanada", idx]);
  }
}
