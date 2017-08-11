import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() {
  }
  title = 'Login Page';
  isTrue = false;
  user = {
    username: '',
    password: ''
  };

  constructor(private _service:AuthService, private _router: Router) {

  }

  login() {
    this._service.loginfn(this.user).subscribe((res) => {
      var res2 = JSON.parse(res._body);
      res2.map((res,i) =>{
          if(res.password == this.user.password && res.username == this.user.username){
            window.localStorage.setItem('authkey',this.user.username);
            this._router.navigate(['navone']);
          }
      })
      if(res2.length == 0) {
        window.alert("Please Enter valid Credentials");
        this.user = {
              username: '',
              password: ''
          };
      }
      
  });
}
}