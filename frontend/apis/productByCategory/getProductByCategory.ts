import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true
})

export async function getProductByCategory({ category }: { category: string }) {
    try {
        const response = await api.get(`/products/category/${category}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}