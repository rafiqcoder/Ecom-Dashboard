import { ProductsFetchingInterface } from "@/global/types/type";

export interface InitialInterface {
    activeTab: string;
    editMode: boolean;
    myOrders: ProductsFetchingInterface;
    myProfile: {
        success: boolean;
        message: string;
        err: string;
        loading: boolean;
    };
}