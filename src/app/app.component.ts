import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  elsoLepes: FormControl = new FormControl("")
  masodikLepes: FormControl = new FormControl("")
  harmadikLepes: FormControl = new FormControl("") 
  receptek: any[]= []

   
  constructor() {

  }

  ngOnInit() {
    let adat= localStorage.getItem("receptek")
    if(adat != null ) {
      this.receptek = JSON.parse(adat)
    }

  }  

  hozzaadas() {
    let adat = {
      elsoLepes: this.elsoLepes.value,
      masodikLepes: this.masodikLepes.value,
      harmadikLepes: this.harmadikLepes.value
    }
    this.receptek.push(adat)
    localStorage.setItem("receptek",JSON.stringify(this.receptek))

  }

}