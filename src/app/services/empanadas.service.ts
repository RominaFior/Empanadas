import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EmpanadasService {
  private empanadas: Empanada[] = [
    {
      nombre: "Carne cortada al cuchillo",
      desc: "Ternera, cebolla, aceitunas y huevo",
      img: "assets/img/carne_cortada.jpg",
      precio: "2,50€",
      id: 0
    },
    {
      nombre: "Carne picada",
      desc: "Ternera picada, cebolla, aceitunas y huevo",
      img: "assets/img/carne.jpg",
      precio: "2,30€",
      id: 1
    },
    {
      nombre: "Cebolla y queso",
      desc: "Cebolla asada, queso tierno y orégano",
      img: "assets/img/cebolla.jpg",
      precio: "1,50€",
      id: 2
    },
    {
      nombre: "Atún",
      desc: "Atún, cebolla y pimiento rojo al estilo gallego",
      img: "assets/img/atun.jpg",
      precio: "1,50€",
      id: 3
    },
    {
      nombre: "Frita",
      desc: "Masa frita rellena de carne, cebolla y pimientos",
      img: "assets/img/frita.jpg",
      precio: "1,50€",
      id: 4
    },
    {
      nombre: "Jamón y queso",
      desc: "Jamón de york tierno, mezcla de quesos suaves",
      img: "assets/img/jamon.jpg",
      precio: "1,50€",
      id: 5
    },
    {
      nombre: "Pollo",
      desc: "Pollo cocinado a fuego lento con cebolla y pimiento rojo",
      img: "assets/img/pollo.jpg",
      precio: "1,50€",
      id: 6
    },
    {
      nombre: "Espinacas",
      desc:
        "Espinacas frescas cocinadas, ajo, almendras, nuez moscada y aceite de oliva",
      img: "assets/img/espinacas.jpg",
      precio: "1,50€",
      id: 7
    },
    {
      nombre: "Humita",
      desc: "Maíz cocinado al estilo argentino",
      img: "assets/img/humita.jpg",
      precio: "1,50€",
      id: 8
    }
  ];

  getEmpanadas(): Empanada[] {
    return this.empanadas;
  }
  getEmpanada(id: string) {
    return this.empanadas[id];
  }

  buscador(termino: string): Empanada[] {
    let empanadasArr: Empanada[] = [];
    termino = termino.toLocaleLowerCase();
    for (const empanada of this.empanadas) {
      let nombre = empanada.nombre.toLocaleLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        empanadasArr.push(empanada);
      }
    }
    return empanadasArr;
  }
}

export interface Empanada {
  nombre: string;
  desc: string;
  img: string;
  precio: string;
  id: number;
}
