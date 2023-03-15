// 3. Crear otro archivo llamado “Calculos.js”
// 4. Crear una función que reciba dos números y retorne la suma de ellos
function sumar(num1, num2) {
    return num1 + num2
}

console.log("La suma entre los numeros es: ", sumar(5,5))


// 5. Crear una función que reciba dos números y devuelva el resultado entre la división del primero sobre el segundo
function dividir(num1, num2) {
    return num1 / num2
}

console.log("El resultado de la division es: ", dividir(4,2));


// 6. Crear una función que reciba un Array de N elementos y devuelva el mayor valor de ese array
function mayorNum(nums) {
    return Math.max(...nums)
}


console.log("El numero mayor es: ", mayorNum([10,8,4,2,30,18,9,6,1]));

// 7. Hacer uso del console.log para mostrar la suma de 5 y 10
console.log("La suma entre 5 y 10 es: ", 5 + 10);


// 8. Hacer uso del console.log para mostrar la suma la división de 20 y 2 (que sucede si envió 20 y 0)
console.log("El resultado de la division entre 20 y 2 es: ", 20 / 2);


// 9. Hacer uso del console.log para mostrar el mayor de la lista [2,8,9,7,5,6]
console.log("El numero mayor es: ", Math.max(...[2,8,9,7,5,6]));


// 10. Ejecutar node Calculos.js para ver los resultados