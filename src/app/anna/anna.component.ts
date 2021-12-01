import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-anna',
  templateUrl: './anna.component.html',
  styleUrls: ['./anna.component.scss']
})
export class AnnaComponent implements OnInit {
lista: any[] = []
firstName: FormControl = new FormControl("")
lastName: FormControl = new FormControl("") 
email: FormControl = new FormControl("") 
password: FormControl = new FormControl("") 
search: FormControl = new FormControl("") 

  
  constructor() { }

  ngOnInit(): void {
    let adat = localStorage.getItem("registeredUsers")
    if(adat != null){
      this.lista = JSON.parse(adat)

          }
         
  }
  
  registered() {
    let szia = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      password: this.password.value

    }
     this.lista.push(szia)
      localStorage.setItem("registeredUsers",JSON.stringify(this.lista))
  }

  delete() {
    this.lista.forEach(element => { 
      if(element.email== this.search.value) {
        console.log("asd")
      }

      console.log(element.email)
      
    });
  }
}
