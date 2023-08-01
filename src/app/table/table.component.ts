import { Component, Input, OnInit } from '@angular/core';
import { singleColumn } from '../tableinterface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = [];
  ColumnList: singleColumn[] = [];
  @Input() LabelList: string[] = [];
  @Input() cityList: any[] = [];

  ngOnInit(): void {
  this.displayedColumns = Object.keys(this.cityList[0]); 

  for (let index = 0; index < this.displayedColumns.length; index++) {   
    if(this.LabelList[index] == null || this.LabelList[index] == '' ){
      this.LabelList[index] = this.displayedColumns[index]
    }
    this.ColumnList.push({
      column: this.displayedColumns[index],
      datanamefromApi: this.displayedColumns[index],
      label: this.LabelList[index]
    })
  }

}
}


