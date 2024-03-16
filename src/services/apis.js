import axios from "axios";

const BASE_URL = "https://dummyjson.com"
const axiosInstance = axios.create({ baseURL: BASE_URL })

const BASE_URL_1 = "http://13.233.65.5:8000"
const axiosInstance1 = axios.create({ baseURL: BASE_URL_1 })

// get products
const getProducts = async () => {
    return await axiosInstance.get("products")
}

// send phone num and get otp
const mutatePhoneNum = async (body) => {
    return await axiosInstance1.post("api/generate-otp", body)
}

export { getProducts, mutatePhoneNum }