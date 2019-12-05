let arr = [];

const url = "../data/employees.json";

// alert("before Fetch");

fetch(url)
    .then(response => response.json())
    .then(myJson => {
        // alert("in Fetch");
        console.log(JSON.stringify(myJson));
        arr = myJson;
        let ul = document.createElement("ul");

        document.getElementById("employeeList").appendChild(ul);
        ul.className = 'bulleted';

        for (const el of arr) {
            let li = document.createElement("li");
            li.innerText = el.name;
            li.className = el.inoffice ? 'in' : 'out';
            ul.appendChild(li);
        }
    })
    .catch(function (error) {
        console.log("ERROR!");
        console.error(error);
    });

// alert("After fetch");
