// Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.

function Table(_num) {
    let buf = '<pre>';
    for (let i = 2; i < 10; i++) {
        buf += _num + ' * ' + i + ' = ' + i * _num + '\n';
    }
    buf += '</pre>';

    document.write(buf);
}

Table(9);