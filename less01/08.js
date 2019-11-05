// Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).

let number;

number = prompt("Введите трехзначное число");

let numberThree = number % 10;
let numberTwo = number % 100 - numberThree;

let result = numberTwo / 10;

alert(result);