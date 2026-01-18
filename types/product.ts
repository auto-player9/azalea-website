export interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    description: string;
    sizes: string[];
    isBestseller: boolean;
}