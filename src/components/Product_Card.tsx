import Swal from "sweetalert2";
import { Product_Type } from "../constants/types"
import { useAppSelector } from "../redux/hooks";
import { Navigate, replace, useNavigate } from "react-router-dom";


const Product_Card = ({ data }: { data: Product_Type }) => {

    const { user_id } = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    const addToCart = (product: Product_Type) => {

        if (!user_id) {
            Swal.fire("Please Login First");
            navigate('/login');
            return <Navigate to={'/login'} replace={true} />;
        }

        const cart = JSON.parse(localStorage.getItem("cart") || '[]');
        cart.push(product); // Add new product to cart
        localStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire("Successfully added into the cart")
    };



    return (
        <div className="card card-compact bg-base-100 w-96 max-h-[400px] shadow-xl">
            <figure>
                <img
                    src="https://www.health.com/thmb/QEDERVgktTQA_KwXSCqRYPrRJrU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1448038415-ad65b0afdb084055ac1b93703db77c85.jpg"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <h2 className="card-title">{data?.name}</h2>
                    <h2 className="card-title">${data.price}</h2>
                </div>
                <p>{data?.description}</p>
                <div className="card-actions justify-end">
                    <div className="flex justify-between w-full items-center">
                        <div className="badge badge-secondary">{data?.category}</div>
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                addToCart(data)
                            }
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_Card
