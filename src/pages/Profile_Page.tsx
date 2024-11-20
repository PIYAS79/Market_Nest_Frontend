import { Link } from "react-router-dom"
import { useAppSelector } from "../redux/hooks"

const Profile_Page = () => {

    const { name, address, email, image, contact_number,user_id } = useAppSelector(state => state.auth)


    return (
        <div className="flex max-w-5xl gap-5 mx-auto bg-blue-500 mt-10 rounded-xl">
            {image && <img
                min-width={300}
                src={image}
                className="max-w-sm rounded-lg shadow-2xl" />}
            <div className="p-5 text-white">
                <h1 className="text-5xl font-bold">Profile Information</h1>
                <p className="pt-5">User Name :  {name}</p>
                <p className="py-1"> Email : {email}</p>
                <p className="py-1"> Contact Number : {contact_number}</p>
                <p className="py-1"> Address : {address}</p>
                <Link to={`/profile/update/${user_id}`}>
                    <button className="btn btn-sm mt-5 btn-warning">Update Profile</button>
                </Link>
            </div>
        </div>
    )
}

export default Profile_Page
