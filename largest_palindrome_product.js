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
  function getfactor_0() {
    return factor_0;
  }

  function getfactor_1() {
    return factor_1;
  }

  function getpalindromeNumber() {
    return palindromeNumber;
  }

  (function () {
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

    //loop to find largest palindrome
    for (let i = maxDigit; i > minDigit; i--) {
      for (let j = maxDigit; j > maxDigit - minDigit; j--) {
        let product = i * j;
        let multiple = parseInt(product.toString() + product);
        let reversed = parseInt(multiple.toString().split('').reverse().join(''));
        if (multiple === reversed && multiple > palindromeNumber) {
          factor_0 = i;
          factor_1 = j;
          palindromeNumber = product;
          getpalindromeNumber();
          getfactor_0();
          getfactor_1();
          return palindromeNumber;
        }
      }
    }
  }());

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};