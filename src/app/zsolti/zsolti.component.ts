import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zsolti',
  templateUrl: './zsolti.component.html',
  styleUrls: ['./zsolti.component.scss']
})
export class ZsoltiComponent implements OnInit {

  list: any[] = []

  constructor() { }

  ngOnInit(): void {
    let data = localStorage.getItem("registeredUsers")
    if (data != null) {
      this.list = JSON.parse(data)
    }
  }

}
