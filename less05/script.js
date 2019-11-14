// Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.

let rectangle = {
    topX: 0,
    topY: 0,
    botX: 15,
    botY: 25
}

// Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).
function rectangleInfo(_rectangle) {
    alert(`координаты верхней левой точки
Х:${_rectangle.topX}
Y:${_rectangle.topY}
координаты нижней правой точки
Х:${_rectangle.botX}
Y:${_rectangle.botY}`);
}

// Функция принимает объект-прямоугольник и возвращает его ширину.
function rectangleWidth(_rectangle, _log = false) {
    let _width = _rectangle.botX - _rectangle.topX;
    if (_log) {
        alert(`ширина прямоугольника = ${_width}`)
    }
    return _width;
}

// Функция принимает объект-прямоугольник и возвращает его высоту.
function rectangleHeight(_rectangle, _log = false) {
    let _height = _rectangle.botY - _rectangle.topY;
    if (_log) {
        alert(`ширина прямоугольника = ${_height}`)
    }
    return _height;
}

// Функция принимает объект-прямоугольник и возвращает его площадь
function rectangleArea(_rectangle, _log = false) {
    let _area = rectangleWidth(_rectangle) * rectangleHeight(_rectangle);
    if (_log) {
        alert(`площадь прямоугольника = ${_area}`)
    }
    return _area;
}

// Функция принимает объект-прямоугольник и возвращает его периметр.
function rectanglePerimeter(_rectangle, _log = false) {
    let _perimeter = (rectangleWidth(_rectangle) + rectangleHeight(_rectangle)) * 2;
    if (_log) {
        alert(`периметр прямоугольника = ${_perimeter}`)
    }
    return _perimeter;
}

// Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину.
function rectangleChangeWidth(_rectangle) {
    let _addWidth = +prompt("на сколько изменить ширину?");
    _rectangle.botX += _addWidth;
    Draw(_rectangle);
}

// Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоту.
function rectangleChangeHeight(_rectangle) {
    let _addHeight = +prompt("на сколько изменить высоту?");
    _rectangle.botY += _addHeight;
    Draw(_rectangle);
}

// Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и два значения – для изменения ширины и высоты.
function rectangleChangeDimension(_rectangle) {
    rectangleChangeWidth(_rectangle);
    rectangleChangeHeight(_rectangle);
}

// Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
function rectangleMoveX(_rectangle) {
    let _newX = +prompt("Введите на сколько сдвинуть по оси Х");
    _rectangle.botX += _newX;
    _rectangle.topX += _newX;
    Draw(_rectangle);
}

// Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
function rectangleMoveY(_rectangle) {
    let _newY = +prompt("Введите на сколько сдвинуть по оси Х");
    _rectangle.botY += _newY;
    _rectangle.topY += _newY;
    Draw(_rectangle);
}

// Функция смещения прямоугольника и по оси X и по  оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.
function rectangleMove(_rectangle) {
    rectangleMoveX(rectangle);
    rectangleMoveY(rectangle);
}

// Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки.
function isRectanglePoint(_rectangle) {
    let _x = +prompt("введите х точки");
    let _y = +prompt("введите y точки");
    if ((_x >= _rectangle.topX) && (_x <= _rectangle.botX)) {
        if ((_y >= _rectangle.topY) && (_y <= _rectangle.botY)) {
            alert("Точка принадлежит прямоугольнику");
            return;
        }
    }
    alert("Точка не принадлежит прямоугольнику");
}

function Draw(_rectangle) {
    let _rectangleElement = document.getElementById("rectangle");
    _rectangleElement.style.top = _rectangle.topY + 'px';
    _rectangleElement.style.left = _rectangle.topX + 'px';
    _rectangleElement.style.width = rectangleWidth(_rectangle) + 'px';
    _rectangleElement.style.height = rectangleHeight(_rectangle) + 'px';
}

Draw(rectangle);