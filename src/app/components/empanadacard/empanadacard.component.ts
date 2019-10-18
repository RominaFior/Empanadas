import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-empanadacard",
  templateUrl: "./empanadacard.component.html"
})
export class EmpanadacardComponent implements OnInit {
  @Input() empanada: any = {};
  @Input() index: number;

  constructor(private router: Router) {}

  ngOnInit() {}

  verEmpanada() {
    this.router.navigate(["/empanada", this.index]);
    console.log(this.index);
  }
}
