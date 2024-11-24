import { Link } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"

const Profile_Page = () => {

    const { name, address, email, image, contact_number, user_id } = useAppSelector(state => state.auth)


    return (
        <div className="h-[calc(100vh-4.4rem)] flex flex-col justify-center items-center text-center max-w-5xl gap-5 mx-auto bg-gray-200 my-10 rounded-xl">
            {image && <img
                src={image}
                className="max-w-s shadow-2xl w-[250px] aspect-square rounded-full object-cover mt-3" />}
            <div className="pb-5">
                <h1 className="text-4xl font-bold">Profile Information</h1>
                <p className="pt-5"><span className="font-bold">User Name :</span>  {name}</p>
                <p className="py-1"> <span className="font-bold">Email :</span> {email}</p>
                <p className="py-1"> <span className="font-bold">Contact Number :</span> {contact_number}</p>
                <p className="py-1"> <span className="font-bold">Address :</span> {address}</p>
                <Link to={`/profile/update/${user_id}`}>
                    <button className="btn mt-5 bg-blue-500 hover:bg-blue-600 text-white">Update Profile</button>
                </Link>
            </div>
        </div>
    )
}

export default Profile_Page
