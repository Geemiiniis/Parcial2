// Solicitar al usuario un número
numero = parseInt(prompt("Ingresa un número:"));

// Parte 1: Calcular la suma de todos los divisores
sumaDivisores = 0;
for ( i = 1; i < numero; i++) {
    if (numero % i === 0) {
        sumaDivisores += i;
    }
}

// Parte 2: Verificar si la suma de los divisores es igual al número
switch (true) {
    case sumaDivisores === numero:
        alert(" el numero "+ numero + " es un número perfecto." );
        break;
    default:
        alert(" el numero "+ numero + " no es un número perfecto." );
        break;
}
