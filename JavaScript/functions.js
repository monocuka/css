const convertAgeToSeconds = (age) => age * 365 * 24 * 60 * 60;

const temCelsiusToFarenheit = (celsius) => (celsius * 1.8) + 32;

const getProfits = (earnings, costs, taxes) => (earnings - costs) * ((100-taxes)/100);

const firstLetter =(FisrtName) => FisrtName.charAt(0).toUpperCase();    



export {convertAgeToSeconds, temCelsiusToFarenheit, getProfits, firstLetter,};
