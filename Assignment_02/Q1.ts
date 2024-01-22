
//////////////////////////////////////////////////////////////////////////////////////////////
//
//  Function Name  :  Maximum
//  Description    :  used to perform Maximum numbers on array
//  Input          :  number 
//  Output         :  number
//  Date           :  11/12/2023
//  Author         :  Sarang Bairagi
//
///////////////////////////////////////////////////////////////////////////////////////////


function Maximum (iBrr : number[]) : number
{
    var iCnt : number = 0;
    var iRet : number = 0;

    for(iCnt = 0; iCnt < iBrr.length; iCnt++)
    {
        if(iRet < iBrr[iCnt])
        {
            iRet = iBrr[iCnt];
        }
    }

    return iRet;
    
}

///////////////////////////////////////////////////////////////////////////////////////////
//  Write a program to accept array of numbers and print that largest numbers on screen
///////////////////////////////////////////////////////////////////////////////////////////

var iArr : number [] = [23,89,6,29,56,45,77,32];
var iMax : number = 0;

iMax = Maximum(iArr);

console.log(iMax);


////////////////////////////////////////////////////////////////////////////////////////
//  
//  Input : 23  89  6  29  56  45  77  32
//  
//  Output : Maximum number is 89
//     
///////////////////////////////////////////////////////////////////////////////////////