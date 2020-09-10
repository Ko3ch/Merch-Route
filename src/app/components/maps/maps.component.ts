import { Component, OnInit } from '@angular/core';
import {MapService, ISalespeople} from '../../services/map-service/map.service';
import { SalespeopleService } from 'src/app/services/salespeople-service/salespeople.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  latitude =  -1.2921;
  longitude = 36.8219;
  zoom = 13;

  salespersons: ISalespeople[] = [];

  positions = [{
    "city": "Westlands",
    "latitude": -1.268665592,
    "longitude": 36.805996776
  }, 
  {
    "city": "Eastleigh",
    "latitude": -1.266656,
    "longitude": 36.8499966
  }, 
  ]
  constructor(private apiService: MapService, private service: SalespeopleService) { }

  ngOnInit(){
    this.service.getSalesPersons().subscribe(data => {
      this.salespersons = data;
    })
  }

}
