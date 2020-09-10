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
export class MapService {

  private headers = new HttpHeaders();

  constructor(private httpClient: HttpClient, private router: Router) {
    this.headers = this.headers.set('Content-Type', 'application/json')
  }

  getSalespeople(page: number): Observable<ISalespeople[]> {
    return this.httpClient.get<ISalespeople[]>(`${envDev.BASE_URL}/`, {
      headers : this.headers,
    }
    );
  }
}

