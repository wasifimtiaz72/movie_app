import { api } from "./axiosConfig"

export const getServerData = (media_type, category, pages) => {
    return api.get(`${media_type}/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US@page=${pages}`)
}

export const getDetails = (media_type, id) => {
    return api.get(`${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
}
export const getCast = (media_type, id) => {
    return api.get(`${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
}
export const getPersonDetails = (id) => {
    return api.get(`person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
}
export const getPersonCredits = (id) => {
    return api.get(`person/${id}/combined_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
}
export const getSearchResult = (querry) => {
    return api.get(`search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${querry}&page=1&include_adult=false`)
}