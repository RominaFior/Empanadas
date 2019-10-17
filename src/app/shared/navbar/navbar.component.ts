import { Component, OnInit } from "@angular/core";
import { EmpanadasService } from "../../services/empanadas.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  providers: [EmpanadasService]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
