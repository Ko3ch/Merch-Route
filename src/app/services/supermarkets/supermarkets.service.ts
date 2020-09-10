import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment as envDev} from '../../../environments/environment';
import { Router } from '@angular/router';


export interface Supermarkets {

    id: number;
    name: string;
    contact: number;
    address: string;
  }
  

@Injectable({
  providedIn: 'root'
})
export class SupermarketsService {

  private headers = new HttpHeaders();

  constructor(private httpClient: HttpClient, private router: Router) {
    this.headers = this.headers.set('Content-Type', 'application/json')
  }

  getSupermarkets(): Observable<Supermarkets[]> {
    return this.httpClient.get<Supermarkets[]>(`${envDev.BASE_URL}/supermarkets`, {
      headers : this.headers,
    }
    );
  }
}