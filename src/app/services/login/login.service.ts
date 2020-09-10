import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as Rx from 'rxjs/Rx';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Url } from 'url';

import { environment as envProd} from '../../../environments/environment.prod';

import { environment as envDev} from '../../../environments/environment';


import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private headers = new HttpHeaders();

  constructor(private httpClient: HttpClient, private router: Router) {
    this.headers = this.headers.set('Content-Type', 'application/json')
  }

  loginUser(email: string, password: string) {
          let param = new HttpParams();
          param = param.append('email', email);
          param = param.append('password', password);
          return this.httpClient.get(`http://05bbf9d118fe.ngrok.io/login/angular`, {
            headers: this.headers,
            params: param,
          }).pipe(map(auth => {
              localStorage.setItem('currentUser', JSON.stringify(auth));
              if (!auth['isAuthenticated']) {
                return false;
              }
              this.router.navigate(['/maps']);
              return auth;
          }), catchError( error => {
            alert(error.error.error);
            return throwError( error );
          }));

  }
}

