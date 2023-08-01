import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() label : string = "Button";
  @Input() icon : string = "";
  @Input() giveColor : string = "primary";
  @Input() type : string = "raised";
  @Input() buttonType : string = "button";
  @Output() onClick : EventEmitter<string | number> = new EventEmitter<string | number>();
  hello(response :  number | string){
    this.onClick.emit(response);
    alert("Hello World!" +  response);
  }
}
