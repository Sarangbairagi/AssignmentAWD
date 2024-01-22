//////////////////////////////////////////////////////////////////////////////////////////////
//
//  Function Name  :  Maximum
//  Description    :  used to perform Maximum numbers on screen
//  Input          :  number,number,number
//  Output         :  number
//  Date           :  08/12/2023
//  Author         :  Sarang Bairagi
//
///////////////////////////////////////////////////////////////////////////////////////////

function Maximum(iNo1: number, iNo2: number, iNo3: number): number {
  if (iNo1 > iNo2 && iNo1 > iNo3) {
    return iNo1;
  }
  else if (iNo2 > iNo3) {
    return iNo2;
  }
  else {
    return iNo3;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////
//  Write a program to accept three number and print that greatest numbers on screen
///////////////////////////////////////////////////////////////////////////////////////////

var iValue1: number = 23;
var iValue2: number = 89;
var iValue3: number = 6;
var iMax: number = 0;

iMax = Maximum(iValue1, iValue2, iValue3);

console.log(iMax);
