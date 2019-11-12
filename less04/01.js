// ;
// (function () {
//     alert("hello from anonym func");
// })();
// Написать функцию, которая принимает 2 числа и возвращает меньшее из них.
let numOne = prompt("enter numOne");
let numTwo = prompt("enter numTwo");

function Min(_numOne, _numTwo) {
    return Math.min(_numOne, _numTwo);
}

let result = Min(numOne, numTwo);

alert(result);