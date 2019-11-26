// Создать html-страницу, на которой будет кнопка и текст. При нажатии на кнопку, текст должен скрываться. При повторном нажатии – текст должен снова отображаться.

// определение вкл или выкл
let flag = true;

const btn = document.getElementById("btn"),
    p = document.getElementById("p"),
    lamp = document.querySelector(".fa-lightbulb");

function Switch() {
    if (flag) {
        p.style.display = "none";
        btn.innerText = "Включить";
    }
    else {
        p.style.display = "block";
        btn.innerText = "Выключить";
    }
    lamp.classList.toggle("fas");
    lamp.classList.toggle("far");
    flag = !flag;
}