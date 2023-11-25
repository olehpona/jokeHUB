import axios from "axios";

const apiGateway: string = "http://localhost:3000/";

export async function addJoke(data: {}) {
  return axios.post(apiGateway + "api/add", data, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}

export async function removeJoke(id: string) {
  return axios.post(
    apiGateway + "api/delete",
    { id: id },
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
}

export async function getJoke(
  ids: string | string[],
  type: string,
  sort: string
) {
  return axios.post(
    apiGateway + "api/jokes",
    { id: ids, type: type, sort: sort },
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
}

export async function updateJoke(
  id: string,
  data: { name: string; author: string; type: "light" | "dark"; text: string }
) {
  return axios.post(
    apiGateway + "api/update",
    {
      id: id,
      data: data,
    },
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
}

export async function signUp(
  login: string,
  password: string,
  callBackError: (data: string) => void,
  callBackSuccess: (data: { token: string }) => void
) {
  const res = await axios.post(apiGateway + "user/create", {
    email: login,
    password: password,
  });
  if (res.data.status === "OK") {
    callBackSuccess(res.data);
  } else {
    callBackError(res.data.status);
  }
}

export async function logIn(
  login: string,
  password: string,
  callBackError: (data: string) => void,
  callBackSuccess: (data: { token: string }) => any
) {
  if (/\w/.test(password) && /\w/.test(login)) {
    if (localStorage.getItem("token")) {
      const res = await axios.post(
        apiGateway + "user/login",
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (res.data.status === "OK") {
        await callBackSuccess(res.data);
      } else {
        await callBackError(res.data.status);
      }
    } else {
      const res = await axios.post(apiGateway + "user/login", {
        email: login,
        password: password,
      });
      if (res.data.status === "OK") {
        await callBackSuccess(res.data);
      } else {
        await callBackError(res.data.status);
      }
    }
  } else {
    callBackError("incorrect data")
  }
}

export async function updateLikes(mode: string, id: string) {
  await axios.post(
    apiGateway + "api/rating",
    { type: mode, id: id },
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
}

export async function addLike(id: string, callBack: (data: string[]) => void) {
  const res = await axios.post(
    apiGateway + "user/add_like",
    { liked_id: id },
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  callBack(res.data.likes);
}
export async function removeLike(
  id: string,
  callBack: (data: string[]) => void
) {
  const res = await axios.post(
    apiGateway + "user/remove_like",
    { liked_id: id },
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  callBack(res.data.likes);
}
export async function getLikes(callBack: (data: string[]) => void) {
  const res = await axios.post(
    apiGateway + "user/liked",
    {},
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  callBack(res.data.likes);
  //localStorage.setItem("liked",JSON.stringify(res.data.likes));
}
