import axios, { AxiosError } from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true
})
// add to cart products
export async function addToCartProducts(productId: string) {
    try {
        const response = await api.post(`/users/cart/product/${productId}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log(error);
        }
    }
}