import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmeticService]
})
export class DemoComponent 
{
  public No1 : any;
  public No2 : any;
   
  constructor(private obj : ArithmeticService)
  {
     this.No1 = this.obj.Add(20,10); 
     this.No2 = this.obj.Sub(30,15);
  }
}
