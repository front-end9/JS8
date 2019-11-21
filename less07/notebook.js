class notebook {
    constructor(_options) {
        this.name = _options.name;
        this.processor = _options.processor;
        this.videocard = _options.videocard;
        this.ram = _options.ram;
        this.diagonal = _options.diagonal;
    }
    print() {
        document.write(`
            name: ${this.name}<br>
            processor: ${this.processor}<br>
            videocard: ${this.videocard}<br>
            ram: ${this.ram}<br>
            diagonal: ${this.diagonal}<br>
        `);
    }
}

let samsung = new notebook({
    name: "Gnusmas",
    processor: "Core i-1",
    videocard: "Intel",
    ram: "No installed",
    diagonal: "3ich"
});

let asus = new notebook({
    name: "Asus",
    processor: "Core i-7",
    videocard: "Radeon",
    ram: "8gb",
    diagonal: "17ich"
});

samsung.print();
asus.print();