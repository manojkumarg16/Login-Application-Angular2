import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit() {
  } 

	data={
		username:"",
		password:"",
    email:"",
    mob:""
	 };
  constructor(private _service:AuthService, private _router: Router) { }


register()
	{
	   this._service.savefn(this.data).subscribe((res) => {
    window.alert("You have Successfully registered");
    this._router.navigate(['login']);
  });
}

cancel() {
    this._router.navigate(['login']);
}
  
 
}
