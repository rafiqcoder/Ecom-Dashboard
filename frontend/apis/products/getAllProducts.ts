// geeting all products data
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true
});

export async function getAllProducts() {
    try {
    const response = await api.get('/products');
    return response.data;
        
    } catch (error) {
        console.log(error);
    }
}