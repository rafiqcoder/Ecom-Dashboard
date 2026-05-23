export interface carouselData {
  titleSm: string;
  title: string;
  btn: string;
  path: string;
}

export interface BannerItem {
  id?: number;
  title: string;
  subtitle?: string;
  image: string;
  buttonText?: string;
  price?: string;
  path: string;
}

export interface GamingAccessoryItem {
  id: number;
  title: string;
  image: string;
  path: string;
}

export interface HeroSectionData {
  fashionBanner: BannerItem;

  gamingAccessories: {
    title: string;
    seeMore: string;
    items: GamingAccessoryItem[];
  };

  promoBanners: BannerItem[];
}

// top rated product interface and product interface

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

  productCategory: string[];
  productTag: string[];

  stockQuantity: number;
  stockStatus: boolean;

  createdAt: string;
  updatedAt: string;

  __v: number;
}

export interface TopRatedProduct extends Product {
  ratings: Rating[];
}

// top rated interface
export interface TopRatedState {
  products: TopRatedProduct[];
  loading: boolean;
  error: string | null;
  message: string;
  success: boolean;
}

// review card interface
export interface ReviewInterface {
  id: number;
  name: string;
  rating: number;
  review: string;
  avatarUrl: string;
  date: string;
  verified: boolean;
}
