import { useState } from "react";
import { useLocation } from "react-router-dom"; 
import Product_Card from "../components/Product_Card";
import Search from "../components/Search";
import { Product_Type } from "../constants/types";
import { useGetAllCategoryQuery } from "../redux/api/categoryApi";
import { useGetAllProductsQuery } from "../redux/api/productApi";

const Product_page = () => {
  const { data: products } = useGetAllProductsQuery(undefined);
  const { data: categories } = useGetAllCategoryQuery(undefined);

  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    location.state?.selectedCategory || ""
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleClickCategorySearch = (ct: string) => {
    setSelectedCategory(ct === "reset" ? "" : ct); 
    setSearchQuery(""); 
  };

  const handleNameSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory(""); 
  };

  const filteredProducts = selectedCategory
    ? products?.filter((product: Product_Type) => product.category === selectedCategory)
    : searchQuery
    ? products?.filter((product: Product_Type) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products; 

  return (
    <div className="p-5 max-w-7xl mx-auto overflow-y-scroll h-[calc(100vh-4.4rem)]">
      <Search
        handleClickCategorySearch={handleClickCategorySearch}
        handleNameSearch={handleNameSearch}
        categories={categories}
      />
      <div className="grid grid-cols-3 gap-y-5 h-full">
        {filteredProducts?.map((one: Product_Type) => (
          <Product_Card key={one.product_id} data={one} />
        ))}
      </div>
    </div>
  );
};

export default Product_page;
