export interface Product {
    id: string;
    name: string;
    price: number;
}

// Cart item type
export interface CartItem {
    product: Product;
    quantity: number;
}

// Cart state type
export interface CartState {
    items: CartItem[];
}