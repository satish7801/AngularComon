import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Table-Base';

    cityList: any[] = [
    { id: "1", name: "City 1", countryId: "C1" },
    { id: "2", name: "City 2", countryId: "C2" },
  ];

  LabelList: string[] = ['Id', 'City', 'Country'];

}
