class User {
    constructor(options) {
        this.id = options.id;
        this.name = options.name;
        this.email = options.email;
        this.phone = options.phone;
        this.website = options.website;

        this.showInfo = false;
        this.showPosts = false;
    }
    RenderUser() {
        return `${this.name}`;
    }
    RenderUserInfo() {
        return `email: ${this.email}
        phone: ${this.phone}
        website: ${this.website}
        `;
    }
}

class Blog {
    constructor() {
        this.users = [];
        this.container = document.getElementById("root");
        this.userList = document.createElement("ul");

        this.container.appendChild(this.userList);
        this.Init();
    }
    Init() {
        this.Get('/users', this.SetUsers, this);
    }
    SetUsers(arr, self) {
        for (const user of arr) {
            self.users.push(new User(user));
        }
        self.RenderUsers(self.users, self);
    }
    RenderUsers(arr, self) {
        for (const user of arr) {
            let li = document.createElement("li");
            li.innerText = user.RenderUser();
            li.addEventListener("click", () => self.SetUsersInfo(user, self, li));
            self.userList.appendChild(li);
        }
    }
    SetUsersInfo(user, self, li) {
        if (!user.showInfo) {
            let div = document.createElement("div");
            div.innerText = user.RenderUserInfo();

            let btn = document.createElement("button");
            btn.innerText = "show posts";

            btn.addEventListener("click", () => self.SetPosts(user, self, div));

            div.appendChild(btn);

            li.appendChild(div);
            user.showInfo = true;
        }
    }
    SetPosts(user, self, div) {
        if (!user.showPosts) {
            self.Get(`/posts?userId=${user.id}`, self.RenderPosts, div);
            user.showPosts = true;
        }
    }
    RenderPosts(arr, el) {
        for (const item of arr) {
            let article = document.createElement("article");

            let h2 = document.createElement("h2");
            h2.innerText = item.title;

            let p = document.createElement("p");
            p.innerText = item.body;

            article.appendChild(h2);
            article.appendChild(p);

            el.appendChild(article);
        }
    }
    Get(path, func, el) {
        fetch(`https://jsonplaceholder.typicode.com${path}`)
            .then(response => response.json())
            .then(json => {
                func(json, el);
            });
    }
}

let b = new Blog();