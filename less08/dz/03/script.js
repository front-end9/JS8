// 3. Создать html-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

// let state = false;

// let section = document.getElementsByTagName("section")[0];

// function Next() {
//     if (state) {
//         section.appendChild(document.getElementsByTagName("div")[0]);
//     }
//     else {
//         section.prepend(document.getElementsByTagName("div")[2]);
//     }
//     if (document.getElementsByTagName("div")[2].className == "active" && !state) {
//         state = !state;
//     }
//     else if (document.getElementsByTagName("div")[0].className == "active" && state) {
//         state = !state;
//     }
// }

// let i = 0;
// setInterval(() => {
//     document.body.style.backgroundColor = `hsl(${i++}, 100%, 50%)`;
//     i = i + 1 == 361 ? 0 : i;
// }, 100);

let li = document.getElementsByTagName("li");

for (let i = 0; i < li.length; i++) {
    const element = li[i];
    element.addEventListener("mouseenter", () => document.body.style.backgroundColor = element.innerText);
}