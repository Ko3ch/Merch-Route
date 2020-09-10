import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as Rx from 'rxjs/Rx';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Url } from 'url';

import { environment as envProd} from '../../../environments/environment.prod';

import { environment as envDev} from '../../../environments/environment';


import { Router } from '@angular/router';

export interface ISalespeople {
  id: number;
  name: string;
  email: string;
  password: string;
  typeid: number;
}


@Injectable({
  providedIn: 'root'
})
export class SalespeopleService {

  private headers = new HttpHeaders();

  constructor(private httpClient: HttpClient, private router: Router) {
    this.headers = this.headers.set('Content-Type', 'application/json')
  }

  getSalesPersons(): Observable<ISalespeople[]> {
    return this.httpClient.get<ISalespeople[]>(`http://05bbf9d118fe.ngrok.io/merchants`, {
      headers : this.headers,
    }
    );
  }

  addSalesPersons(salespersonID: number, name: string, email: string, password: string, typeId: number) {
    let param = new HttpParams();
    param = param.append('id', salespersonID.toLocaleString());
    param = param.append('name', name);
    param = param.append('email', email);
    param = param.append('password', password);
    param = param.append('typeid', typeId.toLocaleString());

    return this.httpClient.post<ISalespeople>(`http://05bbf9d118fe.ngrok.io/${salespersonID}`,{
      headers: this.headers,
      params: param,
    }
    );
  }
}

