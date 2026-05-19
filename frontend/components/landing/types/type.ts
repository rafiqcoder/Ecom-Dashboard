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