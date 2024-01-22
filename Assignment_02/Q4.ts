
//////////////////////////////////////////////////////////////////////////////////////////////
//
//  Function Name  :  Mult
//  Description    :  used to perform multiply the number 
//  Input          :  number 
//  Output         :  number
//  Date           :  11/12/2023
//  Author         :  Sarang Bairagi
//
///////////////////////////////////////////////////////////////////////////////////////////

function Mult (iNo1 : number, iNo2 : number ) : number
{
   var iCnt : number = 0;
   var iMult : number = 1;

   for(iCnt = 0; iCnt < iNo2; iCnt++)
   {
      iMult = iMult * iNo1;
   }

   return iMult;
}


//////////////////////////////////////////////////////////////////////////////////////////////
//
//  Function Name  :  ChkArmstrong
//  Description    :  used to perform check the number is armstrong number or not
//  Input          :  number 
//  Output         :  boolean
//  Date           :  11/12/2023
//  Author         :  Sarang Bairagi
//
///////////////////////////////////////////////////////////////////////////////////////////

function ChkArmstrong(iNo : number) : boolean 
{
    var iValue1: number = 0;
    var iCnt : number = 0;
    var iDigit : number = 0;
    var iSum : number = 0;
    iValue1 = iNo;


    while(iNo > 0)
    {
       iNo = Math.floor(iNo/10);
       iCnt++;
    }

    iNo = iValue;

    while(iNo > 0)
    {
       iDigit = iNo % 10;
       iSum = iSum + Mult(iDigit,iCnt); 
       iNo = Math.floor(iNo/10);
    }

    if(iSum == iValue)
    {
        return true;
    }
    else
    {
        return false
    }
    
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//  Write a program to accept one number and check the number is armstrong number or not
//////////////////////////////////////////////////////////////////////////////////////////////////

var iValue : number = 153;
var bRet : boolean = false;

bRet = ChkArmstrong(iValue);

if(bRet == true)
{
    console.log("It is Armstrong number",+iValue);
}
else
{
    console.log("It is not Armstrong number",+iValue);
}

////////////////////////////////////////////////////////////////////////////////////////
//  
//  Input : 153
//  
//  Output : It is Armstrong number 
//     
///////////////////////////////////////////////////////////////////////////////////////
