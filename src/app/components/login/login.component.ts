import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router){}

  goToMap(map:string):void {
    this.router.navigate([`${map}`])
  }

  ngOnInit(): void {
  }

}
