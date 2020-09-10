import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { AgmCoreModule } from '@agm/core';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCardModule } from'@angular/material/card'

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MapsComponent } from './components/maps/maps.component';
import { SalespersonComponent } from './components/salesperson/salesperson.component';
import { RoutePlanComponent } from './components/route-plan/route-plan.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './components/salesperson/dialog-box/dialog-box.component';
import { RouteDialogComponent } from './components/route-plan/route-dialog/route-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapsComponent,
    SalespersonComponent,
    RoutePlanComponent,
    NavbarComponent,
    DialogBoxComponent,
    RouteDialogComponent,
  ],

  imports: [
    MatDialogModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAnxP1i2NTjeUDufyWABF29v5qLvLMwBw8'
    }),
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
