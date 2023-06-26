/* eslint-disable no-undef */
import { convertAgeToSeconds } from '../src/JavaScript/functions.js';

describe('convertAgeToSeconds', () => {
    it('should be a function', () => {
        expect(typeof convertAgeToSeconds).toBe('function');
    });

    it('convert 33 years to seconds', () => {
        expect(convertAgeToSeconds(33)).toBe(1040688000);
    });
});