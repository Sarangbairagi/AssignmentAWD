import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  @Output() public MyEvent = new EventEmitter();

  public AcceptData(value : any)
  {
    this.MyEvent.emit(value);
  }
}
