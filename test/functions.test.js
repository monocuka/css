/* eslint-disable no-undef */
import { convertAgeToSeconds, temCelsiusToFarenheit, getProfits, firstLetter, isPrime, finalDigit, twoDigitsF, numberGenerate, generateRandomArray, counterNumber, factorialNumber, isNumberMultiple, randomArrayGenerator } from '../src/JavaScript/functions.js';

describe('convertAgeToSeconds', () => {
    it('should be a function', () => {
        expect(typeof convertAgeToSeconds).toBe('function');
    });

    it('convert 33 years to seconds', () => {
        expect(convertAgeToSeconds(33)).toBe(1040688000);
    });
});

describe('temCelsiusToFarenheit', () => {
    it('should be a function', () => {
        expect(typeof temCelsiusToFarenheit).toBe('function');
    });

    it('convert 25 celsius to Farenheit', () => {
        expect(temCelsiusToFarenheit(25)).toBe(77);
    })
});

describe('getProfits', () => {
    it('should be a function', () => {
        expect(typeof getProfits).toBe('function');
    });

    it('subtract expenses and tax from income', () => {
        expect(getProfits(600, 400, 19)).toBe(162);
    });
});

describe('firstLetter', () => {
    it('should be a function', () => {
        expect(typeof firstLetter).toBe('function');
    });
    it('verify that it returns the first letter', () => {
        expect(firstLetter("eliana")).toBe('E');
    });
});

describe('isPrime', () => {
    it('should be a function', () => {
        expect(typeof isPrime).toBe('function');
    });
    it('is Prime Number', () => {
        expect(isPrime(7)).toBe(true);
    });
    it('is not Prime Number', () => {
        expect(isPrime(6)).toBe(false);
    });
    it('is Number 1 ', () => {
        expect(isPrime(1)).toBe(true);
    });
});

describe('finalDigit', () => {
    it('should be a function', () => {
        expect(typeof finalDigit).toBe('function');
    });
    it('is the final digit number', () => {
        expect(finalDigit(95)).toBe(5);
    });
});

describe('twoDigitsF', () => {
    it('should be a function', () => {
        expect(typeof twoDigitsF).toBe('function');
    });
    it('is the finals digits number', () => {
        expect(twoDigitsF(198)).toBe(98);
    })
});

describe('numberGenerate', () => {
    it('should be a function', () => {
        expect(typeof numberGenerate).toBe('function');
    });
    it('generate random number', () => {
        expect(typeof numberGenerate(100)).toBe('number');
    });
});

describe('generateRandomArray', () => {
    it('should be a function', () => {
        expect(typeof generateRandomArray).toBe('function');
    });
    it('generates an array', () => {
        const result =  generateRandomArray(5, 6);
        expect(result.length).toBe(5);
    });
});

describe('counterNumber', () => {
    it('should be a funtion', () => {
        expect(typeof counterNumber).toBe('function');
    });
    it('number is 0 ', () => {
        expect(counterNumber(0)).toBe(1);
    })
    it('is  number < 0 negativ', () => {
        expect(counterNumber(-25)).toBe(2);
    });
});

describe('factorialNumber', () => {
    it('should be a function', () => {
        expect(typeof factorialNumber).toBe('function');
    });
    it('is number 0', () => {
        expect(factorialNumber(0)).toBe(1);
    });
    it('the number is negative', () => {
        expect(factorialNumber(-8)).toBe(40320);
    });
});

describe('isNumberMultiple', () => {
    it('should be a function', () => {
        expect(typeof isNumberMultiple).toBe('function');
    });
    it('is multiplo', () => {
        expect(isNumberMultiple(8, 40)).toBe(true);
    });
    it('is multiplo', () => {
        expect(isNumberMultiple(10, 11)).toBe(false);
    });
});

describe('randomArrayGenerator', () => {
    it('should be a function', () => {
        expect(typeof randomArrayGenerator).toBe('function');
    });
    it('create an array of numbers', () => {
        const result = randomArrayGenerator(8);
        expect(result.length).toBe(8);
    });
});