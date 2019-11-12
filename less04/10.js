// Написать функцию, которая принимает дату (день, месяц, год) и возвращает дату следующего дня в виде строки  «дд.мм.гггг». Проверку на високосный год желательно написать отдельной функцией.

function NextDay(_day, _month, _year) {
    let timeInMs = Date.now();
    let today = new Date(timeInMs);

    today.setUTCFullYear(_year, --_month, _day);
    today.setMinutes(0);
    today.setHours(0);
    today.setSeconds(0);

    let newDay = new Date(Date.parse(today) + 86400000);

    return newDay;
}

alert(NextDay(+prompt("введите день"), +prompt("введите месяц"), +prompt("введите год")));