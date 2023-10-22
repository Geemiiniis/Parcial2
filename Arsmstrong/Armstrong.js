// Lógica para calcular la suma de potencias
function calcularSumaDePotencias(numero) {
    const numStr = numero.toString();
    const numDigitos = numStr.length;
    let suma = 0;

    for (let i = 0; i < numDigitos; i++) {
        const digito = parseInt(numStr[i]);
        suma += Math.pow(digito, numDigitos);
    }

    return suma;
}

// Verificación de número de Armstrong
function esNumeroArmstrong(numero) {
    const suma = calcularSumaDePotencias(numero);

    if (suma === numero) {
        alert(`La suma de potencias de los dígitos es: ${suma}`);
        return true;
    } else {
        alert(`La suma de potencias de los dígitos es: ${suma}`);
        return false;
    }
}

// Solicitar al usuario un número
const numero = parseInt(prompt("Ingresa un número:"));

if (esNumeroArmstrong(numero)) {
    alert(`${numero} es un número de Armstrong.`);
} else {
    alert(`${numero} no es un número de Armstrong.`);
}
