import axios from "axios";

export class ChuckNorisJokes {
  #categories: string[] = [];
  text: string;
  category: string;
  elementId: string;
  constructor(elementId: string, callback: () => void) {
    this.text = "";
    this.category = "all";
    this.elementId = elementId;
    this.#_getCategories().then((value) => {
      this.#categories = value.data;
      callback();
    });
  }

  #_getCategories() {
    return axios({
      method: "GET",
      url: "https://api.chucknorris.io/jokes/categories",
    });
  }

  get categories(): string[] {
    return this.#categories;
  }

  async randomJoke() {
    if (this.category === "all") {
      let res = await axios({
        method: "GET",
        url: "https://api.chucknorris.io/jokes/random",
      });
      this.#_renderJoke("one", res.data);
    } else {
      let res = await axios({
        method: "GET",
        url: `https://api.chucknorris.io/jokes/random?category=${this.category}`,
      });
      this.#_renderJoke("one", res.data);
    }
  }

  async searchedJoke() {
    if (this.text !== "") {
      let res = await axios({
        method: "GET",
        url: `https://api.chucknorris.io/jokes/search?query=${this.text}`,
      });
      this.#_renderJoke("multi", res.data);
      return { status: "good" };
    } else {
      return { status: "bad" };
    }
  }

  #_renderJoke(
    type: string,
    joke: {value: string} | {result: { value: string }[]}
  ) {
    const element = <HTMLElement>document.getElementById(this.elementId);
    if (type === "one") {
      element.innerHTML = `<div class="w-full chuck__card p-4 h-fit rounded-lg m-3">
            <div class="h-fit">
                <p>${(<{ value: string }>joke).value}</p>
            </div>
        </div>`;
    } else {
      element.innerHTML = "";
      for (let i of (<{ result: { value: string }[] }>joke).result.flat()) {
        element.innerHTML += `<div class="w-full chuck__card p-4 h-fit rounded-lg m-3">
                <div class="h-fit">
                    <p>${i.value}</p>
                </div>
            </div>`;
      }
    }
  }
  prepareChuckJokeTypes(id:string) {
    let element = <HTMLElement>document.getElementById(id);
    for (let i of this.categories) {
      element.innerHTML += `<option value="${i}">${i}</option>`;
    }
  }
}