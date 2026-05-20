import { Product } from "@/components/landing/types/type";

export interface CartSliceInterface {
    products: Product[];
    loading: boolean;
    error: string | null;
    message: string;
}