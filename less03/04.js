// Запросить 2 числа и найти все общие делители.

let numberOne = prompt("enter number");
let numberTwo = prompt("enter number");
let i;
let bufer = "";
// i = numberOne > numberTwo ? numberTwo : numberOne;
if (numberOne > numberTwo) {
    i = numberTwo;
} else {
    i = numberOne;
}
while (i > 0) {
    if ((numberOne % i == 0) && (numberTwo % i == 0)) {
        bufer += i + " ";
    }
    i--;
}
document.write(bufer);