// Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [];

for (let i = 0; i < 10; i++) {
    arr[i] = getRndInteger(0, 10);
}

// Функция принимает массив и выводит его на экран.

function arrayPrint(_arr) {
    let _buf = '';

    for (let i = 0; i < _arr.length; i++) {
        _buf += `${i}:\t${_arr[i]}\n`;
    }

    document.write(`<pre>${_buf}</pre>`);
}

arrayPrint(arr);

// Функция принимает массив и выводит только четные элементы.

function arrayPrintEven(_arr) {
    let _buf = '';

    for (let i = 0; i < _arr.length; i++) {
        if (_arr[i] % 2 == 0) {
            _buf += `${i}:\t${_arr[i]}\n`;
        }
    }

    document.write(`<pre>${_buf}</pre>`);
}

// arrayPrintEven(arr);

// Функция принимает массив и возвращает сумму всех элементов массива.

function arraySum(_arr) {
    let _sum = 0;

    for (let i = 0; i < _arr.length; i++) {
        _sum += _arr[i];
    }

    return _sum;
}

console.log(arraySum(arr));

// Функция принимает массив и возвращает его максимальный элемент.

function arrayMax(_arr) {
    let _max = _arr[0];

    for (let i = 1; i < _arr.length; i++) {
        // _max = _max < _arr[i] ? _arr[i] : _max;
        if (_max < _arr[i]) _max = _arr[i];
    }

    return _max;
}

console.log(arrayMax(arr));

// Функция добавления нового элемента в массив по указанному индексу.

function arrayAdd(_arr, _el, _index) {
    let _arrTemp = [];

    for (let i = 0; i < _arr.length; i++) {
        if (_index == i) _arrTemp.push(_el);
        _arrTemp.push(_arr[i]);
    }

    arrayPrint(_arrTemp);
}

arrayAdd(arr, 55, 3);

// Функция удаления элемента из массива по указанному индексу.

function arrayRemove(_arr, _index) {
    let _arrTemp = [];

    for (let i = 0; i < _arr.length; i++) {
        if (_index != i) _arrTemp.push(_arr[i]);
    }

    arrayPrint(_arrTemp);
}

arrayRemove(arr, 2);