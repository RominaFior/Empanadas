import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EmpanadasService, Empanada } from "../../services/empanadas.service";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html"
})
export class BuscadorComponent implements OnInit {
  empanadas: Empanada[] = [];
  termino: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private empanadaService: EmpanadasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params["term"];
      this.empanadas = this.empanadaService.buscador(params["term"]);
    });
  }
  verEmpanada(idx) {
    this.router.navigate(["/empanada", idx]);
    console.log(idx);
  }
}
