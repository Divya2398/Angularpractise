import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users =[
    {
      Name : "divya",
      Password:12345,
      verified:true

    },
    {
      Name : "kala",
      Password:12345,
      verified:true
    },
    {
      Name : "venkat",
      Password:12345,
      verified:true
    },
  
  ]
  constructor() { }

  ngOnInit(): void {
  }
 
}
