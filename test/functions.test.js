/* eslint-disable no-undef */
import { convertAgeToSeconds, temCelsiusToFarenheit, getProfits, firstLetter, isPrime } from '../src/JavaScript/functions.js';

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
})





