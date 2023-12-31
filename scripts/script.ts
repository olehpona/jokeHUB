import "../styles/global.css";
import { ChuckNorisJokes } from "./classes.ts";
import {
  addJoke,
  getJoke,
  removeJoke,
  updateJoke,
  signUp,
  logIn,
  removeLike,
  getLikes,
  addLike,
  updateLikes,
} from "./api.ts";

const chuck = new ChuckNorisJokes("chuck__joke__body", addAppEvents);
let jokeType = "all";
let jokeIndexes = "all";
let jokeSort = "none";

// Animation
const fadeIn = {
  opacity: [0, 1],
};
const fadeOut = {
  opacity: [1, 0],
};
const grow = {
  height: ["3rem", "100%"],
};
const shrink = {
  height: ["100%", "3rem"],
};

addLoginEvents();

if (localStorage.getItem("token")) {
  logIn(
    "",
    "",
    () => {
      localStorage.removeItem("token");
      location.reload();
    },
    async (data : {token:string}) => {
      localStorage.setItem("token", data.token);
      await getLikes((data: string[]): void => {
        localStorage.setItem("liked", JSON.stringify(data));
      });
      await renderCard();
    }
  );
} else {
  (document.getElementById("login_modal") as HTMLElement).style.display =
    "block";
  (
    document.getElementById("login_modal_login") as HTMLElement
  ).addEventListener("click", () => {
    logIn(
      (<HTMLInputElement>document.getElementById("modal__login_login")).value,
      (<HTMLInputElement>document.getElementById("modal__login_password"))
        .value,
      (e : string) => {
        localStorage.removeItem("token");
        (<HTMLElement>(
          document.getElementById("modal__login__error")
        )).classList.remove("hidden");
        (<HTMLElement>(
          document.getElementById("modal__login__error")
        )).innerText = e;
      },
      async (data : {token : string}) => {
        localStorage.setItem("token", data.token);
        (<HTMLElement>(
          document.getElementById("modal__login__error")
        )).classList.add("hidden");
        (<HTMLElement>document.getElementById("login_modal")).style.display =
          "none";
        await getLikes((data: string[]): void => {
          localStorage.setItem("liked", JSON.stringify(data));
        });
        renderCard();
      }
    );
  });
  (<HTMLElement>document.getElementById("login_modal_signup")).addEventListener(
    "click",
    () => {
      signUp(
        (<HTMLInputElement>document.getElementById("modal__login_login")).value,
        (<HTMLInputElement>document.getElementById("modal__login_password"))
          .value,
        (e: string) => {
          localStorage.removeItem("token");
          (<HTMLElement>(
            document.getElementById("modal__login__error")
          )).classList.remove("hidden");
          (<HTMLElement>(
            document.getElementById("modal__login__error")
          )).innerText = e;
        },
        async (data : {token: string}) => {
          localStorage.setItem("token", data.token);
          (<HTMLElement>(
            document.getElementById("modal__login__error")
          )).classList.add("hidden");
          (<HTMLElement>document.getElementById("login_modal")).style.display =
            "none";
          await getLikes((data: string[]) => {
            localStorage.setItem("liked", JSON.stringify(data));
          });
          renderCard();
        }
      );
    }
  );
}

function addLoginEvents() {
  const showPassword = () => {
    (<HTMLElement>(
      document.getElementById("login__password__svg2")
    )).classList.add("hidden");
    (<HTMLElement>(
      document.getElementById("login__password__svg1")
    )).classList.remove("hidden");
    (<HTMLInputElement>document.getElementById("modal__login_password")).type =
      "text";
  };
  const hidePassword = () => {
    (<HTMLElement>(
      document.getElementById("login__password__svg2")
    )).classList.remove("hidden");
    (<HTMLElement>(
      document.getElementById("login__password__svg1")
    )).classList.add("hidden");
    (<HTMLInputElement>document.getElementById("modal__login_password")).type =
      "password";
  };
  (<HTMLElement>(
    document.getElementById("login__password__show")
  )).addEventListener("mousedown", () => {
    showPassword();
  });
  (<HTMLElement>(
    document.getElementById("login__password__show")
  )).addEventListener("mouseup", () => {
    hidePassword();
  });
  (<HTMLElement>(
    document.getElementById("login__password__show")
  )).addEventListener("touchstart", () => {
    showPassword();
  });
  (<HTMLElement>(
    document.getElementById("login__password__show")
  )).addEventListener("touchend", () => {
    hidePassword();
  });
}

function addAppEvents() {
  const jokeTabOpenBtn = <HTMLElement>document.getElementById("joke_open");
  const jokeTabBody = <HTMLElement>document.getElementById("joke_body");
  const chuckTabOpenBtn = <HTMLElement>(
    document.getElementById("chuckNoris_open")
  );
  const chuckTabBody = <HTMLElement>document.getElementById("chuck_body");
  const chuckBodyParent = <HTMLElement>chuckTabBody.parentElement;
  const jokeBodyParent = <HTMLElement>jokeTabBody.parentElement;
  const chuckTabOpen = (): void => {
    chuckTabOpenBtn.classList.add("open");
    chuckBodyParent.animate(grow, { duration: 500 });
    jokeTabOpenBtn.classList.remove("open");
    chuckTabBody.classList.remove("hidden");
    jokeBodyParent.animate(shrink, { duration: 500 });
    Promise.all(
      (<HTMLElement>jokeTabOpenBtn.parentElement)
        .getAnimations()
        .map((animation) => animation.finished)
    ).then(() => {
      jokeTabBody.classList.add("hidden");
      jokeBodyParent.classList.remove("h-full");
      jokeBodyParent.classList.add("h-fit");
    });
    Promise.all(
      chuckBodyParent.getAnimations().map((animation) => animation.finished)
    ).then(() => {
      chuckBodyParent.classList.remove("h-fit");
      chuckBodyParent.classList.add("h-full");
    });
    jokeBodyParent.classList.remove("h-full");
    jokeBodyParent.classList.add("h-fit");
  };
  const jokeTabOpen = () => {
    jokeTabOpenBtn.classList.add("open");
    jokeBodyParent.animate(grow, { duration: 500 });
    chuckTabOpenBtn.classList.remove("open");
    jokeTabBody.classList.remove("hidden");
    chuckBodyParent.animate(shrink, { duration: 500 });
    Promise.all(
      chuckBodyParent.getAnimations().map((animation) => animation.finished)
    ).then(() => {
      chuckTabBody.classList.add("hidden");
      chuckBodyParent.classList.remove("h-full");
      chuckBodyParent.classList.add("h-fit");
    });
    Promise.all(
      jokeBodyParent.getAnimations().map((animation) => animation.finished)
    ).then(() => {
      jokeBodyParent.classList.remove("h-fit");
      jokeBodyParent.classList.add("h-full");
    });
    chuckBodyParent.classList.remove("h-full");
    chuckBodyParent.classList.add("h-fit");
  };
  chuckTabOpenBtn.addEventListener("click", () => {
    if (chuckBodyParent.getAnimations().length === 0) {
      console.log(chuckTabBody.getAnimations());
      if (chuckTabOpenBtn.classList.contains("open")) {
        jokeTabOpen();
      } else {
        chuckTabOpen();
      }
    }
  });
  jokeTabOpenBtn.addEventListener("click", () => {
    if (chuckBodyParent.getAnimations().length === 0) {
      if (jokeTabOpenBtn.classList.contains("open")) {
        chuckTabOpen();
      } else {
        jokeTabOpen();
      }
    }
  });
  chuck.prepareChuckJokeTypes("chuck__joke_type");
  (<HTMLElement>document.getElementById("chuck__joke_type")).addEventListener(
    "change",
    (event) => {
      chuck.category = (<HTMLInputElement>event.target).value;
    }
  );
  (<HTMLElement>(
    document.getElementById("chuck__joke_get_random")
  )).addEventListener("click", () => chuck.randomJoke());
  (<HTMLElement>document.getElementById("chuck__joke_key")).addEventListener(
    "change",
    (event) => (chuck.text = (<HTMLInputElement>event.target).value)
  );
  (<HTMLElement>(
    document.getElementById("chuck__joke_get_searched")
  )).addEventListener("click", () => chuck.searchedJoke());
  const sort_select = <HTMLSelectElement>(
    document.getElementById("sorting_select")
  );
  sort_select.selectedIndex = 0;
  sort_select.addEventListener("change", () => {
    jokeSort = sort_select.value;
    renderCard();
  });
  (<HTMLButtonElement>document.getElementById("edit_btn")).addEventListener(
    "click",
    () => {
      for (let i of document.querySelectorAll(".main__card__more")) {
        i.classList.toggle("open");
      }
    }
  );
  //create modal events
  const create_modal = <HTMLElement>document.getElementById("create_modal");
  (<HTMLButtonElement>document.getElementById("create_btn")).addEventListener(
    "click",
    () => {
      create_modal.classList.remove("hidden");
      create_modal.animate(fadeIn, { duration: 300 });
    }
  );
  for (let i of create_modal.querySelectorAll(".modal__close")) {
    i.addEventListener("click", () => {
      create_modal.animate(fadeOut, { duration: 300 });
      Promise.all(
        create_modal.getAnimations().map((animation) => animation.finished)
      ).then(() => create_modal.classList.add("hidden"));
    });
  }
  (<HTMLElement>document.getElementById("create_modal_save")).addEventListener(
    "click",
    () => {
      if (
        /\S+\s+\(\S+@\S+\.\S+\)/g.test(
          (<HTMLInputElement>document.getElementById("modal__joke_author"))
            .value
        )
      ) {
        createJoke();
        create_modal.animate(fadeOut, { duration: 300 });
        Promise.all(
          create_modal.getAnimations().map((animation) => animation.finished)
        ).then(() => create_modal.classList.add("hidden"));
      } else {
        alert("Invalid Author. Please type author like 'Author (Email)'");
      }
    }
  );

  const detailModal = <HTMLElement>document.getElementById("detail_modal");
  (<HTMLElement>detailModal.querySelector(".modal__close")).addEventListener(
    "click",
    () => {
      detailModal.animate(fadeOut, { duration: 300 });
      Promise.all(
        detailModal.getAnimations().map((animation) => animation.finished)
      ).then(() => detailModal.classList.add("hidden"));
    }
  );

  const likeBtn = <HTMLButtonElement>document.getElementById("like_btn");
  const likeBtnFunc = () => {
    if (likeBtn.classList.contains("selected")) {
      jokeIndexes = "all";
      renderCard();
      likeBtn.classList.remove("selected");
    } else {
      likeBtn.classList.add("selected");
      if (JSON.parse(<string>localStorage.getItem("liked")) !== null) {
        jokeIndexes = JSON.parse(<string>localStorage.getItem("liked"));
        renderCard();
      } else {
        (<HTMLElement>document.getElementById("card_container")).innerHTML =
          '<img alt="loading" class="w-full h-full" src="loading.gif">';
      }
    }
  };

  likeBtn.addEventListener("click", likeBtnFunc);

  const lightBtn = <HTMLElement>document.getElementById("light_btn");
  const darkBtn = <HTMLElement>document.getElementById("dark_btn");
  const lightBtnFunc = () => {
    if (lightBtn.classList.contains("selected")) {
      jokeType = "all";
      renderCard();
    } else {
      darkBtn.classList.remove("selected");
      jokeType = "light";
      renderCard();
    }
  };
  const darkBtnFunc = () => {
    if (darkBtn.classList.contains("selected")) {
      jokeType = "all";
      renderCard();
    } else {
      jokeType = "dark";
      lightBtn.classList.remove("selected");
      renderCard();
    }
  };
  lightBtn.addEventListener("click", lightBtnFunc);
  darkBtn.addEventListener("click", darkBtnFunc);
  for (let i of document.querySelectorAll(".nav__button.toggle")) {
    i.addEventListener("click", () => i.classList.toggle("selected"));
  }
  (<HTMLElement>document.getElementById("create_detail_save")).addEventListener(
    "click",
    () => {
      if (
        /\S+\s+\(\S+@\S+\.\S+\)/g.test(
          (<HTMLInputElement>document.getElementById("detail__joke_author"))
            .value
        )
      ) {
        const updateData = {
          name: (<HTMLInputElement>document.getElementById("detail__joke_name"))
            .value,
          author: (<HTMLInputElement>(
            document.getElementById("detail__joke_author")
          )).value,
          text: (<HTMLInputElement>document.getElementById("detail__joke_text"))
            .value,
          type: <"light" | "dark">(
            (<HTMLInputElement>document.getElementById("detail__joke_type"))
              .value
          ),
        };
        updateJoke(
          (<HTMLInputElement>document.getElementById("detail__id")).value,
          updateData
        );
        detailModal.animate(fadeOut, { duration: 300 });
        Promise.all(
          detailModal.getAnimations().map((animation) => animation.finished)
        ).then(() => detailModal.classList.add("hidden"));
        renderCard();
      } else {
        alert("Invalid Author. Please type author like 'Author (Email)'");
      }
    }
  );
}

async function renderCard(ids = jokeIndexes) {
  let liked = <string>localStorage.getItem("liked");
  const root = <HTMLElement>document.getElementById("card_container");
  (<HTMLElement>document.getElementById("edit_btn")).classList.remove(
    "selected"
  );
  root.innerHTML =
    '<img alt="loading" class="w-full h-full" src="loading.gif">';
  let res;
  try {
    res = await getJoke(ids, jokeType, jokeSort);
  } catch (e: any){
    root.innerHTML = `<p>${e.message} occurred, try later</p>`;
    return;
  }
  if (res.status !== 200) {
    root.innerHTML = `<p>Error occurred, try later</p>`;
    return;
  }
  root.innerHTML = ``;
  let data: Array<{name:string, author: string, likes: number, body: string, type:"light"|"dark", id:string}> = res.data;
  const detailModal = <HTMLElement>document.getElementById("detail_modal");

  const setUpModal = (title: string, inputEnable: boolean, data: {name: string, author: string, body: string, type: "light"|"dark", id: string}) => {
    (<HTMLInputElement>document.getElementById("detail__joke_name")).value =
      data.name;
    (<HTMLInputElement>document.getElementById("detail__joke_author")).value =
      data.author;
    (<HTMLInputElement>document.getElementById("detail__joke_text")).value =
      data.body;
    (<HTMLInputElement>document.getElementById("detail__joke_type")).value =
      data.type;
    (<HTMLInputElement>document.getElementById("detail__id")).value = data.id;
    for (let i of <NodeListOf<HTMLInputElement>>(
      detailModal.querySelectorAll(".modal__input")
    )) {
      i.disabled = inputEnable;
    }
    (<HTMLElement>(
      detailModal.querySelector(".modal__inner__header__title")
    )).innerText = title;
    detailModal.animate(fadeIn, { duration: 300 });
    detailModal.classList.remove("hidden");
  };

  for (let cardData of data) {
    let card = <Element>document.createElement("div");
    card.innerHTML = `<div class="w-56 main__card h-fit p-4 rounded-lg m-3">
                <div class="main__card__body flex  items-stretch justify-stretch flex-col">
                    <header class="h-1/5 mb-4 ">
                        <h4 class="font-medium truncate  mb-0.5">${cardData.author}</h4>
                        <h3 class="h-4/6 overflow-hidden text-ellipsis">${cardData.name}</h3>
                        <p>likes: ${cardData.likes}</p>
                    </header>
                    <div class="h-4/5 mt-2 text-ellipsis overflow-hidden">
                        <p>${cardData.body}</p>
                    </div>
                    <div class="h-1/6 flex mt-3">
                        <button class="flex items-center px-3 justify-start h-full  main__card__button mr-2 rounded-lg w-3/5 main__card__detail_btn">
                            Detail
                        </button>
                        <button class="main__card__button w-2/5 h-full rounded-lg flex justify-center items-center like_btn">
                          <span class="icon-[iconamoon--like] w-[90%] h-[90%]"></span>
                        </button>
                    </div>
                </div>
                <div class="mt-2 justify-center rounded-b-lg  main__card__more h-8">
                    <button class="flex items-center px-3 justify-start basis-3/6 main__card__button mr-2 rounded-lg main__card__more__delete">
                        Delete
                    </button>
                    <button class="basis-3/6 main__card__button rounded-lg flex justify-center items-center main__card__more__edit">
                        Edit
                    </button>
                </div>
            </div>`;
    card = <Element>card.firstElementChild;
    //query selector for detail b
    (<HTMLElement>(
      card.querySelector(".main__card__detail_btn")
    )).addEventListener("click", () => {
      setUpModal("Detail", true, cardData);
      (<HTMLElement>detailModal.querySelector(".detail_edit")).classList.remove(
        "flex"
      );
      (<HTMLElement>detailModal.querySelector(".detail_edit")).classList.add(
        "hidden"
      );
    });
    (<HTMLElement>(
      card.querySelector(".main__card__more__edit")
    )).addEventListener("click", () => {
      setUpModal("Edit", false, cardData);
      (<HTMLElement>detailModal.querySelector(".detail_edit")).classList.remove(
        "hidden"
      );
      (<HTMLElement>detailModal.querySelector(".detail_edit")).classList.add(
        "flex"
      );
      detailModal.classList.remove("hidden");
      detailModal.animate(fadeIn, { duration: 300 });
    });
    (<HTMLElement>(
      card.querySelector(".main__card__more__delete")
    )).addEventListener("click", () => {
      removeJoke(cardData.id);
      removeLike(cardData.id, (data : {}) => {
        localStorage.setItem("liked", JSON.stringify(data));
      });
      renderCard();
    });
    const likeBtn = <HTMLElement>card.querySelector(".like_btn");
    if (liked.includes(cardData.id)) likeBtn.classList.add("liked");
      likeBtn.addEventListener("click", () => {
        if (likeBtn.classList.contains("liked")) {
          likeBtn.classList.remove("liked");
          removeLike(cardData.id, (data:{}) => {
            localStorage.setItem("liked", JSON.stringify(data));
          });
          updateLikes("down", cardData.id);
        } else {
          likeBtn.classList.add("liked");
          addLike(cardData.id, (data:{}) => {
            localStorage.setItem("liked", JSON.stringify(data));
          });
          updateLikes("up", cardData.id);
        }
      });

    root.appendChild(card);
  }
}

function createJoke() {
  const data = {
    author: (<HTMLInputElement>document.getElementById("modal__joke_author")).value,
    name: (<HTMLInputElement>document.getElementById("modal__joke_name")).value,
    body: (<HTMLInputElement>document.getElementById("modal__joke_text")).value,
    type: (<HTMLInputElement>document.getElementById("modal__joke_type")).value,
  };
  console.log(addJoke(data));
  renderCard();
}
