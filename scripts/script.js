import "../styles/global.css"
import {ChuckNorisJokes} from "./classes.js"
import {addJoke, getJoke, removeJoke, updateJoke, signUp, logIn, removeLike, getLikes, addLike, updateLikes} from "./api.js";

const chuck = new ChuckNorisJokes(addEvents);
let jokeType = "all"
let jokeIndexes = "all"
let jokeSort = "none";



if (localStorage.getItem("token")){
    logIn("","",function(){localStorage.removeItem("token")},async function (){await getLikes(); await renderCard();})
} else {
    document.getElementById("login_modal").style.display = "block";
    document.getElementById("login_modal_login").addEventListener("click",(e) => {
        logIn(document.getElementById("modal__login_login").value, document.getElementById("modal__login_password").value, function (e) {
            document.getElementById("modal__login__error").classList.remove("hidden");
            document.getElementById("modal__login__error").innerText = e;
        }, async function(){
            document.getElementById("modal__login__error").classList.add("hidden");
            document.getElementById("login_modal").style.display = "none";
            await getLikes()
            renderCard()
        });
    })
    document.getElementById("login_modal_signup").addEventListener("click", (e)=>{
        signUp(document.getElementById("modal__login_login").value, document.getElementById("modal__login_password").value, function(e){
            document.getElementById("modal__login__error").classList.remove("hidden");
            document.getElementById("modal__login__error").innerText = e;
        }, async function(){
            document.getElementById("modal__login__error").classList.add("hidden");
            document.getElementById("login_modal").style.display = "none";
            await getLikes()
            renderCard()
        })
    })
}



function prepareChuckJokeTypes() {
    let element = document.getElementById('chuck__joke_type');
    for (let i of chuck.categories) {
        element.innerHTML += `<option value="${i}">${i}</option>`
    }
}

async function renderJoke(type, joke) {
    const res = await joke;
    const element = document.getElementById("chuck__joke__body");
    if (res.status === 200) {
        if (type === "one") {
            element.innerHTML = `<div class="w-full chuck__card p-4 h-fit rounded-lg m-3">
                <div class="h-fit">
                    <p>${res.data.value}</p>
                </div>
            </div>`
        } else {
            element.innerHTML = "";
            for (let i of res.data.result.flat()) {
                element.innerHTML += `<div class="w-full chuck__card p-4 h-fit rounded-lg m-3">
                    <div class="h-fit">
                        <p>${i.value}</p>
                    </div>
                </div>`
            }
        }
    } else {
        element.innerHTML = "<div class=\"w-full chuck__card p-4 h-fit rounded-lg m-3\">" +
            "<div class=\"h-fit\">" +
            "<p>Error</p>" +
            "</div></div>"
    }

}

function addEvents() {
    prepareChuckJokeTypes();
    document.getElementById('chuck__joke_type').addEventListener("change", (event) => {
        chuck.categorie = event.target.value;
    });
    document.getElementById('chuck__joke_get_random').addEventListener("click", (event) => renderJoke("one", chuck.randomJoke()));
    document.getElementById('chuck__joke_key').addEventListener("change", (event) => chuck.text = event.target.value);
    document.getElementById('chuck__joke_get_searched').addEventListener("click", (event) => renderJoke("multi", chuck.searchedJoke()));
    const sort_select = document.getElementById("sorting_select");
    sort_select.selectedIndex = 0;
    sort_select.addEventListener("change", (e) => {
        jokeSort = sort_select.value;
        renderCard();
    })
    document.getElementById("edit_btn").addEventListener("click", (e) => {
        for (let i of document.querySelectorAll(".main__card__more")) {
            i.classList.toggle("open");
        }
    })
    //create modal events
    const create_modal = document.getElementById("create_modal");
    document.getElementById("create_btn").addEventListener("click", (e) => {
        create_modal.style.display = "block";
        create_modal.style.animation = "fadeIn 0.3s";

    })
    for (let i of document.querySelectorAll(".modal__close")) {
        i.addEventListener("click", (e) => {
            create_modal.style.animation = "fadeOut 0.3s";
            setTimeout(() => {
                create_modal.style.display = "none"
            }, 300);

        })
    }
    document.getElementById("create_modal_save").addEventListener("click", (e) => {
        if (/\S+\s+\(\S+@\S+\.\S+\)/g.test(document.getElementById("modal__joke_author").value)){
            createJoke()
            create_modal.style.animation = "fadeOut 0.3s";
            setTimeout(() => {
                create_modal.style.display = "none"
            }, 300);

        }else {
            alert("Invalid Author. Please type author like 'Author (Email)'");
        }


    })
    const detailModal = document.getElementById("detail_modal");
    detailModal.querySelector(".modal__close").addEventListener("click", (e) => {
        detailModal.style.animation = "fadeOut 0.3s";
        setTimeout(() => {
            detailModal.style.display = "none"
        }, 300);
    });
    const likebtn = document.getElementById("like_btn");
    likebtn.addEventListener("click", (e) => {
        if (likebtn.classList.contains("selected")) {
            jokeIndexes = "all";
            renderCard();
            likebtn.classList.remove("selected");
        } else {
            likebtn.classList.add("selected");
            if (JSON.parse(localStorage.getItem("liked")) !== null) {
                jokeIndexes = JSON.parse(localStorage.getItem("liked"));
                renderCard()
            } else {
                document.getElementById('card_container').innerHTML = '<img alt="loading" class="w-full h-full" src="public/loading.gif">';
            }
        }
    })
    likebtn.querySelector(".btn__svg").addEventListener("click", (e) => {
        if (likebtn.classList.contains("selected")) {
            likebtn.classList.remove("selected");
            jokeIndexes = "all";
            renderCard();
        } else {
            likebtn.classList.add("selected");
            if (JSON.parse(localStorage.getItem("liked")) !== null) {
                jokeIndexes = JSON.parse(localStorage.getItem("liked"));
                renderCard()
            } else {
                document.getElementById('card_container').innerHTML = '<img alt="loading" class="w-full h-full" src="public/loading.gif">';
            }
        }
    })
    const lightBtn = document.getElementById("light_btn");
    const darkBtn = document.getElementById("dark_btn");
    const lightBtnFunc = (e) => {
        if (lightBtn.classList.contains("selected")) {
            jokeType = "all";
            renderCard();
        } else {
            darkBtn.classList.remove("selected");
            jokeType = "light";
            renderCard();
        }
    }
    const darkBtnFunc = (e) => {
        if (darkBtn.classList.contains("selected")) {
            jokeType = "all";
            renderCard();
        } else {
            jokeType = "dark";
            lightBtn.classList.remove("selected");
            renderCard();
        }
    }
    lightBtn.addEventListener("click", lightBtnFunc);
    darkBtn.addEventListener("click", darkBtnFunc);
    lightBtn.querySelector(".btn__svg").addEventListener("click", lightBtnFunc);
    darkBtn.querySelector(".btn__svg").addEventListener("click", darkBtnFunc);
    for (let i of document.querySelectorAll('.nav__button.toggle')) {
        i.addEventListener("click", (e) => i.classList.toggle("selected"));
        i.querySelector(".btn__svg").addEventListener("click", (e) => i.classList.toggle("selected"))
    }
}

async function renderCard(ids = jokeIndexes) {
    let liked = localStorage.getItem("liked");
    const root = document.getElementById('card_container');
    document.getElementById("edit_btn").classList.remove('selected');
    root.innerHTML = '<img alt="loading" class="w-full h-full" src="public/loading.gif">';
    let res;
    try{
        res = await getJoke(ids, jokeType, jokeSort);
    } catch (e){
        root.innerHTML = `<p>${e.message} occurred, try later</p>`
        return
    }
    console.log(res);
    if (res.status !== 200 ) {
        root.innerHTML = `<p>Error occurred, try later</p>`
        return
    }
    root.innerHTML = ``;
    let data = res.data;
    const detailModal = document.getElementById("detail_modal");
    for (let i of data) {
        let card = document.createElement("div");
        card.innerHTML = `<div class="w-56 main__card h-fit p-4 rounded-lg m-3">
                <div class="main__card__body flex  items-stretch justify-stretch flex-col">
                    <header class="h-1/5 mb-4 ">
                        <h4 class="font-medium truncate  mb-0.5">${i.author}</h4>
                        <h3 class="h-4/6 overflow-hidden text-ellipsis">${i.name}</h3>
                        <p>likes: ${i.likes}</p>
                    </header>
                    <div class="h-3/5 text-ellipsis overflow-hidden">
                        <p>${i.body}</p>
                    </div>
                    <div class="h-1/5 flex mt-3">
                        <button class="flex items-center px-3 justify-start basis-4/5 main__card__button mr-2 rounded-lg main__card__detail_btn">
                            Detail
                        </button>
                        <button class="basis-1/5 main__card__button rounded-lg flex justify-center items-center like_btn">
                            <svg fill="#000000" height="90%" width="90%"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                 viewBox="0 0 471.701 471.701" xml:space="preserve">
                        <g>
                            <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                        </g>
                                <rect class="btn__svg" x="0" y="0" width="10" height="10"  />
                        </svg>
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
        card = card.firstElementChild;
        //query selector for detail b
        card.querySelector(".main__card__detail_btn").addEventListener("click", (e) => {
            detailModal.querySelector("#detail__joke_name").value = i.name;
            detailModal.querySelector("#detail__joke_author").value = i.author;
            detailModal.querySelector("#detail__joke_text").value = i.body;
            detailModal.querySelector("#detail__joke_type").value = i.type;
            for (let i of detailModal.querySelectorAll(".modal__input")) {
                i.disabled = true;
            }
            detailModal.querySelector(".modal__inner__header__title").innerText = "Detail";
            detailModal.querySelector(".detail_edit").classList.remove("show");
            detailModal.querySelector(".detail_edit").classList.add("hide");
            detailModal.style.display = "block";
            detailModal.style.animation = "fadeIn 0.3s"
        });
        card.querySelector(".main__card__more__edit").addEventListener("click", (e) => {
            detailModal.querySelector("#detail__joke_name").value = i.name;
            detailModal.querySelector("#detail__joke_author").value = i.author;
            detailModal.querySelector("#detail__joke_text").value = i.body;
            detailModal.querySelector("#detail__joke_type").value = i.type;
            for (let i of detailModal.querySelectorAll(".modal__input")) {
                i.disabled = false;
            }
            detailModal.querySelector(".modal__inner__header__title").innerText = "Edit";
            detailModal.querySelector(".detail_edit").classList.remove("hide");
            detailModal.querySelector(".detail_edit").classList.add("show");
            document.getElementById("create_detail_save").addEventListener("click", (e) => {
                if(/\S+\s+\(\S+@\S+\.\S+\)/g.test(document.getElementById("detail__joke_author").value)){
                    const updateData = {
                        name: detailModal.querySelector("#detail__joke_name").value,
                        author: detailModal.querySelector("#detail__joke_author").value,
                        text: detailModal.querySelector("#detail__joke_text").value,
                        type: detailModal.querySelector("#detail__joke_type").value

                    }
                    console.log(updateJoke(i.id, updateData));
                    detailModal.style.animation = "fadeOut 0.3s";
                    setTimeout(() => {
                        detailModal.style.display = "none"
                    }, 300);
                    renderCard();
                } else {
                    alert("Invalid Author. Please type author like 'Author (Email)'");
                }

            })
            detailModal.style.display = "block";
            detailModal.style.animation = "fadeIn 0.3s"
        });
        card.querySelector(".main__card__more__delete").addEventListener("click", (e) => {
            removeJoke(i.id);
            removeLike(i.id);
            renderCard();
        });
        console.log(liked);
        if(liked.includes(i.id)) card.querySelector(".like_btn").classList.add("liked");
        card.querySelector(".like_btn").addEventListener("click", (e) => {
            if (card.querySelector(".like_btn").classList.contains("liked")) {
                card.querySelector(".like_btn").classList.remove("liked");
                removeLike(i.id);
                updateLikes("down",i.id);
            } else {
                card.querySelector(".like_btn").classList.add("liked");
                addLike(i.id)
                updateLikes("up",i.id);
            }

        })

        root.appendChild(card);
    }
}

function createJoke() {
    const data = {
        author: document.getElementById("modal__joke_author").value,
        name: document.getElementById("modal__joke_name").value,
        body: document.getElementById("modal__joke_text").value,
        type: document.getElementById("modal__joke_type").value
    }
    console.log(addJoke(data));
    renderCard()
}

