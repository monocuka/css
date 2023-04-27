//funcion para sumar dos numeros
const add = (a, b) =>  a + b;
    let sum = add(9824, 777 );

//Funcion para multiplicar dos numeros

const multiply = (c, d) => c * d;
console.log(multiply(36325, sum));

//funciones para hacer un menu

const menu = (plato) =>{
    let response = "tengo hamburguesa";
    if (plato === "ceviche") {
        response = "si hay ceviche";
    }else if (plato === "Tacos al pastor"){
        response = "si hay tacos"
    }else if (plato === "empanadas"){
        response = "si hay empanadas"
    }

    return response;
}
//console.log(menu("Tacos al pastor"));

//menu hecho con switch case.

const menu2 = (plato) => {
    let response = "";
    switch (plato) {
        case "ceviche" :
            response = "Si hay ceviche";
            break;
        case "Tacos al pastor":
            response = "Si hay tacos"
            break;
        case "empanadas":
            response = "Si hay empanadas"
            break;
        default:
            response = "Hay hamburguesa"
            break;
    }
    return response;
}
//console.log(menu2("Tacos al pastor"));



const ageStage = (age) => {

    let stage = "";

    if (age >= 1 &&  age <= 3) {
        stage = "Toddler";   
    }else if (age > 3 && age <= 5){
        stage = "Preschool";
    }else if (age > 5 && age <= 12){
        stage = "Gradeschooler";
    }else if (age > 12 && age <= 18){
        stage = "Teen";
    }else if (age > 18 && age <= 21){
        stage = "Young Adult"
    }
    return stage;

}

let age = parseInt(prompt("que edad tienes en años?")) ;
console.log(ageStage(age))