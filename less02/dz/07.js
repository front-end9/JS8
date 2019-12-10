// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let total = +prompt("enter total cost");

let discount;

if (total >= 200 && total < 300) {
    discount = 3;
} else if (total >= 300 && total < 500) {
    discount = 5;
} else if (total >= 500) {
    discount = 7;
}

alert(total - (total * (discount / 100)));