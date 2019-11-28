// Создать html-страницу с любым содержимым и запретить пользователю выделять текст и вызывать контекстное меню кликом правой кнопки.

console.log(this);
window.addEventListener("mousedown", () => console.log(event.target));

document.getElementById("btn").addEventListener("click", () => {
    window.addEventListener("contextmenu", () => event.preventDefault());
    window.addEventListener("mousedown", () => event.preventDefault());
    window.addEventListener("keydown", () => event.preventDefault());
});

