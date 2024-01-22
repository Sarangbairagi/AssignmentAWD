
class Arthmetic
{
    Number1 : number;
    Number2 : number;
    
    constructor(A : number, B : number)
    {
        this.Number1 = A;
        this.Number2 = B;
    }
    
    
    //////////////////////////////////////////////////////////////////////////////////////////////
    //
    //  Function Name  :  Addition
    //  Description    :  used to perform two numbers Addition
    //  Input          :  
    //  Output         :  number
    //  Date           :  16/12/2023
    //  Author         :  Sarang Bairagi
    //
    ///////////////////////////////////////////////////////////////////////////////////////////
    
    Addition() : number
    {
        var Ans : number;
        Ans = this.Number1 + this.Number2;
        return Ans;
    }
    
    
    //////////////////////////////////////////////////////////////////////////////////////////////
    //
    //  Function Name  :  Subtraction
    //  Description    :  used to perform two numbers Subtraction
    //  Input          :  
    //  Output         :  number
    //  Date           :  16/12/2023
    //  Author         :  Sarang Bairagi
    //
    ///////////////////////////////////////////////////////////////////////////////////////////
    
    Subtraction() : number
    {
        var Ans : number;
        Ans = this.Number1 - this.Number2;
        return Ans;
    }
    
    //////////////////////////////////////////////////////////////////////////////////////////////
    //
    //  Function Name  :  Multiplication
    //  Description    :  used to perform two numbers Multiplication
    //  Input          :  
    //  Output         :  number
    //  Date           :  16/12/2023
    //  Author         :  Sarang Bairagi
    //
    ///////////////////////////////////////////////////////////////////////////////////////////
    
    Multiplication() : number
    {
        var Ans : number;
        Ans = this.Number1 * this.Number2;
        return Ans;
    }
    
    //////////////////////////////////////////////////////////////////////////////////////////////
    //
    //  Function Name  :  Division
    //  Description    :  used to perform two numbers Division
    //  Input          :  
    //  Output         :  number
    //  Date           :  16/12/2023
    //  Author         :  Sarang Bairagi
    //
    ///////////////////////////////////////////////////////////////////////////////////////////

    Division() : number
    {
        var Ans : number;
        Ans = this.Number1 / this.Number2;
        return Ans;
    }

} 

////////////////////////////////////////////////////////////////////////////////////////////////
//  Write a program to accept array of numbers and print that second largest number from array
////////////////////////////////////////////////////////////////////////////////////////////////

var obj1 = new Arthmetic(11,10);
var obj2 = new Arthmetic(50,20);

var Result : number = 0;

Result = obj1.Addition();
console.log("Addition is : "+Result);

Result = obj1.Subtraction();
console.log("Subtraction is : "+Result);

Result = obj2.Division();
console.log("Division is : "+Result);

Result = obj2.Multiplication();
console.log("Multiplication is : "+Result);



////////////////////////////////////////////////////////////////////////////////////////
//  
//  Output :   
//            Addition is : 21
//            Subtraction is : 1
//            Division is : 2.5
//            Multiplication is : 1000
//
//     
///////////////////////////////////////////////////////////////////////////////////////
