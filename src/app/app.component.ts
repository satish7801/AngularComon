import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Table-Base';
  appFn(response : any){
    console.log(response);
    confirm("Hello World!");
  }
}
