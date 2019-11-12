// Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).

function EvenOdd(_one, _two, _odd = false) {
    let buf = '';
    for (let i = _one; i < _two; i++) {
        let k = i < 0 ? -i : i;
        if (k % 2 != _odd) {
            buf += i + ' ';
        }
    }
    return buf;
}

alert(EvenOdd(-12, 10, true));