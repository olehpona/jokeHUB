import axios from "axios";

const apiGateway = "http://localhost:3000/"

export async function addJoke(data) {
    return axios.post(apiGateway + 'api/add', data,{
        headers : {
            "Authorization" : localStorage.getItem("token")
        }});
}

export async function removeJoke(id) {
    return axios.post(apiGateway + 'api/delete', {id: id},{
        headers : {
            "Authorization" : localStorage.getItem("token")
        }})
}

export async function getJoke(ids, type ,sort) {
    return axios.post(apiGateway + 'api/jokes', {id: ids, type: type, sort: sort},{
        headers : {
            "Authorization" : localStorage.getItem("token")
        }})
}

export async function updateJoke(id, data) {
    return axios.post(apiGateway + 'api/update', {
            id: id,
            data: data
        },
        {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
}

export async function signUp(login, password, callBackError, callBackSuccess) {
    const res = await axios.post(apiGateway + 'user/create', {email: login, password: password})
    console.log(res)
    if (res.data.status === "OK") {
        localStorage.setItem("token", res.data.token)
        callBackSuccess();
    } else {
        localStorage.removeItem("token");
        callBackError(res.data.status);
    }
}

export async function logIn(login, password, callBackError, callBackSuccess) {
    if (localStorage.getItem("token")) {
        const res = await axios.post(apiGateway + 'user/login', {}, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        if (res.data.status === "OK") {
            localStorage.setItem("token", res.data.token)
            await callBackSuccess();
        } else {
            localStorage.removeItem("token");
            await callBackError(res.data.status)
        }
    } else {
        const res = await axios.post(apiGateway + 'user/login', {email: login, password: password})
        if (res.data.status === "OK") {
            localStorage.setItem("token", res.data.token)
            await callBackSuccess();
        } else {
            localStorage.removeItem("token");
            await callBackError(res.data.status);
        }
    }
}

export async function updateLikes(mode,id) {
    const res = await axios.post(apiGateway + 'api/rating', {type:mode,id:id}, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}

export async function addLike(id){
    const res = await axios.post(apiGateway + 'user/add_like', {liked_id:id}, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
    localStorage.setItem("liked",JSON.stringify(res.data.likes));
}
export async function removeLike(id){
    const res = await axios.post(apiGateway + 'user/remove_like', {liked_id:id}, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
    localStorage.setItem("liked",JSON.stringify(res.data.likes));
}
export async function getLikes(){
    const res = await axios.post(apiGateway + 'user/liked', {}, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
    localStorage.setItem("liked",JSON.stringify(res.data.likes));
}