import { useState } from "react";
import { useCreateNewCategoryMutation } from "../redux/api/categoryApi";
import Swal from "sweetalert2";

const Add_Category = () => {

    const [name,setName]=useState('');
    const [createCategoryFnc]=useCreateNewCategoryMutation();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const result: any = await createCategoryFnc({ category_name:name });
          if(result?.data?.data?.raw?.affectedRows == 1){
            Swal.fire("Successfully Created");
          }
        } catch (error) {
          console.log(error)
        }
      };

    return (
        <>
            <h1 className='bg-blue-500 text-white text-center font-bold py-2'>Add Catetegory</h1>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category Name</span>
                    </label>
                    <input onChange={e=>setName(e.target.value)} value={name} type="name" placeholder="Enter category name" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-blue-500 hover:bg-blue-600 text-white">Add Category</button>
                </div>
            </form>
        </>
    )
}

export default Add_Category
