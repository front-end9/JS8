// Создать html-страницу со вкладками. С левой стороны страницы отображается несколько вкладок, по которым можно переключаться. У каждой вкладки есть свое содержимое, но в один момент времени отображается содержимое только активной вкладки.
let list = document.getElementsByTagName("li");
let div = document.getElementsByTagName("div");
function Active(index) {
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("active");
        div[i].classList.remove("active");
    }
    list[index].classList.add("active");
    div[index].classList.add("active");
}
Active(0);
