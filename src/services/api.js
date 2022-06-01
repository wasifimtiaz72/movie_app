import axios from "axios";
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