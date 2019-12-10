// 2. Создать html-страницу с кнопкой Открыть и модальным окном. На модальном окне должен быть текст и кнопка Закрыть. Изначально модальное окно не отображается. При клике на кнопку Открыть появляется модальное окно, на кнопку Закрыть – исчезает.

// let modal = document.getElementById("modal");

// modal.style.display = "none";

// function Show() {
//     modal.style.display = "block";
// }
// function Hide() {
//     modal.style.display = "none";
// }
// function HideModal() {
//     if (event.target == this) {
//         modal.style.display = "none";
//     }
// }

// modal.addEventListener("click", HideModal);

// let state = true;

// function Modal() {
//     let i = state ? 1 : 0;
//     let interval = setInterval(() => {
//         modal.style.opacity = `${state ? i -= 0.01 : i += 0.01}`;
//     }, 10);
//     setTimeout(() => {
//         clearInterval(interval);
//         state = !state;
//     }, 1000);
// }

// function Modal() {
//     modal.className = state ? "modal modal--isClosing" : "modal modal--isStartOpening";
//     if (modal.className == "modal modal--isStartOpening") {
//         modal.className = "modal modal--isOpening";
//     }
//     state = !state;
// }

// modal.addEventListener("transitionend", function () {
//     modal.className = state ? "modal modal--isOpen" : "modal modal--isClose";
// });