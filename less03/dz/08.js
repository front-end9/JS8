// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

let counter = 0;

do {
    switch (counter % 7) {
        case 0:
            alert("mon");
            break;
        case 1:
            alert("tue");
            break;
        case 2:
            alert("wed");
            break;
        case 3:
            alert("thu");
            break;
        case 4:
            alert("fri");
            break;
        case 5:
            alert("sat");
            break;
        case 6:
            alert("sun");
            break;
    }
    counter++;
} while (confirm("вывести еще день недели?"));