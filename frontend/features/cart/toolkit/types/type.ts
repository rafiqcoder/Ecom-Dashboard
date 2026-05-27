import { Product } from "@/components/landing/types/type";

export interface CartSliceInterface {
    products: (Product & {
        quantity: number;
    })[];
    loading: boolean;
    error: string | null;
    message: string;
    success: boolean;
}