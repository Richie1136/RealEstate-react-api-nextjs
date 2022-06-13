import axios from "axios";

export const baseURL = 'https://bayut.p.rapidapi.com'

export const FetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '655bdaa00dmsh1dfed893f79b687p102403jsn162126e9f66e',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })
  return data
}