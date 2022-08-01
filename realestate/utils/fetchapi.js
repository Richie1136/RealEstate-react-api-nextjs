import axios from "axios";

export const baseURL = 'https://bayut.p.rapidapi.com'

export const FetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': 'e9f136fd86msh20374d953bfb05ep137d7ejsnaede58975cae',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })
  return data
}