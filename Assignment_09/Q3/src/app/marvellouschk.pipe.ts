import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouschk',
  standalone: true
})
export class MarvellouschkPipe implements PipeTransform 
{
  transform(value: number, param : string) : any
  {
    if(param == "Even")
    {
      if((value % 2) == 0)
      {
        return ("It is Even")
      }
      else
      {
        return ("It is not Even");
      }
    }
    if(param == "Odd")
    {
      if((value % 2) != 0)
      {
        return ("It is Odd");
      }
      else
      {
        return ("It is not Odd");
      }
    }
    if(param == "Perfect")
    {
      var No1 : number = Perfect(value);
      if(No1 == value)
      {
        return ("It is Perfect");
      }
      else
      {
        return ("It is not Perfect");
      }
    }
    if(param == "Prime")
    {
      var No3 : boolean = Prime(value);
      if(No3 == true)
      {
        return("It is Prime");
      }
      else
      {
        return("It is not Prime");
      }
    }
    function Perfect (No2 : number) : number
    {
      var iCnt : number = 0;
      var iSum : number = 0;
      for(iCnt = 1; iCnt < No2; iCnt++)
      {
        if((No2 % iCnt) == 0)
        {
          iSum = iSum + iCnt;
        }
      }
      return iSum;
    }
    function Prime (No2 : number) : boolean
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
        return true;
      }
      else
      {
        return false;
      }

    }
  }

}
