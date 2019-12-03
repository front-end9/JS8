class Slider {
    constructor(id, options) {
        this.container = document.getElementById(id);
        this.slides = this.container.querySelectorAll("img");
        // запоминаем активный слайд
        this.active = options.active ? options.active - 1 : 0;
        // автовоспроизведение
        this.autoplay = options.autoplay ? options.autoplay : false;
        this.autoplaySpeed = options.autoplaySpeed ? options.autoplaySpeed : 1000;

        // зациклить слайд
        this.infinity = options.infinity ? options.infinity : true;

        // навигация
        this.navigation = options.navigation ? options.navigation : false;

        // пагинация
        this.pagination = options.pagination ? options.pagination : false;

        this.Init();
    }

    Init() {
        if (this.autoplay) {
            setInterval(() => {
                this.ChangeActive(1);
            }, this.autoplaySpeed);
        }

        if (this.navigation) {
            this.btnNext = document.createElement("button");
            this.btnPrev = document.createElement("button");

            this.btnNext.innerText = "Следующий слайд";
            this.btnPrev.innerText = "Предидущий слайд";

            this.btnNext.addEventListener("click", () => this.ChangeActive(1));
            this.btnPrev.addEventListener("click", () => this.ChangeActive(-1));

            this.container.appendChild(this.btnPrev);
            this.container.appendChild(this.btnNext);
        }

        if (this.pagination) {
            this.pagiList = document.createElement("ul");

            for (let i = 0; i < this.slides.length; i++) {
                let li = document.createElement("li");
                li.addEventListener("click", () => {
                    this.active = i;
                    this.Render();
                });
                this.pagiList.appendChild(li);
            }

            this.container.appendChild(this.pagiList);
            this.pagiItems = this.pagiList.querySelectorAll("li");

            this.pagiItems[this.active].classList.add("active");
        }

        this.overflow = document.createElement("div");
        this.overflow.classList.add("overflow");
        this.overflow.style.overflow = "hidden";

        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("wrapper");
        this.overflow.style.width = "320px";

        this.overflow.appendChild(this.wrapper);

        this.container.prepend(this.overflow);

        let wrapperWidth = 0;

        for (let i = 0; i < this.slides.length; i++) {
            this.wrapper.prepend(this.slides[i]);
            // this.slides[i].style.width = this.container.clientWidth + "px";
            wrapperWidth += this.slides[i].offsetWidth;
        }

        this.wrapper.style.cssText = `
            display:flex;
            width: ${wrapperWidth}px;
            transition: ease .3s transform;
            transform: translate(-${this.active * this.overflow.clientWidth}px);
        `;

        this.Render();
    }

    ChangeActive(index) {
        this.active += index;
        if (this.infinity) {
            if (this.active == this.slides.length) {
                this.active = 0;
            }
            else if (this.active == -1) {
                this.active = this.slides.length - 1;
            }
        }
        else {
            if (this.active == this.slides.length) {
                this.active = this.slides.length - 1;
            }
            else if (this.active == -1) {
                this.active = 0;
            }
        }

        this.Render();
    }

    Render() {
        // прячем все слайды
        for (let i = 0; i < this.slides.length; i++) {
            this.pagiItems[i].classList.remove("active");
        }
        // отображаем активный слайд
        this.pagiItems[this.active].classList.add("active");

        this.wrapper.style.transform = `translate(-${this.active * this.overflow.clientWidth}px)`;
    }
}

let slider = new Slider('slider', {
    // active: 3,
    // autoplay: true,
    navigation: true,
    pagination: true
});

console.log(slider.slides);