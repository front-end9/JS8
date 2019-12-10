// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let usd = +prompt("enter usd");

const eur = 0.91,
    uah = 24.5,
    azn = 1.7;

let result;

let curency = prompt("enter currency");

switch (curency) {
    case 'eur':
        result = usd * eur;
        break;
    case 'uah':
        result = usd * uah;
        break;
    case 'azn':
        result = usd * azn;
        break;
    default:
        alert("currency is not correct");
        break;
}

alert(result);