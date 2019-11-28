// Создать html-страницу с кнопкой Like, при нажатии на которую увеличивается счетчик лайков.

let btn = document.getElementsByTagName("button");

for (let i = 0; i < btn.length; i++) {
    const element = btn[i];
    element.addEventListener("click", () => element.innerText = +(element.innerText) + 1);
}
