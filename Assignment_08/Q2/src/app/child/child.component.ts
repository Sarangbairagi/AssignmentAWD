import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core' ;

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
 @Input() public ParentData : any;
 @Output() public ChildData = new EventEmitter();

 public SendChildData()
 {
   this.ChildData.emit("Hello form Child");
 }
}
