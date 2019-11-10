// Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.
let number = 1000;
let counter = 0;
do {
    number /= 2;
    counter++;
} while (number > 50);
document.write(`Результат = ${number}, количество делений ${counter}`);