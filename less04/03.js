// Написать функцию, которая принимает 2 числа и знак  (+ - * /), считает пример и возвращает результат.

function Action(_one, _two, _action) {
    return eval(`${_one} ${_action} ${_two}`);
}

alert(Action(prompt("enter one"), prompt("enter two"), prompt("enter action")));