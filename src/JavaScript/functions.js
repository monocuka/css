//ejercicio 1
const convertAgeToSeconds = (age) => age * 365 * 24 * 60 * 60;
// ejercicio 2
const temCelsiusToFarenheit = (celsius) => (celsius * 1.8) + 32;
//ejercicio 3 
const getProfits = (earnings, costs, taxes) => (earnings - costs) * ((100-taxes)/100);
// Ejercicio 4 
const firstLetter =(FisrtName) => FisrtName.charAt(0).toUpperCase(); 

const isPrime = (number) => {
    if (number === 1 || number === 2) {
        return true;
    }
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return false;
        }
        }
        return true;
    }

const finalDigit = (num) => num % 10;

const twoDigitsF = (number) => number % 100



const numberGenerate = (maxNumber) => Math.floor(Math.random() * maxNumber);


const generateRandomArray = (row, columns) => {
    let matriz = [];

    for (let i = 0; i < row; i++) {
        matriz[i] = [];
        for (let j = 0; j < columns; j++) {
            matriz[i][j] = Math.floor(Math.random() * 20);
        }
    }
    return matriz;
}

const counterNumber = (num) =>{

    if (num === 0) {
        return 1;
    }
    if (num < 0) {
        num = num * -1;
    }

    let digitNumber = 0;

    while (num >= 1){
        num = parseInt(num/10);
        digitNumber++;
    }
    return digitNumber;
}

const factorialNumber = (num) => {

    if (num === 0) {
        return 1;
    }
    if (num < 0) {
        num = num * -1;
    }
    let multiplication = 1;

    for (let i = 1; i <= num; i++) {
        multiplication = multiplication * i;
    }
    return multiplication;
}

const isNumberMultiple = (num1, num2) => {

    if (num2 % num1 === 0) {
        return true;
    }
    return false;
} 

const randomArrayGenerator = (number) => {
    const randomNumbers = [];

    for (let i = 0; i < number; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100));
    }
    return randomNumbers;
}

export {convertAgeToSeconds, temCelsiusToFarenheit, getProfits, firstLetter, isPrime, finalDigit, twoDigitsF, numberGenerate, generateRandomArray, counterNumber, factorialNumber, isNumberMultiple, randomArrayGenerator};
