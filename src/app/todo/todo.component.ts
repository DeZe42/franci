import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tennivalo: FormControl = new FormControl ("")
  lista: any[] = []
  szerkeszto: FormControl = new FormControl ("")

  constructor() { }

  ngOnInit(): void {
    let adat = localStorage.getItem("lista")
    if(adat != null) {
     this.lista = JSON.parse(adat)
    }
  }
  
  hozzaadas() {
    let adat = {
      dolog: this.tennivalo.value
    }
    this.lista.push(adat)
    localStorage.setItem("lista", JSON.stringify(this.lista)) 
  }

  deletee(element: string) {
    this.lista = this.lista.filter(asde => {
      return asde.tennivalo != element
    })
    console.log(this.lista)
  }
  szerkesztes(element: string) {
    this.lista.forEach(listaElem => {
      if(element == listaElem.dolog) {
        listaElem.dolog = this.szerkeszto.value;
      }
    })
  }
}
