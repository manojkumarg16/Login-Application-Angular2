import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  

  constructor(private _http: Http) {
  }

  loginfn(user) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
      return this._http.get(`http://localhost:8080/Data?username=`+user.username+`&password=`+user.password)
            .map(user => user)
            .catch(error => Observable.throw(error));
            }


  savefn(data) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
      return this._http.post(`http://localhost:8080/Data`,JSON.stringify(data), options)
            .map(data => data)
            .catch(error => Observable.throw(error));
  }

}
