function reverse(string) {
  const lastChar = string.charAt(string.length - 1);
  if (string.length === 1) {
    return string;
  }
  return lastChar + reverse(string.substring(0, string.length - 1));
}

function sumDigits(num) {
  if (num >= 0 && num <= 9) {
    return num;
  }
  return sumDigits((num % 10) + sumDigits(Math.floor(num / 10)));
}

function fib(num) {
  if (num === 1) {
    return 0;
  }
  if (num < 4) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}

function deepTotal(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let count = 0;

  if (arr.length === 1) {
    count += arr[0];
  }
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      count += deepTotal(arr[i]);
    } else {
      count += arr[i];
    }
  }

  return count;
}

function deepIncludes(arr, val) {
  if (arr.length === 0) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item === val) {
      return true;
    } else if (Array.isArray(arr[i])) {
      if (deepIncludes(arr[i], val)) {
        return true;
      }
    }
  }
  return false;
}

function countObjects(obj) {
  let objCount = 1;

  for (const item in obj) {
    if (typeof obj[item] === "object") {
      objCount += countObjects(obj[item]);
    }
    if (typeof obj[item] !== "object") {
      continue;
    }
  }
  return objCount;
}

module.exports = {
  reverse,
  sumDigits,
  fib,
  deepTotal,
  deepIncludes,
  countObjects,
};
