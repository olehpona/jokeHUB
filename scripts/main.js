import "../styles/global.css"
import axios from "axios";


export default class ChuckNorisJokes{
    #categories;
    constructor(callback) {
        this.#_getCategories().then(value => {this.#categories=value.data;callback()});
        this.text = '';
        this.categorie = 'all'
    }
    #_getCategories(){
        return axios({
            method: "GET",
            url: "https://api.chucknorris.io/jokes/categories"
        });
    }
    get categories(){
        return this.#categories;
    }

    async randomJoke(){
        if (this.categorie === 'all'){
            return axios({
                method: "GET",
                url: "https://api.chucknorris.io/jokes/random"
            });
        } else {
            return axios({
                method: "GET",
                url: `https://api.chucknorris.io/jokes/random?category=${this.categorie}`
            });
        }

    }

    async searchedJoke(){
        if (this.text !== ''){
            return axios({
                method: "GET",
                url: `https://api.chucknorris.io/jokes/search?query=${this.text}`
            });
        } else {
            return {status:"bad"}
        }

    }

}