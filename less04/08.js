// Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.

//_one, _two, _three, _four, _five

function Sum() {
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > arguments[i - 1]) {
            max = arguments[i];
        }
    }
    return max;
}

let result = Sum(176, 48, 45, 3452);

alert(result);