import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});
export async function viewProductApi(productId: string) {

    try{
        const response = await api.get(`/api/v1/products/${productId}`);
        return response.data;
    }
    catch(error){
        console.log(error);
        return error;
    }
}
