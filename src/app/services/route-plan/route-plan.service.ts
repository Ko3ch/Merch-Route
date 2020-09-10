import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as Rx from 'rxjs/Rx';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Url } from 'url';

import { environment as envProd} from '../../../environments/environment.prod';

import { environment as envDev} from '../../../environments/environment';


import { Router } from '@angular/router';

export interface Route {

  id: number,
  supermarketid: number,
  merchantid: number,
  state: string,
  assigndate : number,
  admincomment: string,
  assignbyid: number, 
  gps: string,
  merchantcomment: string,
  visitdate: number,

}


@Injectable({
  providedIn: 'root'
})
export class RoutePlanService {

  private headers = new HttpHeaders();

  constructor(private httpClient: HttpClient, private router: Router) {
    this.headers = this.headers.set('Content-Type', 'application/json')
  }

  getAssignedRoutes(): Observable<Route[]> {
    return this.httpClient.get<Route[]>(`http://05bbf9d118fe.ngrok.io/routes/assigned`, {
      headers : this.headers,
    }
    );
  }

  assignRoute(salespersonID: number, state: string, admincomment: string, shopId: number, assignDateTime: number, assignbyid: number) {
    let param = new HttpParams();
    param = param.append('supermarketid',shopId.toLocaleString());
    param = param.append('state', state);
    param = param.append('admincomment', admincomment);
    param = param.append('assigndate',  assignDateTime.toLocaleString());
    param = param.append('assignbyid', assignbyid.toLocaleString());

    return this.httpClient.get(`http://05bbf9d118fe.ngrok.io/${salespersonID}`, {
      headers: this.headers,
      params: param,
    });
}
}

