import { Component, OnInit } from "@angular/core";
import { EmpanadasService, Empanada } from "../../services/empanadas.service";

@Component({
  selector: "app-empanadas",
  templateUrl: "./empanadas.component.html",
  providers: [EmpanadasService]
})
export class EmpanadasComponent implements OnInit {
  empanadas: Empanada[] = [];
  constructor(private empanadasService: EmpanadasService) {}

  ngOnInit() {
    this.empanadas = this.empanadasService.getEmpanadas();
    console.log(this.empanadas);
  }
}
