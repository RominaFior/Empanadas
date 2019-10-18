import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EmpanadasService, Empanada } from "../../services/empanadas.service";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html"
})
export class BuscadorComponent implements OnInit {
  empanadas: Empanada[] = [];
  termino: string;
  @Input() index: number;
  @Input() empanada: string;

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
  verEmpanada() {
    this.router.navigate(["/empanada", this.index]);
    console.log(this.index);
  }
}
