// Реализовать класс PrintMaсhine, которой состоит из:
// размера шрифта;
// цвета шрифта;
// семейства шрифта;
// метода print(), который принимает текст и печатает его соответствующим шрифтом с помощью document.write().
// Создать объект такого класса и продемонстрировать работу метода.

class PrintMaсhine {
    constructor(_options) {
        this.tag = _options.tag ? _options.tag : "div";
        this.font = _options.font ? _options.font : "Arial, sans-serif";
        this.color = _options.color ? _options.color : "#000";
        this.size = _options.size ? _options.size : 16;
    }
    print(_text) {
        document.write(`
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
        this.href = _options.href ? _options.href : '#';
        this.tag = _options.tag ? _options.tag : 'a';
        this.inNewWindow = _options.inNewWindow ? _options.inNewWindow : false;
    }
    print(_text, _attr) {
        document.write(`
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

let link = new PrintLink({
    size: 12,
    href: "https://google.com",
    inNewWindow: true
});

link.print("this is link");

let headline = new PrintMaсhine({
    tag: 'p',
    size: 24,
    color: "red",
    font: "Times new roman"
});

headline.print('hello world!');

let headline2 = new PrintMaсhine({
    tag: 'h1',
    size: 48,
    color: "blue",
    font: "Roboto"
});

headline2.print('lorem ipsum');
