import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() 
  {
    
  }

  Add(iValue1 : number, iValue2 : number ) : number
  {
    var iSum : number = 0;
    iSum = iValue1 + iValue2;
    return iSum;
  }
  Sub(iValue1 : number, iValue2 : number ) : number
  {
    var iSum : number = 0;
    iSum = iValue1 - iValue2;
    return iSum;
  }
}
