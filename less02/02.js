// Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).
let age = prompt("Введите свой возраст");

if ((age > 0) && (age < 120)) {
    alert("Спасибо что живой!");
} else {
    alert("Ошибка введенных данных");
}