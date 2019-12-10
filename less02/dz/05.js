// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

let number = prompt("Введите пятизначное число.");

let one = number.slice(0, 1),
    two = number.slice(1, 2),
    four = number.slice(3, 4),
    five = number.slice(4, 5);

if ((one == five) && (two == four)) {
    alert(`Полиндром`);
} else {
    alert(`Не полиндром`);
}