// Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). В зависимости от введенного знака решить пример и вывести результат.

let firstNumber = prompt("enter number one"),
    secondNumber = prompt("enter number two"),
    action = prompt("enter action"),
    sum,
    dif,
    mult,
    div;


switch (action) {
    case "+":
        sum = firstNumber + secondNumber;
        alert(`Result of sum = ${sum}`);
        break;
    case "-":
        dif = firstNumber - secondNumber;
        alert(`Result of dif = ${dif}`);
        break;
    case "*":
        mult = firstNumber * secondNumber;
        alert(`Result of mult = ${mult}`);
        break;
    case "/":
        div = firstNumber / secondNumber;
        alert(`Result of div = ${div}`);
        break;
    default:
        break;
}