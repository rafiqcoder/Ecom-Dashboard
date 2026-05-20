export interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    rating: number;
    reviewCount: number;
    currentPrice: number;
    originalPrice: number;
    discount?: number;
    productId: string;
}
