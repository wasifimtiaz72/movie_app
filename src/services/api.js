import axios from "axios";
import { api } from "./axiosConfig"

export const getServerData = (media_type, category) => {
    return api.get(`${media_type}/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US@page=1`)
}