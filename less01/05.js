// Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.

let numberOne, numberTwo;

numberOne = prompt("Введите первое число");
numberTwo = prompt("Введите второе число");

alert(`Результат равен ${(+numberTwo) + (+numberOne)}`);
alert("Результат от - равен " + ((+numberOne) - (+numberTwo)));
alert("Результат от * равен " + numberOne * numberTwo);
alert("Результат от / равен " + numberOne / numberTwo);