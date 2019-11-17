// Создать еще один массив из 5 случайных чисел и написать следующие функции

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr1 = [];

for (let i = 0; i < 5; i++) {
    arr1[i] = getRndInteger(0, 10);
}

let arr2 = [];

for (let i = 0; i < 5; i++) {
    arr2[i] = getRndInteger(0, 10);
}

function arrayPrint(_arr) {
    let _buf = '';

    for (let i = 0; i < _arr.length; i++) {
        _buf += `${i}:\t${_arr[i]}\n`;
    }

    document.write(`<pre>${_buf}</pre>`);
}

arrayPrint(arr1);
arrayPrint(arr2);

// Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.

function arrayRepeat(_arr1, _arr2) {
    let _arrTemp = [];

    for (let i = 0; i < _arr1.length; i++) {
        if (_arrTemp.indexOf(_arr1[i]) == -1) {
            _arrTemp.push(_arr1[i]);
        }
    }
    for (let i = 0; i < _arr2.length; i++) {
        if (_arrTemp.indexOf(_arr2[i]) == -1) {
            _arrTemp.push(_arr2[i]);
        }
    }

    return _arrTemp;
}

// arrayPrint(arrayRepeat(arr1, arr2));

// Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.

function arrayNoRepeat(_arr1, _arr2) {
    let _arrTemp = [];

    for (let i = 0; i < _arr1.length; i++) {
        if ((_arr2.indexOf(_arr1[i]) != -1) && (_arrTemp.indexOf(_arr1[i]) == -1)) {
            _arrTemp.push(_arr1[i]);
        }
    }

    return _arrTemp;
}

// arrayPrint(arrayNoRepeat(arr1, arr2));

// Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве.

function arrayNoRepeat(_arr1, _arr2) {
    let _arrTemp = [];

    for (let i = 0; i < _arr1.length; i++) {
        if (_arr2.indexOf(_arr1[i]) == -1) {
            _arrTemp.push(_arr1[i]);
        }
    }

    return _arrTemp;
}

arrayPrint(arrayNoRepeat(arr1, arr2));