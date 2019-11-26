// Создать html-страницу с progressbar и кнопкой, при нажатии на которую заполненность progressbar увеличивается на 5%.

let hr = document.getElementsByTagName("hr")[0],
    width = 5;

hr.style.transition = `ease .3s all`;

function add() {
    width = width < 100 ? width : 95;
    hr.style.width = `${width += 5}%`;
}