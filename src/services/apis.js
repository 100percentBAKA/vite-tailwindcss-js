import axios from "axios";

const BASE_URL = "http://dummyjson.com"
const axiosInstance = axios.create({ baseURL: BASE_URL })

// get products
const getProducts = async () => {
    return await axiosInstance.get("products")
}

export { getProducts }