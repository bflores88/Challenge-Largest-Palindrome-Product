/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  //find max digit
  let maxDigitStr = '';
  let count = 0;
  while (count < digits) {
    maxDigitStr += '9';
    count++;
  }

  let maxDigit = parseInt(maxDigitStr);

  //find min digit
  let minDigitStr = '1';
  let minCount = 0;
  while (minCount < digits - 1) {
    minDigitStr += '0';
    minCount++;
  }

  let minDigit = parseInt(minDigitStr);

  let palindromeObject = {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  }

  //loop to find largest palindrome
  for (let i = maxDigit; i > maxDigit - minDigit; i--) {
    for (let j = maxDigit; j > maxDigit - minDigit; j--) {
      let product = i * j;
      let multiple = parseInt(product.toString() + product);
      let reversed = parseInt(multiple.toString().split('').reverse().join(''));
      if (product > palindromeObject.palindromeNumber && multiple === reversed) {
        palindromeObject.factor_0 = i;
        palindromeObject.factor_1 = j;
        palindromeObject.palindromeNumber = product;
      }
    }
  }

  factor_0 = palindromeObject.factor_0;
  factor_1 = palindromeObject.factor_1;
  palindromeNumber = palindromeObject.palindromeNumber;

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};