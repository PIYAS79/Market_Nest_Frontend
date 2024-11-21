import { FormEvent, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useUpdateUserMutation } from '../redux/api/userApi';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/features/authSlice';

const Update_Profile = () => {

    const loadedData = useLoaderData() as any;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState(loadedData?.data?.name || "");
    const [contact, setContact] = useState(loadedData?.data?.contact_number)
    const [address, setAddress] = useState(loadedData?.data?.address)
    const [image, setImage] = useState(loadedData?.data?.image)


    const [updateFnc] = useUpdateUserMutation()

    console.log(loadedData)


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const updatedData = {
            name,
            contact_number: contact, address, image
        };

        const res = await updateFnc({ data: updatedData, uid: loadedData?.data?.user_id })
        if (res?.data?.success) {
            Swal.fire("Successfully Updated Now Login Again !");
            dispatch(removeUser())
            navigate('/login');
        } else {
            Swal.fire("There is an server side error");
        }

    };





    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                    User Information Update
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* User Name */}
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

                    {/* Contact Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Contact Number
                        </label>
                        <input
                            type="text"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter contact value"
                        />
                    </div>

                    {/* Product Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            User Address
                        </label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter product price"
                        />
                    </div>

                    {/* Image Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            User Image
                        </label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter user image"
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
    )
}

export default Update_Profile
