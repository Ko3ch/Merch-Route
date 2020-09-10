import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { SalespeopleService } from 'src/app/services/salespeople-service/salespeople.service';

export interface ISalespeople {

  id: number;
  name: string;
  email: string;
  password: string;
  typeid: number;

}

const ELEMENT_DATA: ISalespeople[] = [
  {id: 1, name: 'Tom Tom',email: 'tomko3ch@gmail.com', password: 'sddd122', typeid: 3},
  {id: 2, name: 'Mansa Musa',email: 'nice@gmail.com', password: 'seee122', typeid: 4},
  {id: 3, name: 'Marqus Aurelius',email: 'here@gmail.com', password: 'sffff122', typeid: 4},
  {id: 4, name: 'Picasso',email: 'there@gmail.com', password: 'sggg122', typeid: 4},
  {id: 5, name: 'Andrew Carnegie',email: 'now@gmail.com', password: 'shhhh122', typeid: 3},
  {id: 9, name: 'Koech Koech',email: 'me22@gmail.com', password: 'sggggg22', typeid: 3},
];

@Component({
  selector: 'app-salesperson',
  templateUrl: './salesperson.component.html',
  styleUrls: ['./salesperson.component.css']
})
export class SalespersonComponent {

  displayedColumns: string[] = ['No', 'name', 'email', 'type', 'password', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialog: MatDialog, private service: SalespeopleService) { }

  ngOnInit(){
    this.service.getSalesPersons().subscribe(data => {
      console.log(JSON.stringify(data));
      this.dataSource = data;
      
    })
  }
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
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
    let length = ELEMENT_DATA.length
    this.dataSource.push({
      id: length + 1,
      name:row_obj.name,
      email: row_obj.email,
      password: row_obj.password,
      typeid: row_obj.typeid
    });
    this.table.renderRows();

    this.service.addSalesPersons(
      
      length+1,
      row_obj.name,
      row_obj.email,
      row_obj.password,
      row_obj.typeid)
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.email = row_obj.email;
        value.password = row_obj.password;
        value.typeid = row_obj.typeid;
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
