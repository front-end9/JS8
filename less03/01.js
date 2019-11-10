// Вывести # столько раз, сколько указал пользователь.

let symbol = "#";
let count = prompt("введите количество повторенний");
let bufer = "";
while (count-- > 0) {
    bufer += symbol; // buffer = buffer + symbol
    //count--; // count = count - 1
}
document.write(bufer);