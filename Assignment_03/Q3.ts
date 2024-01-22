
class Circle
{
   protected Radius : number;
   protected PI : number;
    
    constructor(A : number, B : number = 3.14)
    {
        this.Radius = A;
        this.PI = B;
    }
    
    //////////////////////////////////////////////////////////////////////////////////////////////
    //
    //  Function Name  :  Area
    //  Description    :  used to perform Area of circule
    //  Input          :  
    //  Output         :  number
    //  Date           :  16/12/2023
    //  Author         :  Sarang Bairagi
    //
    ///////////////////////////////////////////////////////////////////////////////////////////
    
    Area() : number
    {
        var iAns : number = 0;
        iAns = this.PI * this.Radius *this.Radius;
        return iAns;
    }
} 


class CircleX extends Circle
{
       
    //////////////////////////////////////////////////////////////////////////////////////////////
    //
    //  Function Name  :  Circumference
    //  Description    :  used to perform Circumference of circule
    //  Input          :  
    //  Output         :  number
    //  Date           :  16/12/2023
    //  Author         :  Sarang Bairagi
    //
    ///////////////////////////////////////////////////////////////////////////////////////////
    
    Circumference() : number
    {
        var iAns : number = 0;
        iAns = 2 * this.PI * this.Radius;
        return iAns;
    }
} 

////////////////////////////////////////////////////////////////////////////////////////////////
//  Write a program to accept array of numbers and print that second largest number from array
////////////////////////////////////////////////////////////////////////////////////////////////


var obj1 = new CircleX(15);
var obj2 = new CircleX(54);

var Result : number = 0;

Result = obj1.Circumference();
console.log("Circumference of circule is : "+Result);

Result = obj2.Circumference();
console.log("Circumference of circule is : "+Result);


////////////////////////////////////////////////////////////////////////////////////////
//  
//  Output :   
//           Circumference of circule is : 94.2
//           Circumference of circule is : 339.12
//
//
//     
///////////////////////////////////////////////////////////////////////////////////////
