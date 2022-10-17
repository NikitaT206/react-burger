import { NORMA_API } from './constants'

function checkReponse(res) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export async function getUser() {
  const res = await fetch(NORMA_API + 'auth/user', {
    headers: {
      'Authorization': getCookie('accessToken')
    }
  })
  return checkReponse(res)
}

export async function changeUserData(data) {
  const res = await fetch(NORMA_API + 'auth/user', {
    method: 'PATCH',
    headers: {
      'Authorization': getCookie('accessToken')
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email
    })
  })
  return checkReponse(res)
}

export async function refreshToken(refreshToken) {
  const res = await fetch(NORMA_API + 'auth/token', {
    method: 'POST',
    body: JSON.stringify({
      token: refreshToken,
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return checkReponse(res)
}

export async function logout(refreshToken) {
  const res = await fetch(NORMA_API + 'auth/logout', {
    method: 'POST',
    body: JSON.stringify({
      token: refreshToken,
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return checkReponse(res)
}

export async function getIngregients() {
  const res = await fetch(NORMA_API + 'ingredients')
  return checkReponse(res)
}

export async function makeOrder(data) {
  const res = await fetch(NORMA_API + 'orders', {
    method: 'POST',
    body: JSON.stringify({
      ingredients: data
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return checkReponse(res)
}

export async function recoveryPassword(email) {
  const res = await fetch(NORMA_API + 'password-reset', {
    method: 'POST',
    body: JSON.stringify({
      email: email
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return checkReponse(res)
}

export async function setNewPassword(form) {
  const res = await fetch(NORMA_API + 'password-reset/reset', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return checkReponse(res)
}

export async function login(form) {
  const res = await fetch(NORMA_API + 'auth/login', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return checkReponse(res)
}

export async function register(form) {
  const res = await fetch(NORMA_API + 'auth/register', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return checkReponse(res)
}