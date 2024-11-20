

export interface Category_Type {
    category_id: number,
    name: string
}

export interface Product_Type {
    product_id: number
    name: string
    image: string
    description: string
    price: number
    category: string
}
export interface User_Type {
    user_id: number
    name: string
    image: string
    email: string
    password: string
    role: string
}

export interface Order_Type {
    order_id: number
    time: string
    quantity: number
    user_id: number,
    order_status: boolean,
    user: User_Type,
    product: Product_Type
}

