//funcion para sumar dos numeros
const add = (a, b) =>  a + b;
    let sum = add(9824, 777 );

//Funcion para multiplicar dos numeros

const multiply = (c, d) => c * d;
console.log(multiply(36325, sum));

//funciones para hacer un menu

const menu = (plato) =>{
    if (plato === "ceviche") {
        return "si hay ceviche";
    }else if (plato === "Tacos al pastor"){
        return "si hay tacos"
    }else if (plato === "empanadas"){
        return "si hay empanadas"
    }else {
        return "tengo hamburguesa"
    }
}
// console.log(menu("Tacos al pastor"));

//menu hecho con switch case.

const menu2 = (plato) => {
    switch (plato) {
        case "ceviche" :
            return "Si hay ceviche";
        case "Tacos al pastor":
            return "Si hay tacos"
        case "empanadas":
            return "Si hay empanadas"
        default:
            return "Hay hamburguesa"
    }
}
console.log(menu2("Tacos al pastor"));