// Запросить число и степень. Возвести число в указанную степень и вывести результат.

let number = prompt("Введите число");
let pow = prompt("Введите степень");
// let result = (number ** pow);
let bufer = 1;
if (pow != 0) {
    while (pow > 0) {
        bufer *= number;
        pow--;
    }
}
document.write(bufer);