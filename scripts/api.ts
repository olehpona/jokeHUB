import axios, { AxiosResponse } from "axios";

const apiGateway: string = ""

export async function addJoke(data: {}) : Promise<AxiosResponse> {
    return axios.post(apiGateway + 'api/add', data,{
        headers : {
            "Authorization" : localStorage.getItem("token")
        }});
}

export async function removeJoke(id : string) : Promise<AxiosResponse> {
    return axios.post(apiGateway + 'api/delete', {id: id},{
        headers : {
            "Authorization" : localStorage.getItem("token")
        }})
}

export async function getJoke(ids: string[], type: string,sort: string): Promise<AxiosResponse>  {
    return axios.post(apiGateway + 'api/jokes', {id: ids, type: type, sort: sort},{
        headers : {
            "Authorization" : localStorage.getItem("token")
        }})
}

export async function updateJoke(id: string, data : {}) : Promise<AxiosResponse> {
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

export async function signUp(login: string, password: string, callBackError: Function, callBackSuccess: Function): Promise<void> {
    const res = await axios.post(apiGateway + 'user/create', {email: login, password: password})
    if (res.data.status === "OK") {
        callBackSuccess(res.data);
    } else {
        callBackError(res.data.status);
    }
}

export async function logIn(login: string, password: string, callBackError: Function, callBackSuccess: Function): Promise<void> {
    if (localStorage.getItem("token")) {
        const res = await axios.post(apiGateway + 'user/login', {}, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        if (res.data.status === "OK") {
            await callBackSuccess(res.data);
        } else {
            await callBackError(res.data.status)
        }
    } else {
        const res = await axios.post(apiGateway + 'user/login', {email: login, password: password})
        if (res.data.status === "OK") {
            await callBackSuccess(res.data);
        } else {
            await callBackError(res.data.status);
        }
    }
}

export async function updateLikes(mode: string,id: string): Promise<void> {
    const res = await axios.post(apiGateway + 'api/rating', {type:mode,id:id}, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}

export async function addLike(id : string, callBack: Function): Promise<void>{
    const res = await axios.post(apiGateway + 'user/add_like', {liked_id:id}, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
    callBack(res.data.likes);
    //localStorage.setItem("liked",JSON.stringify(res.data.likes));
}
export async function removeLike(id: string, callBack: Function): Promise<void>{
    const res = await axios.post(apiGateway + 'user/remove_like', {liked_id:id}, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
    callBack(res.data.likes);
    //localStorage.setItem("liked",JSON.stringify(res.data.likes));
}
export async function getLikes(callBack : Function): Promise<void>{
    const res = await axios.post(apiGateway + 'user/liked', {}, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
    callBack(res.data.likes);
    //localStorage.setItem("liked",JSON.stringify(res.data.likes));
}