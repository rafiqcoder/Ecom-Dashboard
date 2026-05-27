import { ProductsFetchingInterface } from "@/global/types/type";

// order interface
export interface OrderInterface {
    success: boolean;
    error: string;
    loading: boolean;
    message: string;
    products: Order[];
}
// order product interface
export interface ProductItem {
  _id: string;
  productId: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  subTotal: number;
}

export interface Order {
  _id: string;
  userId: string;
  mobile: string;
  orderStatus: string;
  paymentStatus: string;
  paymentType: string;
  products: ProductItem[];
  shippingAddress: string;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}


export interface InitialInterface {
    activeTab: string;
    editMode: boolean;
    myOrders: OrderInterface;
    myProfile: {
        success: boolean;
        message: string;
        err: string;
        loading: boolean;
    };
}