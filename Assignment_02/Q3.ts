
//////////////////////////////////////////////////////////////////////////////////////////////
//
//  Function Name  :  Maximum
//  Description    :  used to perform second largest number from array
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
    var iRet2 : number = 0;

    for(iCnt = 0; iCnt < iBrr.length; iCnt++)
    {
        if(iRet < iBrr[iCnt])
        {
            iRet = iBrr[iCnt];
        }
    }

    for(iCnt = 0; iCnt < iBrr.length; iCnt++)
    {
        if(iBrr[iCnt]!=iRet)
        {
            if(iRet2 < iBrr[iCnt])
            {
                iRet2 = iBrr[iCnt];
            }
        }
    }

 return iRet2;
    
}

////////////////////////////////////////////////////////////////////////////////////////////////
//  Write a program to accept array of numbers and print that second largest number from array
////////////////////////////////////////////////////////////////////////////////////////////////


var iArr : number [] = [23,89,6,29,56,45,77,32];
var iMax : number = 0;

iMax = Maximum(iArr);

console.log("Second Maximum number is "+iMax);

////////////////////////////////////////////////////////////////////////////////////////
//  
//  Input : 23  89  6  29  56  45  77  32
//  
//  Output : Second Maximum number is 77
//     
///////////////////////////////////////////////////////////////////////////////////////
