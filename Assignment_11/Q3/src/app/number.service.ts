import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() 
  {

  }

  ChkPrime (No2 : number) : string
  {
    var iCnt : number = 0;
    var bValue : boolean = true ;
    for(iCnt = 2; iCnt < No2-1; iCnt++)
    {
      if((No2 % iCnt ) == 0)
      {
        bValue = false;
        break;
        }
      }
      
      if(bValue == true)
      {
        return (" is prime number ");
      }
      else;
      {
        return (" is not prime number ");
      }

    }

}
