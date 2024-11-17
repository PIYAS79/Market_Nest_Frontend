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
      <h1 className='bg-pink-700 text-3xl font-bold text-center py-3'>Product Categories</h1>

      <div className="p-5">
        <h1 className="text-3xl font-bold">Total Category : {data?.length}</h1>
        <div className="text-2xl mt-5">
          {data?.map((one: Category_Type) => <p key={one?.category_id}>- {one.name}

            <button onClick={() => handleDelete(one.category_id)} className="btn btn-xs btn-error ml-2">delete</button>

          </p>)}
        </div>
      </div>

    </div>
  )
}

export default Admin_Categories
