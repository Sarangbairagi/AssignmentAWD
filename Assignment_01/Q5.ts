//////////////////////////////////////////////////////////////////////////////////////////////
//
//  Function Name  :  Fibonacci
//  Description    :  used to perform Fibonacci series on screen
//  Input          :  number
//  Output         :  void
//  Date           :  09/12/2023
//  Author         :  Sarang Bairagi
//
///////////////////////////////////////////////////////////////////////////////////////////

function Fibonacci(iNo1: number): void {
  var iCnt: number = 0;
  var iNo2: number = 1;
  var iNo3: number = 1;
  var iNo4: number = 0;

  iNo4 = iNo2 + iNo3;

  console.log(iNo2);
  console.log(iNo3);

  for (iCnt = 2; iCnt <= iNo1; iCnt++) {
    if (iCnt == iNo4) {
      console.log(iCnt);
      iNo2 = iNo3;
      iNo3 = iNo4;
      iNo4 = iNo2 + iNo3;
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////
//  Write a program to accept one number and print that fibonacci series on screen.
///////////////////////////////////////////////////////////////////////////////////////////

var iValue1: number = 21;

Fibonacci(iValue1);
