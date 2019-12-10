// http://www.omdbapi.com/?apikey=22dac711&

let searchText = document.getElementById('search'),
    searchType = document.getElementById('type'),
    btnSearch = document.getElementById('go'),
    container = document.getElementById('root'),
    active = 1;

const url = `http://www.omdbapi.com/?apikey=22dac711`;

btnSearch.addEventListener("click", () => FillFilms());

searchText.addEventListener("change", () => active = 1);

function GetUrl(index = 0) {
    return url + `&s=${searchText.value}&type=${searchType.value}&page=${active + index}`;
}

function FillData(newUrl) {
    // let newUrl = `http://www.omdbapi.com/?apikey=22dac711&i=${id}`;
    fetch(newUrl)
        .then(response => response.json())
        .then(json => {
            console.log(json);
        });
}

function FillFilms(newUrl = GetUrl()) {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    fetch(newUrl)
        .then(response => response.json())
        .then(json => {
            if (json.Response == "True") {

                let aPrev = document.createElement("a");
                if (active - 1 == 0) {
                    aPrev.href = GetUrl(0);
                }
                else {
                    aPrev.href = GetUrl(-1);
                }
                aPrev.innerText = active - 1;

                aPrev.addEventListener("click", function (e) {
                    e.preventDefault();
                    active--;
                    if (active == 0) {
                        active = 1;
                    }
                    FillFilms(this.href);
                });

                let aNext = document.createElement("a");
                aNext.href = GetUrl(1);
                aNext.innerText = active + 1;

                aNext.addEventListener("click", function (e) {
                    e.preventDefault();
                    active++;
                    FillFilms(this.href);
                });

                container.appendChild(aPrev);
                container.appendChild(aNext);
                console.log(json);

                for (const el of json.Search) {
                    let img = document.createElement("img");
                    img.src = el.Poster;

                    let h2 = document.createElement("h2");
                    h2.innerText = el.Title;

                    let time = document.createElement("time");
                    time.innerText = el.Year;

                    let a = document.createElement("a");
                    a.href = `http://www.omdbapi.com/?apikey=22dac711&i=${el.imdbID}`;
                    a.innerText = "read more";
                    a.addEventListener("click", function (e) {
                        e.preventDefault();
                        FillData(this.href);
                    });

                    let div = document.createElement("div");
                    div.appendChild(img);
                    div.appendChild(h2);
                    div.appendChild(time);
                    div.appendChild(a);

                    container.appendChild(div);
                }
            }
            else if (json.Response == "False") {
                container.innerText = json.Error;
            }
        });
}