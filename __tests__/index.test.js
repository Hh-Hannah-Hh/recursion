const {reverse,sumDigits, fib, deepTotal, deepIncludes, countObjects,} = require('../recursion')

describe ('Reverse a String', () => {
    test ('should return the same character thats input', () => {
        expect(reverse('r')).toEqual('r')
    })
    test ('returns the reverse of a string when input is 2 chars', () => {
        expect(reverse('ro')).toEqual('or')
    })
    test ('returns the reverse of a string when input is 2 words', () => {
        expect(reverse('Ronald McDonald')).toEqual('dlanoDcM dlanoR')
    })
})

describe ('Sum until 1 digit remains', () => {
    test ('should return number if number is 1 digit', () => {
        expect(sumDigits(1)).toEqual(1)
    })
    test ('should return the sum of 2 digits when the sum is between 0-9', () => {
        expect(sumDigits(11)).toEqual(2)
    })
    test ('should return the sum of 2 digits when the sum is greater than 9 but less than 99', () => {
        expect(sumDigits(99)).toEqual(9)
    }) 
    test ('should return the sum of digits when input is 3 digits or more', () => {
        expect(sumDigits(275)).toEqual(5)
        expect(sumDigits(6992)).toEqual(8)
    })
})

describe ('Fibonacci sequence', () => {
    test ('Returns a number when given a number', () => {
        expect(typeof fib(7)).toBe("number")
    })
    test ('Returns 0 when given a value of 1', () => {
        expect(fib(1)).toBe(0)
    })
    test ('Returns 1 when given a value of 2 or 3.', () => {
        expect(fib(2)).toBe(1)
        expect(fib(3)).toBe(1)
    })
    test ('Returns a number in the Fibonacci sequence when given a number more than or equal to 4.', () => {
        expect(fib(4)).toBe(2)
        expect(fib(5)).toBe(3)
        expect(fib(6)).toBe(5)
        expect(fib(7)).toBe(8)
        expect(fib(10)).toBe(34)
    })
})

describe ('deepTotal', () => {
    test ('Returns 0 if array is empty.', () => {
        expect(deepTotal([])).toBe(0)
    });
    test ('Returns sum of numbers in a given array.', () => {
        expect(deepTotal([3, 7, 15])).toBe(25)
        expect(deepTotal([5, 10, 15, 20, 25])).toBe(75)
    });
    test ('Returns sum of numbers in a nested array.', () => {
        expect(deepTotal([1, 7, [12 , 4]])).toBe(24)
    })
});

describe('deepIncludes', () => {
    test ('Returns false if array is empty regardless of input value.', () => {
        expect(deepIncludes([], "apple")).toBe(false)
    });
    test ('Returns true if value is present in single array.', () => {
        expect(deepIncludes(["apple", "banana", "melon", "orange"], "apple")).toBe(true)
        expect(deepIncludes([5, 10, 15, 20, 25], 10)).toBe(true)
    });
    test ('Returns false if value is not present in a single array.', () => {
        expect(deepIncludes([1, 7, 12, 4], 5)).toBe(false)
    });
    test ('Returns true if value is present in a nested array.', () => {
        expect(deepIncludes([1, 2, 3, [4, 5, 6], 7], 5)).toBe(true)
    });
});

describe.only('countObjects', () => {
    test ('Returns a value of 1 when an empty object is passed.', () => {
        expect(countObjects({})).toBe(1)
    });
    test ('Returns a value of 1 when one an object with values is passed.', () => {
        expect(countObjects({a:1})).toBe(1)
    });
    test ('Returns a value equal to the number of nested objects in passed obj.', () => {
        expect(countObjects({a: { b: { c: 1}}})).toBe(3)
    });
});