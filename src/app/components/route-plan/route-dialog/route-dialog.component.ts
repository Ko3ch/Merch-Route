import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISalespeople } from 'src/app/services/map-service/map.service';
import { Supermarkets, SupermarketsService } from 'src/app/services/supermarkets/supermarkets.service';
import { RoutePlanService } from 'src/app/services/route-plan/route-plan.service';
import { SalespeopleService } from 'src/app/services/salespeople-service/salespeople.service';

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


@Component({
  selector: 'app-route-dialog',
  templateUrl: './route-dialog.component.html',
  styleUrls: ['./route-dialog.component.css']
})
export class RouteDialogComponent {

  salespersons: ISalespeople[] = []
  supermarkets: Supermarkets[] = []

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<RouteDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Route,
    private service: SupermarketsService,
    private service1: SalespeopleService 
    ) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  ngOnInit(){
    this.service.getSupermarkets().subscribe(data => {
      this.supermarkets = data;
    })
    this.service1.getSalesPersons().subscribe(data => {
      this.salespersons = data;
    })
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }


}
