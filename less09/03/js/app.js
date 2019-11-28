// 09_practice для примера
// Создать рабочий TODO список.
// При клике на “Add” пункт добавляется в секцию TODO, при нажатии на чекбокс, пункт перемещается в поле “Completed”. Edit/Delete редактирует и удаляет пункт. 

let btnDelete = document.getElementsByClassName("delete");

for (let i = 0; i < btnDelete.length; i++) {
    const element = btnDelete[i];
    element.addEventListener("click", DeleteItem);
}

function DeleteItem() {
    confirm("Чувак, ты точно уверен что хочешь удалить?") ? event.target.parentNode.remove() : '';
}

let btnEdit = document.getElementsByClassName("edit");

for (let i = 0; i < btnEdit.length; i++) {
    const element = btnEdit[i];
    element.addEventListener("click", EditItem);
}

function EditItem() {
    let li = event.target.parentNode;
    let btn = li.querySelector(".edit");
    let label = li.querySelector("label");
    let inputText = li.querySelector("input[type=text]");
    li.classList.toggle("editMode");
    if (li.className == "editMode") {
        inputText.value = label.innerText;
        btn.innerText = "Save";
    }
    else {
        label.innerText = inputText.value;
        btn.innerText = "Edit";
    }
}

let checkbox = document.querySelectorAll("input[type=checkbox]");

for (let i = 0; i < checkbox.length; i++) {
    const element = checkbox[i];
    element.addEventListener("change", Switch);
}

function Switch() {
    let li = event.target.parentNode;
    if (event.target.checked) {
        document.getElementById("completed-tasks").appendChild(li);
    }
    else {
        document.getElementById("incomplete-tasks").appendChild(li);
    }
}

let add = document.getElementById("add");

add.addEventListener("click", function () {
    let li = document.createElement("li"),
        inputCheckbox = document.createElement("input"),
        label = document.createElement("label"),
        inputText = document.createElement("input"),
        btnEdit = document.createElement("button"),
        btnDelete = document.createElement("button");

    const text = document.getElementById("new-task");

    label.innerText = text.value;
    inputText.value = text.value;
    text.value = "";

    inputCheckbox.type = "checkbox";
    inputText.type = "text";

    btnEdit.className = "edit";
    btnDelete.className = "delete";

    btnEdit.innerText = "Edit";
    btnDelete.innerText = "Delete";

    li.appendChild(inputCheckbox);
    li.appendChild(label);
    li.appendChild(inputText);
    li.appendChild(btnEdit);
    li.appendChild(btnDelete);

    btnDelete.addEventListener("click", DeleteItem);
    btnEdit.addEventListener("click", EditItem);
    inputCheckbox.addEventListener("change", Switch);

    document.getElementById("incomplete-tasks").appendChild(li);
});