import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string
  {  
     var i : number = 0; 
     var Temp : string = "";
    
     for(i = value.length - 1; i >= 0; i-- )
     {
       Temp = Temp + value[i];
     }

     return Temp;
  }

}
