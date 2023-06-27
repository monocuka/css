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


export {convertAgeToSeconds, temCelsiusToFarenheit, getProfits, firstLetter, isPrime};
