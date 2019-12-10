// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

let circleLength = prompt("enter circle length"),
    squarePerimeter = prompt("enter square perimeter");

let diameter = circleLength / Math.PI,
    side = squarePerimeter / 4;

if (diameter <= side) {
    alert('поместиться');
} else {
    alert("не поместиться");
}