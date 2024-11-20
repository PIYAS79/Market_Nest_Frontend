import { useState, FormEvent } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useUpdateProductMutation } from "../redux/api/productApi";
import Swal from "sweetalert2";

const Admin_Update_Product = () => {
    const loadedData = useLoaderData() as any;
    const navigate = useNavigate();

    const [name, setName] = useState(loadedData?.data?.name || "");
    const [description, setDescription] = useState(loadedData?.data?.description || "");
    const [price, setPrice] = useState(loadedData?.data?.price || 0);

    const [updateFnc] = useUpdateProductMutation()


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const updatedData = {
            name,
            description,
            price,
        };

        const res = await updateFnc({ data: updatedData, pid: loadedData?.data?.product_id })
        if(res?.data?.success){
            Swal.fire("Successfully Updated");
            navigate(-1);
        }else{
            Swal.fire("There is an server side error");
        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                    Product Update
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Product Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Product Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter product name"
                        />
                    </div>

                    {/* Product Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Product Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter product description"
                            rows={4}
                        ></textarea>
                    </div>

                    {/* Product Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Product Price
                        </label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter product price"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Admin_Update_Product;
