import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string;
  password : string;
  message : string;

  authUser() {
   
    if(this.username == 'zolostay' && this.password=='kireeti'){
      this.router.navigate(['/questions'])
      this.message = '';
    }
    else{
      this.message = "Please Enter Corrrect password or Userrname";
    }
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
