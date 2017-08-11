import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css']
})
export class UserEntryComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
logout() {
	localStorage.removeItem('authkey');
	this._router.navigate(['login']);
}
}
