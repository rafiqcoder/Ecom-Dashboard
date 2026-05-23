
interface Rating {
  _id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt?: string;
  updatedAt?: string;
  __v: number;
}
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;

  discountPrice: number;
  discountStart: string;
  discountEnd: string;

  poster: string;

  ratings?: Rating[];

  productCategory: string[];
  productTag: string[];



  stockQuantity: number;
  stockStatus: boolean;

  createdAt: string;
  updatedAt: string;

  __v: number;
}


// category slice interface
export interface ProductsFetchingInterface {
    products: Product[];
    loading: boolean;
    error: string | null;
    message: string;
    success: boolean;
}