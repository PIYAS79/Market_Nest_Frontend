import Swal from "sweetalert2";
import { Category_Type } from "../constants/types";
import { useDeleteCategoryMutation, useGetAllCategoryQuery } from "../redux/api/categoryApi";


const Admin_Categories = () => {

  const { data } = useGetAllCategoryQuery(undefined);
  const [delteCategoryFnc] = useDeleteCategoryMutation();

  const handleDelete = async (cid: number) => {
    try {
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
          const result = await delteCategoryFnc(cid);
          if (result?.data?.affected == 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Category has been deleted.",
              icon: "success"
            });
          }
        }
      });

    } catch (err: any) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1 className='bg-blue-500 text-white text-3xl font-bold text-center py-3'>Product Categories</h1>

      <div className="p-5">
        <h1 className="text-3xl font-bold text-center">Total Category : {data?.length}</h1>
        <div className="text-2xl mt-5 grid justify-center items-center gap-3">
          {data?.map((one: Category_Type) => <div className="w-[300px] rounded-xl flex justify-between items-center bg-blue-400 text-white p-2" key={one?.category_id}>
            <p className="text-sm font-semibold pl-3">{one.name}</p>
            <button onClick={() => handleDelete(one.category_id)} className="block btn btn-xs btn-error text-white ">delete</button>
          </div>)}
        </div>
      </div>

    </div>
  )
}

export default Admin_Categories
