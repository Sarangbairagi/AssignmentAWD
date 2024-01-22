
class Circle
{
    Radius : number;
    PI : number;
    
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

////////////////////////////////////////////////////////////////////////////////////////////////
//  Write a program to accept array of numbers and print that second largest number from array
////////////////////////////////////////////////////////////////////////////////////////////////

var obj1 = new Circle(10);
var obj2 = new Circle(54);

var Result : number = 0;

Result = obj1.Area();
console.log("Area of circule is : "+Result);

Result = obj2.Area();
console.log("Area of circule is : "+Result);

////////////////////////////////////////////////////////////////////////////////////////
//  
//  Output :   
//            Area of circule is : 314
//            Area of circule is : 9156.24
//
//
//     
///////////////////////////////////////////////////////////////////////////////////////
