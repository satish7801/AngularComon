import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Table-Base';
  label = "Button Label";
  icon = "home";
  type = "fab";
  appFn(response : string | number){
    console.log(response);
    confirm("Hello World!");
  }
}
