// Создать массив фруктов и отсортировать его по алфавиту. Написать следующие функции.

let fruits = ["Banana", "Apple", "Orange", "Mango", "Viki", "Raspberry"];
let buf = '';
for (let i = 0; i < fruits.length; i++) {
    buf += `${i}:\t${fruits[i]}\n`;
}
document.write(`<pre>${buf}</pre>`);

fruits.sort(function (a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
});

buf = '';
for (let i = 0; i < fruits.length; i++) {
    buf += `${i}:\t${fruits[i]}\n`;
}
document.write(`<pre>${buf}</pre>`);

// Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul и li).

function fruitsPrint(_fruits) {
    let _buf = '<style>.viki {color:red}</style><ul class="viki">';

    for (let i = 0; i < _fruits.length; i++) {
        _buf += `<li>${_fruits[i]}</li>`;
    }

    _buf += '</ul>';

    document.write(_buf);
}

fruitsPrint(fruits);

// Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или -1, если не найден. Поиск должен быть не регистрозависимым.

function fruitsSearch(_fruits) {
    let _search = prompt("Какой фрукт будем искать");
    for (let i = 0; i < _fruits.length; i++) {
        if (_search.toLowerCase() == _fruits[i].toLowerCase()) {
            return i;
        }
    }
    return -1;
}

alert(fruitsSearch(fruits));