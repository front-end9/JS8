// Запросить 2 числа и найти только наибольший общий делитель.

let num1 = 5;

let num2 = 10;

let max = num1 > num2 ? num1 : num2;
let min = num1 < num2 ? num1 : num2;

let big;

for (let i = min; i <= max; i++) {
    if ((min % i == 0) && (max % i == 0)) {
        big = i;
    }
}

let a = 3;
let b = 5;

let temp = a + b;
a = temp;