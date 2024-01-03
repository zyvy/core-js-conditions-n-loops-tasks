/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > a) {
    max = b;
  } else if (c > a) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (
    Math.max(king.x, queen.x) - Math.min(king.x, queen.x) ===
    Math.max(king.y, queen.y) - Math.min(king.y, queen.y)
  ) {
    return true;
  }
  return false;
}
// console.log(canQueenCaptureKing({ x: 2, y: 5 }, { x: 6, y: 2 }));

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (
    (a === b && a + b > c) ||
    (a === c && a + c > b) ||
    (b === c && b + c > a)
  ) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let roman = '';
  let dec = Math.floor(num / 10);
  if (dec === 1) {
    roman = 'X';
  } else if (dec === 2) {
    roman = 'XX';
  } else if (dec === 3) {
    roman = 'XXX';
  }
  dec = num % 10;
  if (!dec) {
    return roman;
  }
  if (dec < 4) {
    for (let i = 0; i < dec; i += 1) {
      roman += 'I';
    }
  } else if (dec === 4) {
    roman += 'IV';
  } else if (dec === 5) {
    roman += 'V';
  } else if (dec > 5 && dec < 9) {
    roman += 'V';
    for (let i = 5; i < dec; i += 1) {
      roman += 'I';
    }
  } else if (dec === 9) {
    roman += 'IX';
  }
  return roman;
}
// console.log(convertToRomanNumerals(31))

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let strig = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i) {
      strig += ' ';
    }
    switch (numberStr[i]) {
      case '0':
        strig += 'zero';
        break;
      case '1':
        strig += 'one';
        break;
      case '2':
        strig += 'two';
        break;
      case '3':
        strig += 'three';
        break;
      case '4':
        strig += 'four';
        break;
      case '5':
        strig += 'five';
        break;
      case '6':
        strig += 'six';
        break;
      case '7':
        strig += 'seven';
        break;
      case '8':
        strig += 'eight';
        break;
      case '9':
        strig += 'nine';
        break;
      case '.':
        strig += 'point';
        break;
      case ',':
        strig += 'point';
        break;
      case '-':
        strig += 'minus';
        break;
      default:
        break;
    }
  }
  return strig;
}
// console.log(convertNumberToString('241.90'));
/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numStr = '';
  let numTemp = num;
  while (numTemp > 0) {
    numStr += numTemp % 10;
    numTemp = Math.floor(numTemp / 10);
  }
  for (let i = 0; i < numStr.length; i += 1) {
    if (Number.parseInt(numStr[i], 10) === digit) {
      return true;
    }
  }
  return false;
}
// console.log(isContainNumber(123450, 5));

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sumLeft = 0;
  let sumRight = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sumRight += arr[i];
  }
  for (let i = 0; i < Math.floor(arr.length); i += 1) {
    sumLeft += arr[i];
    if (sumLeft === sumRight - sumLeft - arr[i + 1]) {
      return i + 1;
    }
  }
  return -1;
}
// console.log(getBalanceIndex([1, 2, 5, 3, 0]))
/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }
  let row = 0;
  let col = 0;
  let direction = 1;
  for (let val = 1; val <= size * size; val += 1) {
    matrix[row][col] = val;
    if (direction === 1 && (matrix[row][col + 1] !== 0 || col === size - 1)) {
      direction += 1;
    } else if (
      direction === 2 &&
      (row === size - 1 || matrix[row + 1][col] !== 0)
    ) {
      direction += 1;
    } else if (direction === 3 && (matrix[row][col - 1] !== 0 || col === 0)) {
      direction += 1;
    } else if (direction === 4 && (matrix[row - 1][col] !== 0 || row === 0)) {
      direction = 1;
    }

    if (direction === 1) {
      col += 1;
    } else if (direction === 2) {
      row += 1;
    } else if (direction === 3) {
      col -= 1;
    } else {
      row -= 1;
    }
  }
  return matrix;
}
// console.log(getSpiralMatrix(4))

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const newArr = arr;
  let min;
  for (let i = 0; i < arr.length; i += 1) {
    min = newArr[i];
    for (let j = i; j < arr.length; j += 1) {
      if (newArr[j] < min) {
        min = newArr[j];
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
    }
  }
  return newArr;
}

// console.log(sortByAsc([44, 9, 24, 10, 0, -57, 10, -49, -86, -94]))

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135' 023451 024513 024135
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425' | 012345
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
// восстановление исходного за n+1? и далее по новой?
function shuffleChar(str, iterations) {
  let newStr = str;
  let newStrLeft = '';
  let newStrRight = '';
  // console.log(str)
  for (let i = 0; i < iterations; i += 1) {
    newStrLeft = '';
    newStrRight = '';
    for (let j = 0; j < str.length; j += 1) {
      if (j % 2 !== 0) {
        newStrRight += str[j];
      } else {
        newStrLeft += str[j];
      }
    }
    newStr = newStrLeft + newStrRight;
    // console.log(`iteration ${i}, word ${str}`)
  }
  return newStr;
}
// shuffleChar(console.log(shuffleChar('0123456789a', 20)));

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
