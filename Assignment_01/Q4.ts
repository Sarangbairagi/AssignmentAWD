//////////////////////////////////////////////////////////////////////////////////////////////
//
//  Function Name  :  ChkPrime
//  Description    :  used to perform prime or not
//  Input          :  number
//  Output         :  boolean
//  Date           :  09/12/2023
//  Author         :  Sarang Bairagi
//
///////////////////////////////////////////////////////////////////////////////////////////

function ChkPrime(iNo1: number): boolean {
  var iCnt: number = 0;

  for (iCnt = 2; iCnt <= iNo1 / 2; iCnt++) {
    if (iNo1 % iCnt == 0) {
      return false;
      break;
    }
  }
  return true;
}

///////////////////////////////////////////////////////////////////////////////////////////
//  Write a program to accept one number and Check that number prime or not.
///////////////////////////////////////////////////////////////////////////////////////////

var iValue1: number = 11;
var iRet: boolean = false;
iRet = ChkPrime(iValue1);

if (iRet == true) {
  console.log("It is prime number");
} else {
  console.log("It is not prime number");
}
