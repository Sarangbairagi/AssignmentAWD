import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor()
  { 

  }

  CountCapital(sValue : string) : number
  {
    var iCnt : number = 0;
    var iCount : number = 0;

    for (iCnt = 0; iCnt <= sValue.length; iCnt++)
    {
      if (sValue[iCnt] >= 'A' && sValue[iCnt] <= 'Z')
      {
        iCount++;
      }
    }
    return iCount;
  }
}
