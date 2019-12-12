// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

let num = prompt("введите число");
let count = prompt("на сколько цифр сдвинуть");

let exponent = 1;

let temp;

do {
    temp = num % Math.pow(10, exponent++);
} while (temp != num);

let sdvig = exponent - count - 1;

let right = num % Math.pow(10, sdvig);
let left = (num - right) / Math.pow(10, sdvig);

alert(`${right}${left}`);