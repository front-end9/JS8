// Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.

let num = +prompt("Введите число"),
    flag = true,
    count = 0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        flag = true;
    }
    if (flag == true) {
        count++;
    }
    flag = false;
}

if (count == 2) {
    alert("Число простое");
} else {
    alert("Число не простое");
}