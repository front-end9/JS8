// Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.

let number = +prompt("Enter number");

let three = number % 10;
let two = ((number % 100) - three) / 10;
let one = (number - (two * 10 + three)) / 100;

if ((one == two) || (two == three) || (three == one)) {
    alert('The same');
}