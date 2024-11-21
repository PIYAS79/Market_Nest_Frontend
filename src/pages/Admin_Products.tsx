import { Link } from "react-router-dom";
import { Product_Type } from "../constants/types";
import { useDeleteProductMutation, useGetAllProductsQuery } from "../redux/api/productApi"
import Swal from "sweetalert2";


const Admin_Products = () => {


  const [updateFnc] = useDeleteProductMutation();
  const { data: products } = useGetAllProductsQuery(undefined);


  const handleDelteProduct = async (pid: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await updateFnc(pid);
        if (res?.data?.affected) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      }
    });
  }



  return (
    <div>
      <h1 className='bg-pink-700 text-3xl font-bold text-center py-3'>Total Products</h1>
      <div className="overflow-x-auto m-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-blue-500 text-white">
              <th>Product ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {products?.map((one: Product_Type) => <tr key={one?.product_id}>
              <th>{one?.product_id}</th>
              <td>{one?.name}</td>
              <td>{one?.category}</td>
              <td>${one?.price}</td>
              <td>
                <Link to={`/admin/products/${one?.product_id}`}>
                  <button className="btn btn-xs btn-primary text-white mr-1">update</button>
                </Link>
                <button onClick={() => handleDelteProduct(one?.product_id)} className="btn btn-xs btn-error text-white">delete</button>
              </td>
            </tr>)}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin_Products
