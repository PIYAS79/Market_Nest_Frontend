import { Category_Type } from "../constants/types";
import { useGetAllCategoryQuery } from "../redux/api/categoryApi";
import { Link } from "react-router-dom";

const Category_Section = () => {
  const { data: categories } = useGetAllCategoryQuery(undefined);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-3xl font-bold my-10">Available Categories</h1>

      <div className="flex justify-around mb-10">
        {categories?.slice(0, 10).map((one: Category_Type) => (
          <Link
            to="/product"
            state={{ selectedCategory: one?.name }}
            key={one?.category_id}
            className="w-[100px] shadow-md text-sm hover:bg-gray-200 cursor-pointer border border-blue-500 rounded-lg font-semibold p-2 flex justify-center items-center"
          >
            <p>{one?.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category_Section;
