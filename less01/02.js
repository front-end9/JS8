// Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

/**
 * @description переменные для двух чисел от пользователя
 */
let numberOne, numberTwo;

numberOne = prompt("Введите первое число");
numberTwo = prompt("Введите второе число");

let averageNumber;

averageNumber = ((+numberOne) + (+numberTwo)) / 2;

alert(`Среднее арифметическое ваших чисел = ${averageNumber}`);