// geeting top rated data
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true
});

export async function getTopRatedProducts() {
    try {
    const response = await api.get('/products/topRated');
    return response.data;
        
    } catch (error) {
        console.log(error);
    }
}