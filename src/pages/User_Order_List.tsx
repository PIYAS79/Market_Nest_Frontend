import { useEffect, useState } from "react";
import { Order_Type } from "../constants/types";
import { useAppSelector } from "../redux/hooks";



const User_Order_List = () => {
    const [orders, setOrders] = useState<Order_Type[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { user_id } = useAppSelector(state => state.auth)

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`http://localhost:5022/app/v1/order/user/${user_id}`);
                const data = await response.json();
                if (Array.isArray(data?.data)) {
                    setOrders(data?.data.reverse());
                    console.log(data?.data)
                } else {
                    throw new Error("Invalid API response format");
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-5 w-full h-[calc(100vh-4.4rem)] overflow-y-scroll">
            <h1 className="text-2xl font-bold mb-4">User Order List</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {!loading && !error && orders.length > 0 && (
                <div className="grid gap-3 ">
                    {orders?.map((order: Order_Type) => (
                        <div
                            key={order?.order_id}
                            className="p-4 border rounded shadow-md flex justify-between items-center"
                        >
                            <div>
                                <h2 className="font-bold text-lg">{order?.product?.name}</h2>
                                <p>Quantity: {order?.quantity}</p>
                                <p>Price: ${order?.product?.price}</p>
                                <p>Order Date: {order?.time}</p>
                            </div>
                            <div>
                                {
                                    order?.order_status ?
                                        <p className="bg-green-500 px-2 rounded-lg">Delevered</p>
                                        :
                                        <p className="bg-blue-500 text-white px-2 rounded-lg">Processing</p>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {!loading && !error && orders.length === 0 && (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default User_Order_List;
