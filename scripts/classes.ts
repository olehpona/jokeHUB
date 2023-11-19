import axios from "axios";

export class ChuckNorisJokes {
    #categories;

    constructor(elementId,callback) {
        this.text = '';
        this.category = 'all'
        this.elementId = elementId;
        this.#_getCategories().then(value => {
            this.#categories = value.data;
            callback()
        });
    }

    #_getCategories() {
        return axios({
            method: "GET",
            url: "https://api.chucknorris.io/jokes/categories"
        });
    }

    get categories() {
        return this.#categories;
    }


    async randomJoke() {
        if (this.category === 'all') {
            let res = await axios({
                method: "GET",
                url: "https://api.chucknorris.io/jokes/random"
            });
            this.#_renderJoke("one",res.data);
        } else {
            let res = await axios({
                method: "GET",
                url: `https://api.chucknorris.io/jokes/random?category=${this.category}`
            });
            this.#_renderJoke("one",res.data);
        }

    }

    async searchedJoke() {
        if (this.text !== '') {
            let res = await axios({
                method: "GET",
                url: `https://api.chucknorris.io/jokes/search?query=${this.text}`
            });
            this.#_renderJoke("multi",res.data);
        } else {
            return {status: "bad"}
        }

    }

    #_renderJoke(type, joke) {
        const element = document.getElementById(this.elementId);
        if (type === "one") {
            element.innerHTML = `<div class="w-full chuck__card p-4 h-fit rounded-lg m-3">
            <div class="h-fit">
                <p>${joke.value}</p>
            </div>
        </div>`
        } else {
            element.innerHTML = "";
            for (let i of joke.result.flat()) {
                element.innerHTML += `<div class="w-full chuck__card p-4 h-fit rounded-lg m-3">
                <div class="h-fit">
                    <p>${i.value}</p>
                </div>
            </div>`
            }
        }
    }
    prepareChuckJokeTypes(id) {
        let element = document.getElementById(id);
        for (let i of this.categories) {
            element.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
}