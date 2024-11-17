
const Profile_Page = () => {
    return (
        <div className="flex max-w-5xl gap-5 mx-auto bg-blue-500 mt-10">
            <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                className="max-w-sm rounded-lg shadow-2xl" />
            <div className="p-5">
                <h1 className="text-5xl font-bold">Profile Information</h1>
                <p className="pt-5">User Name :  </p>
                <p className="py-1"> Email</p>
            </div>
        </div>
    )
}

export default Profile_Page
