// Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.

let hours,
    minutes,
    seconds;

hours = prompt("Введите часы");
if ((hours < 0) || (hours > 24)) {
    alert("вы не правильно ввели hours");
}
minutes = prompt("Введите минуты");
if ((minutes < 0) || (minutes > 60)) {
    alert("вы не правильно ввели minutes");
}
seconds = prompt("Введите секунды");
if ((seconds < 0) || (seconds > 60)) {
    alert("вы не правильно ввели seconds");
}