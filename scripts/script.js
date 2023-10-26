let chuck;
import('./main.js').then(value => chuck= new value.default(addEvents));

function prepareChuckJokeTypes(){
    let element = document.getElementById('chuck__joke_type');
    for (let i of chuck.categories){
        element.innerHTML += `<option value="${i}">${i}</option>`
    }
}
async function renderJoke(type,joke){
    const res = await joke;
    const element = document.getElementById("chuck__joke__body");
    if (res.status === 200){
        if(type==="one"){
            element.innerHTML=`<div class="w-full chuck__card p-4 h-fit rounded-lg m-3">
                <div class="h-fit">
                    <p>${res.data.value}</p>
                </div>
            </div>`
        } else {
            element.innerHTML = "";
            for (let i of res.data.result.flat()){
                element.innerHTML += `<div class="w-full chuck__card p-4 h-fit rounded-lg m-3">
                    <div class="h-fit">
                        <p>${i.value}</p>
                    </div>
                </div>`
            }
        }
    } else {
        element.innerHTML ="<div class=\"w-full chuck__card p-4 h-fit rounded-lg m-3\">" +
            "<div class=\"h-fit\">" +
            "<p>Error</p>" +
            "</div></div>"
    }

}
function addEvents(){
    prepareChuckJokeTypes();
    document.getElementById('chuck__joke_type').addEventListener("change", (event) => {chuck.categorie = event.target.value;});
    document.getElementById('chuck__joke_get_random').addEventListener("click",(event)=>renderJoke("one",chuck.randomJoke()));
    document.getElementById('chuck__joke_key').addEventListener("change", (event)=> chuck.text=event.target.value);
    document.getElementById('chuck__joke_get_searched').addEventListener("click",(event)=> renderJoke("multi",chuck.searchedJoke()));
    for (let i of document.querySelectorAll('.nav__button')){
        i.addEventListener("click",(e) => i.classList.contains("selected")? i.classList.remove("selected") : i.classList.add("selected"));
        i.querySelector(".btn__svg").addEventListener("click",(e) => i.classList.contains("selected")? i.classList.remove("selected") :i.classList.add("selected"))
    }
    document.getElementById("edit_btn").addEventListener("click",(e)=> {
        for (let i of document.querySelectorAll(".main__card__more")){
            i.classList.contains("open") ? i.classList.remove("open") : i.classList.add("open");
        }
    })
}
