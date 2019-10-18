import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmpanadasService } from "../../services/empanadas.service";

@Component({
  selector: "app-empanada",
  templateUrl: "./empanada.component.html",
  styles: []
})
export class EmpanadaComponent implements OnInit {
  empanada: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private empanadasService: EmpanadasService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params["id"]);

      this.empanada = this.empanadasService.getEmpanada(params["id"]);
    });
  }
}
