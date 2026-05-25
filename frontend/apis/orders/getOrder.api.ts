import axios, { AxiosError } from "axios"

const api = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true
})

export const getUserOrder = async () => {
    try {
        const response = await api.get("/my-orders")
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log(error);
        }
    }
}
