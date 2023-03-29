//Obtener la suma de dos números//
function suma() {
    let numeroUno = prompt("Ingrese el primer valor a sumar");
    let numeroDos = prompt("Ingrese el segundo valor a sumar");
    let sum = 0
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    sum = numeroUno + numeroDos;
    window.alert(sum);
}

//Obtener el area de un triangulo
function area() {
    let base = prompt("Ingrese la base del triangulo");
    let altura = prompt("Ingrese la altura del triangulo");
    base = parseInt(base);
    altura = parseInt(altura);
    let area = ((base * altura) / 2);
    window.alert("El área del triángulo es: "+area);
}

//Ingrese una edad . Obtener el año de nacimiento
function fecha_nacimiento() {
    let edad = prompt("Ingrese su edad");
    let actualYear = prompt("Ingrese el año actual");
    edad = parseInt(edad);
    actualYear = parseInt(actualYear);
    let fechaNacimiento = (actualYear - edad);
    window.alert("El año de nacimiento es "+ fechaNacimiento);
}

//Hallar el área de una circunferencia
function area_circunferencia(){
    let radio = prompt ("Ingrese el radio de la circunferencia");
    const pi = 3.14159
    let area = ((pi*radio)^2);
    window.alert(area);
}