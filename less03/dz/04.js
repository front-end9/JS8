// Определить количество цифр в введенном числе.

let num = 1234;

let exponent = 1;

let temp;

do {
    temp = num % Math.pow(10, exponent++);
} while (temp != num);

alert(exponent);