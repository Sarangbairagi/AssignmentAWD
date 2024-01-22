//////////////////////////////////////////////////////////////////////////////////////////////
//
//  Function Name  :  Area
//  Description    :  used to perform Area of circule
//  Input          :  number
//  Output         :  number
//  Date           :  09/12/2023
//  Author         :  Sarang Bairagi
//
///////////////////////////////////////////////////////////////////////////////////////////

function Area(iValue1: number, iValue2: number = 3.14): number {
  var iRet: number = 0;
  iRet = iValue2 * iValue1 * iValue1;
  return iRet;
}

///////////////////////////////////////////////////////////////////////////////////////////
//  Write a program to accept one number and print that area of circule on screen
///////////////////////////////////////////////////////////////////////////////////////////

var iRadius: number = 5;
var iArea: number = 0;

iArea = Area(iRadius);

console.log("Area of circule is " + iArea);
