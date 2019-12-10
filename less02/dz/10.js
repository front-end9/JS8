// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

let year = +prompt('enter year');

let lofty = false;
if (((year % 400 == 0) || (year % 4 == 0)) && (year % 100 != 0)) {
    lofty = true;
} else {
    lofty = false;
}

let month = +prompt('enter month');

if (month >= 1 || month <= 12) {

    let day = +prompt('enter day');

    if (day >= 1) {
        if (day <= 28 && (!lofty && month == 2)) {
            if (day <= 29 && (lofty && month == 2)) {
                if (day <= 30 && (mont == 4 || month == 6 || month == 10)) {
                    if (day <= 31) {
                        day++;
                        if (day >= 32) {
                            if (day <= 31 && (mont == 4 || month == 6 || month == 10)) {
                                if (day <= 30 && (lofty && month == 2)) {
                                    if (day <= 29 && (!lofty && month == 2)) {
                                        month++;
                                        if (month > 12) {
                                            year++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        alert('day is not correct')
    }
} else {
    alert("month is not correct");
}