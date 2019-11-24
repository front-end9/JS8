// Реализовать класс, описывающий новость (заголовок, текст, массив меток, дата публикации). В классе необходимо реализовать один метод print, который выводит всю информацию через document.write() Если с даты публикации прошло менее дня, то выводится «сегодня», если с даты публикации прошло менее недели, то выводится «N дней назад», в остальных случаях, полная дата в формате «дд.мм.гггг».

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
        let dateArticle = new Date(d.year, d.month, d.day);
        let daysAfterPost = new Date(dateNow - dateArticle) / 1000 / 60 / 60 / 24;
        let dateText;
        if (daysAfterPost < 1) {
            dateText = "Today";
        }
        else if (daysAfterPost < 7 && daysAfterPost > 1) {
            dateText = `${Math.trunc(daysAfterPost)} days ago`;
        }
        else {
            dateText = `${d.day}.${d.month + 1}.${d.year}`;
        }
        return new PrintMaсhine({
            tag: 'time',
            size: 12,
            color: "grey",
            font: "Times new roman"
        }).print(dateText);
    }
    print() {
        document.write(`
            <article>
                ${this.title}
                ${this.text}
                ${this.tags}
                ${this.date}
            </article>
        `);
    }
}

let newArticle = new PrintArticle({
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
});

newArticle.print();