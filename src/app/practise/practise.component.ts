import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {
    user=""
  constructor() { }

  ngOnInit(): void {
  }
  welcome(){
    alert("welcome"+" "+this.user)
  }

}
