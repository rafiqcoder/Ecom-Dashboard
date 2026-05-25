
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


// user data interface
export interface data {
  name: string;
  email: string;
  // password: string;
  role: string;
  phone?: string;
  location?: string;
  profile?: string;
  lastLogin?: string;
  lastSeen?: string;
  onlineStatus?: string;
  socketId?: string;
  createdAt: string;
  gender?: string;
}

export interface initialInterface {
  err: string;
  data: data;
  loading: boolean,
  success: boolean;
  message: string;
}
