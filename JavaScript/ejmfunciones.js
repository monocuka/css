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