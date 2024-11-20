import Product_Card from "../components/Product_Card";
import { Product_Type } from "../constants/types";
import { useGetAllProductsQuery } from "../redux/api/productApi"


const Product_page = () => {

  const { data: products } = useGetAllProductsQuery(undefined);


  return (
    <div className="p-5 max-w-7xl mx-auto overflow-y-scroll h-[calc(100vh-4.4rem)]">
      <div className="grid grid-cols-3 gap-y-5 h-full">


        {
          products?.map((one: Product_Type) => <Product_Card key={one.product_id} data={one} />)
        }




      </div>
    </div>
  )
}

export default Product_page
