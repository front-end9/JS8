// Пользователь ввел число, а на экран вывелись все числа от введенного до 0.

let count = prompt("Введите число");
let bufer = "";
if (count < 0) {
    while (count < 0) {
        bufer = bufer + count + " ";
        count++;
    }
} else {
    while (count > 0) {
        bufer = bufer + count + " ";
        count--;
    }
}
document.write(bufer);