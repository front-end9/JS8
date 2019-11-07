// Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).

let number = prompt("Введите число");

if (number > 0) {
    alert(`Модуль числа ${number}`);
} else if (number < 0) {
    alert(`Модуль числа ${-number}`);
} else {
    alert(`Ваше число 0`);
}