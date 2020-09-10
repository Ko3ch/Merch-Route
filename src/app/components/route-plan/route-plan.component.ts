import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ISalespeople } from 'src/app/services/map-service/map.service';
import { Supermarkets, SupermarketsService } from 'src/app/services/supermarkets/supermarkets.service';
import { SalespeopleService } from 'src/app/services/salespeople-service/salespeople.service';
import { RouteDialogComponent } from './route-dialog/route-dialog.component';
import { RoutePlanService } from 'src/app/services/route-plan/route-plan.service';

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

const ELEMENT_DATA: Route[] = [
  {id: 2, supermarketid: 3, merchantid: 10, state: 'assigned',assigndate: 78934558903,admincomment: 'Pick the check', assignbyid: 4, gps: '72727,-1.233',merchantcomment: 'I have,', visitdate: 15626272},
  {id: 1, supermarketid: 2, merchantid: 5, state: 'assigned',assigndate: 78934558903,admincomment: 'say hi to her', assignbyid: 4, gps: '72727,-1.233',merchantcomment: 'shop was closed,', visitdate: 15626272}
];

@Component({
  selector: 'app-route-plan',
  templateUrl: './route-plan.component.html',
  styleUrls: ['./route-plan.component.css']
})
export class RoutePlanComponent {

  displayedColumns: string[] = ['No','assigndate','supermarketid' ,'merchantid', 'merchantcomment', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;


  constructor(
    private service: RoutePlanService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getAssignedRoutes().subscribe(data => {
      this.dataSource = data;
    })
  }
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(RouteDialogComponent, {
      width: '350px',
      data:obj
    });

  dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj){
    var d = new Date();
    let length = ELEMENT_DATA.length
    this.dataSource.push({
      id: length + 1,
      supermarketid: row_obj.supermarketid,
      merchantid: row_obj.merchantid,
      assigndate:d.getTime(),
      admincomment: row_obj.admincomment,
      state: 'assigned',
      assignbyid: row_obj.assignbyid, 
      gps: row_obj.gps,
      merchantcomment: row_obj.merchantcomment,
      visitdate: d.getTime(),      
    });

    this.table.renderRows();

    this.service.assignRoute(
      row_obj.merchantid,
      'assigned',
      row_obj.admincomment,
      row_obj.supermarketid,
      d.getTime(),
      4     
    ).subscribe()
    
  }

  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.merchantcomment = row_obj.merchantcomment;
      }
      return true;
    });

  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

}
