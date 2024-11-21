import { useEffect, useState } from "react";
import { Product_Type } from "../constants/types";
import { useCreateNewOrderMutation } from "../redux/api/orderApi";
import { useAppSelector } from "../redux/hooks";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const Cart_page = () => {
    const [cart, setCart] = useState<Product_Type[]>([]);
    const [newOrderFnc] = useCreateNewOrderMutation();
    const { user_id } = useAppSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            try {
                setCart(JSON.parse(storedCart));
            } catch (error) {
                console.error("Error parsing cart data:", error);
                setCart([]); // Fallback to an empty cart
            }
        }
    }, []);

    const totalPrice = cart.reduce((total, item) => total + item.price * 1, 0);



    const handleClickPurchase = async (pid: number) => {
        const res = await newOrderFnc({
            user_id: user_id,
            product_id: pid,
            quantity: 1
        })
        if (res?.data?.raw?.affectedRows === 1) {
            await Swal.fire("Successfully Purchase, Now check your order list");
            localStorage.setItem("cart", JSON.stringify([]));
            navigate('/order-list')
        }else{
            await Swal.fire("Login First");
            navigate('/login')
        }
    }



    return (
        <div className="flex max-w-7xl mx-auto gap-3 p-5 h-[calc(100vh-4.4rem)]">
            <div className="w-[50%] gap-y-3">
                {cart.map((product, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 flex justify-between rounded-xl overflow-hidden h-[150px] mb-5"
                    >
                        <div className="p-5">
                            <h1 className="font-bold text-2xl">{product.name}</h1>
                            <h1>Quantity: 1</h1>
                            <h2>Price: ৳{product.price}</h2>
                        </div>
                        <div className="h-full flex justify-center items-center">
                            <img
                                src={product.image || "https://via.placeholder.com/150"}
                                alt={product.name}
                                className="h-24"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-[50%] bg-gray-200 text-center h-[200px] rounded-xl overflow-hidden">
                <h1 className="text-2xl bg-blue-400 py-2 font-bold text-white">Purchase Section</h1>
                <h1 className="text-xl font-bold mt-2">Total</h1>
                <h1 className="text-4xl font-bold">৳{totalPrice}</h1>
                <button onClick={() => handleClickPurchase(cart[0].product_id)} className="btn bg-blue-500 hover:bg-blue-600 text-white mt-3">Purchase Now</button>
            </div>
        </div>
    );
};

export default Cart_page;
