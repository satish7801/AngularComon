import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns = ['id', 'cityName', 'countryName'];

  ColumnList: any[] = [
    {
      column: "id",
      label: "Id",
      datanamefromApi: "id", // Access the 'name' property from the 'element' object
    },
    {
      column: "cityName",
      label: "City Name",
      datanamefromApi: "name", // Access the 'name' property from the 'element' object
    },
    {
      column: "countryName",
      label: "Country ID",
      datanamefromApi: "countryId", // Access the 'countryId' property from the 'element' object
    },
    // Add more items if needed...
  ];


  LabelList: any[] = [];



  cityList: any[] = [
    { id: "1", name: "City 1", countryId: "C1" },
    { id: "2", name: "City 2", countryId: "C2" },
    // Add more items if needed...
  ];

 constructor() {

 }

}
