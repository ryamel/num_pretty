
/* 
  Notes
  - function accepts only numeric type
  - if input type is invalid it returns null
  - if number is less than one million or reaches quadrillions, it returns the original number as a string
*/

/*
  Assumptions
  
  The task description is contradictory describing what numbers the function should append decimals to. The example 
  gives 1123456789 -> 1.1B, which contradicts the definition of 'integer' in the description. So I am assuming that 
  the function is to always append a decimal, with the only exception when the truncated number results in a zero decimal (i.e 12.0M)
*/

/*
  Approach

  It is clear I will need to split the cases between millions, billions, and trillions as I will be appending 'M', 'B', or 'T' to the string.
  I will be looking at the length of the number so I can determine which case it is. I believe it to be easier to deal with strings than numbers 
  in this case.
  
  So I first convert the input number to a string. I use parseInt() here to remove any decimals that will affect string length.

  See Assumptions about truncation. I chose to always add one decimal place to the number, unless that decimal would be 0. I think this approach is valid, because 
  there is no point in appending a zero decimal if we are using a number prettifer ('12M' opposed to '12.0M'). 
  
  To check whether the decimal would be a zero, I need only to look at the trailing number following the millionth/billionth/trillionth 
  place. For example the number 5 in 120,500,000. If this trailing number is zero, no decimal is needed.
*/



function prettify(num) {
  if (typeof num != 'number') return null;

  let length;
  let numStr = parseInt(num).toString();
  if (num < 0) {
    length = numStr.length - 1; 
  } else {
    length = numStr.length; 
  }

  // acceptable range
  if (length <= 6 || length >= 16) return numStr;

  // Millions
  if (length > 6 && length < 10) {
    if (numStr.substr(-6, 1) != '0') return numStr.slice(0,-6) + '.' + numStr.substr(-6, 1)  + 'M';
    if (numStr.substr(-6, 1) == '0') return numStr.slice(0,-6) + 'M';
  }

  // Billions
  if (length > 9 && length < 13) {
    if (numStr.substr(-9, 1) != '0') return numStr.slice(0,-9) + '.' + numStr.substr(-9, 1)  + 'B';
    if (numStr.substr(-9, 1) == '0') return numStr.slice(0,-9) + 'B';
  }

  // Trillions
  if (length > 12 && length < 16) {
    if (numStr.substr(-12, 1) != '0') return numStr.slice(0,-12) + '.' + numStr.substr(-12, 1)  + 'T';
    if (numStr.substr(-12, 1) == '0') return numStr.slice(0,-12) + 'T';
  }

  return numStr;
}



module.exports = prettify;