// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let num1 = prompt("num1");
let num2 = prompt("num2");

let sum = 0;

for (let i = num1; i <= num2; i++) {
    sum = sum + i;
}
alert(`sum = ${sum}`);