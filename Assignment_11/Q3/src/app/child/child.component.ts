import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers : [NumberService, StringService]
})
export class ChildComponent 
{
  public iValue : number = 11;
  public sValue : string = "MarvellousInfosystemsPune";
  public iRet1 : string = "";
  public iRet2 : number = 0;

  constructor(private ObjNumber :NumberService, private ObjString : StringService)
  {
    this.iRet1 = this.ObjNumber.ChkPrime(this.iValue);
    this.iRet2 = this.ObjString.CountCapital(this.sValue);
  }
}
