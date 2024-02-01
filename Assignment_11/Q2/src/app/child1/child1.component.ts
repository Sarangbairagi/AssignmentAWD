import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers : [NumberService]
})
export class Child1Component 
{
  public Value : string = "";
  public Value1 : number = 11;
  constructor(private obj : NumberService)
  {
    this.Value = this.obj.ChkPrime(this.Value1);
  }
}