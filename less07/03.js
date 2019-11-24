class PrintMaсhine {
    constructor(_options) {
        this.tag = _options.tag ? _options.tag : "div";
        this.font = _options.font ? _options.font : "Arial, sans-serif";
        this.color = _options.color ? _options.color : "#000";
        this.size = _options.size ? _options.size : 16;
    }
    print(_text) {
        return (`
        <${this.tag} style="
            font-family: ${this.font};    
            color: ${this.color};    
            font-size: ${this.size}px;    
        ">
        ${_text}
        </${this.tag}>
        `);
    }
}

class PrintLink extends PrintMaсhine {
    constructor(_options) {
        super(_options);
        this.tag = _options.tag ? _options.tag : 'a';
        this.href = _options.href ? _options.href : '#';
        this.inNewWindow = _options.inNewWindow ? _options.inNewWindow : false;
    }
    print(_text, _attr) {
        return (`
        <${this.tag}
        ${this.inNewWindow ? 'target="_blank"' : ''}
        href="${this.href}"
        style="
            font-family: ${this.font};    
            color: ${this.color};    
            font-size: ${this.size}px;    
        ">
        ${_text}
        </${this.tag}>
        `);
    }
}

class PrintArticle {
    constructor(_options) {
        this._title = _options.title;
        this._text = _options.text;
        this._hashtag = _options.hashtag;
        this._date = _options.date;
    }
    get title() {
        return new PrintMaсhine({
            tag: 'h1',
            size: 48,
            color: "blue",
            font: "Roboto"
        }).print(this._title);
    }
    get text() {
        return new PrintMaсhine({
            tag: 'p',
            size: 24,
            color: "red",
            font: "Times new roman"
        }).print(this._text);
    }
    get tags() {
        let buf = "<ul>";
        for (let i = 0; i < this._hashtag.length; i++) {
            buf += `
            <li>
                ${new PrintLink({
                size: 24,
                color: "red",
                font: "Times new roman",
                inNewWindow: true,
                href: this._hashtag[i].href
            }).print(this._hashtag[i].text)}
            </li>
            `;
        }
        buf += "</ul>";
        return buf;
    }
    get date() {
        let d = this._date;
        const timeInMs = Date.now();
        let dateNow = new Date(timeInMs);
        let dateArticle = new Date(d.year, d.month - 1, d.day);
        let daysAfterPost = new Date(dateNow - dateArticle) / 1000 / 60 / 60 / 24;
        let dateText;
        if (daysAfterPost < 1) {
            dateText = "Today";
        }
        else if (daysAfterPost < 7 && daysAfterPost > 1) {
            dateText = `${Math.trunc(daysAfterPost)} days ago`;
        }
        else {
            dateText = `${d.day}.${d.month}.${d.year}`;
        }
        return new PrintMaсhine({
            tag: 'time',
            size: 12,
            color: "grey",
            font: "Times new roman"
        }).print(dateText);
    }
    print() {
        return (`
            <article>
                ${this.title}
                ${this.text}
                ${this.tags}
                ${this.date}
            </article>
        `);
    }
}
// Реализовать класс, описывающий новостную ленту. Класс должен содержать:
class PrintNews {
    constructor(_options) {
        // массив новостей;
        this.articles = [];
        for (let i = 0; i < _options.length; i++) {
            this.articles.push(new PrintArticle(_options[i]));
        }
    }
    // метод для вывода на экран всех новостей;
    print() {
        let buf = '';
        for (let i = 0; i < this.articles.length; i++) {
            buf += this.articles[i].print();
        }
        document.write(buf);
    }
    // get-свойство, которое возвращает количество новостей;
    get length() {
        return this.articles.length;
    }
    // метод для сортировки новостей по дате (от последних новостей до старых);
    sort() {
        this.articles.sort(function (a, b) {
            if (new Date(a._date.year, a._date.month, a._date.day) < new Date(b._date.year, b._date.month, b._date.day)) {
                return -1;
            }
            if (new Date(a._date.year, a._date.month, a._date.day) > new Date(b._date.year, b._date.month, b._date.day)) {
                return 1;
            }
            return 0;
        });
        this.print();
    }
    // метод для добавления новости;
    addArticle() {
        let title = prompt("Введите заголовок новости");
        title = title ? title : `New article ${this.articles.length + 1}`;

        let text = prompt("Введите текст");
        text = text ? text : `Lorem ipsum dolor sit amet`;

        let hashtags = [];
        do {
            hashtags.push({
                text: prompt("Введите хештег"),
                href: "#"
            });
        } while (confirm("Хотите добавить еще один тег для новости?"));

        let date = {};

        if (confirm("Хотите добавить текущую дату?")) {
            let timeInMs = Date.now();
            let today = new Date(timeInMs);
            date = {
                day: today.getDate(),
                month: today.getMonth() + 1,
                year: today.getFullYear()
            };
        }
        else {
            date = {
                day: prompt("Введите day"),
                month: prompt("Введите month"),
                year: prompt("Введите year")
            };
        }

        let articleObj = {
            title: title,
            text: text,
            hashtag: hashtags,
            date: date
        };
        this.articles.push(new PrintArticle(articleObj));
        this.sort();
    }
    // метод для удаления новости;
    deleteArticle() {
        let index = +prompt("Введите номер новости для удаления");
        this.articles.splice(index - 1, 1);
        this.sort();
    }
    // метод для поиска новостей по тегу (возвращает массив новостей, в которых указан переданный в метод тег).
    search() {
        let tag = prompt("Введите тег для поиска новостей");
        let tempArray = [];
        let flag = false;
        for (let i = 0; i < this.articles.length; i++) {
            const article = this.articles[i];
            for (let j = 0; j < article._hashtag.length; j++) {
                const _tag = article._hashtag[j].text;
                if (_tag.toLowerCase() == tag.toLowerCase()) {
                    flag = true;
                }
            }
            if (flag) {
                tempArray.push(article);
                flag = false;
            }
        }
        this.articles = tempArray;
        this.sort();
    }
}

let news = new PrintNews([{
    title: "Hello from JS",
    text: "lorem ipsum dolor sit amet",
    hashtag: [{
        text: "google",
        href: "https://google.com"
    },
    {
        text: "facebook",
        href: "https://facebook.com"
    }],
    date: {
        day: 18,
        month: 10,
        year: 2019
    }
},
{
    title: "СИНОПТИКИ ПРЕДУПРЕЖДАЮТ О МОРОЗАХ ДО -14. КАКОЙ БУДЕТ ПОГОДА В УКРАИНЕ НА 24 НОЯБРЯ",
    text: "Сегодня, 24 ноября, в Украине ожидается преимущественно сухая и холодная погода. На Востоке страны температура будет самой низкой. Ночью и утром морозы до -14 градусов.",
    hashtag: [{
        text: "погода",
        href: "https://google.com"
    },
    {
        text: "синоптики",
        href: "https://facebook.com"
    },
    {
        text: "прогноз погоды",
        href: "https://facebook.com"
    },
    {
        text: " погода в украине",
        href: "https://facebook.com"
    }],
    date: {
        day: 24,
        month: 11,
        year: 2019
    }
},
{
    title: "В ОТДЕЛЬНЫХ РЕГИОНАХ СТОЛБИКИ ТЕРМОМЕТРОВ ОПУСТЯТСЯ ДО 14 ГРАДУСОВ МОРОЗА",
    text: "В воскресенье, 24 ноября, в Украине будет без осадков, лишь на Закарпатье, Прикарпатье и в Карпатах небольшие осадки.Об этом говорится в прогнозе Украинского гидрометеоцентра.",
    hashtag: [{
        text: "погода",
        href: "https://google.com"
    },
    {
        text: "мороз",
        href: "https://facebook.com"
    }],
    date: {
        day: 23,
        month: 11,
        year: 2019
    }
},
{
    title: "МОРОЗЫ ДО -12 И СИЛЬНЫЙ ВЕТЕР. КАКОЙ БУДЕТ ПОГОДА В УКРАИНЕ 23 НОЯБРЯ",
    text: "Сегодня, 23 ноября, в Украине ожидается преимущественно сухая и холодная погода. На Востоке страны температура будет самой низкой. Ночью и утром морозы до -12 градусов.Об этом говорится в прогнозе Украинского гидрометеоцентра.",
    hashtag: [{
        text: "погода",
        href: "https://google.com"
    },
    {
        text: "синоптики",
        href: "https://facebook.com"
    },
    {
        text: "прогноз погоды",
        href: "https://facebook.com"
    },
    {
        text: "погода в украине",
        href: "https://facebook.com"
    }
    ],
    date: {
        day: 21,
        month: 11,
        year: 2019
    }
}
]);


// Продемонстрировать работу написанных методов.
news.print();
// news.sort();
// news.addArticle();
// news.deleteArticle();
// news.search();