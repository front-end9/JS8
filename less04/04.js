// Написать функцию, которая проверяет, является ли переданное ей число простым.
let num = +prompt("Введите число");

function IsSimple(_num) {
    let flag = true,
        count = 0;

    for (let i = 1; i <= _num; i++) {
        if (_num % i == 0) {
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
}

IsSimple(num);