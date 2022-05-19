import { NORMA_API } from './constants'

function checkReponse(res) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export async function getIngregients() {
  const res = await fetch(NORMA_API + 'ingredients')
  return checkReponse(res)
}