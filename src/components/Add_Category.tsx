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
          console.log(result)
          if(result?.data?.data?.raw?.affectedRows == 1){
            Swal.fire("Successfully Created");
          }
        } catch (error) {
          console.log(error)
        }
      };

    return (
        <>
            <h1 className='bg-green-600 text-center font-bold py-2'>Add Catetegory</h1>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category Name</span>
                    </label>
                    <input onChange={e=>setName(e.target.value)} value={name} type="name" placeholder="" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </>
    )
}

export default Add_Category
