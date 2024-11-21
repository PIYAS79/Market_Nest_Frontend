import { Product_Type } from "../constants/types";
import { useGetAllProductsQuery } from "../redux/api/productApi"
import Product_Card from "./Product_Card";

const Default_Product = () => {


    const { data: products } = useGetAllProductsQuery(undefined);


    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center text-3xl font-bold mt-20 mb-10">Our Products</h1>
            <div className="grid grid-cols-3 gap-10">
                {
                    products?.slice(0, 6)?.map((one: Product_Type) => <Product_Card key={one?.product_id} data={one} />)
                }
            </div>
        </div>
    )
}

export default Default_Product
