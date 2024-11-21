import { useState } from "react";
import { Category_Type } from "../constants/types";
import { useGetAllCategoryQuery } from "../redux/api/categoryApi";
import { useCreateProductMutation } from "../redux/api/productApi";
import Swal from "sweetalert2";

const Add_Product = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState<number | undefined>();
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const { data } = useGetAllCategoryQuery(undefined);
    const [createProductFnc] = useCreateProductMutation();

    const handleSubmitProduct = async (event: React.FormEvent) => {
        event.preventDefault();
        const productData = {
            name,
            category,
            price,
            image,
            description,
        };
        console.log(productData)
        const res = await createProductFnc(productData);
        if(res?.data?.success){
            Swal.fire("Successfully Create A Product");
        }else{
            Swal.fire("There is a server side erro");
        }
    };

    return (
        <>
            <h1 className='bg-blue-500 text-white text-center font-bold py-2'>Add Product</h1>
            <form className="card-body py-1" onSubmit={handleSubmitProduct}>
                {/* Product Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Enter product name"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Category Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                        required
                    >
                        <option disabled value="">Select Category</option>
                        {data?.map((one: Category_Type) => (
                            <option key={one?.category_id} value={one?.name}>
                                {one.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Product Price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        onChange={(e) => setPrice(Number(e.target.value))}
                        value={price || ''}
                        type="number"
                        placeholder="Enter price"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Product Image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        type="text"
                        placeholder="Enter image URL"
                        className="input input-bordered"
                        required
                    />
                </div>

                {/* Product Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        placeholder="Enter product description"
                        className="textarea textarea-bordered"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button type="submit" className="btn bg-blue-500 hover:bg-blue-600 text-white mb-4">
                        Add Product
                    </button>
                </div>
            </form>
        </>
    );
};

export default Add_Product;
