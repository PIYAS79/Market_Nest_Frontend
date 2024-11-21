import Swal from "sweetalert2";
import { useGetAllUserQuery, useUpdateUserMutation } from "../redux/api/userApi";
import { User_Type } from "../constants/types";

const Admin_Users_page = () => {

    const [updateFnc] = useUpdateUserMutation();
    const { data: users } = useGetAllUserQuery(undefined);
    console.log(users)


    const handleUpdateUserRole = async (uid: number, role: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make this user as admin ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await updateFnc({ data: { role: role }, uid: uid });
                if (res?.data?.success) {
                    Swal.fire({
                        title: "Updated!",
                        text: "User role has been updated.",
                        icon: "success"
                    });
                }
            }
        });
    }



    return (
        <div>
            <h1 className='bg-blue-500 text-white text-3xl font-bold text-center py-3'>Total Products</h1>
            <div className="overflow-x-auto m-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users?.map((one: User_Type) => <tr key={one?.user_id}>
                            <th>{one?.user_id}</th>
                            <td>{one?.name}</td>
                            <td>{one?.email}</td>
                            <td>{one?.role}</td>
                            <td>
                                {
                                    one?.role === "ADMIN" ?
                                        <button onClick={() => handleUpdateUserRole(one?.user_id, "USER")} className="btn btn-xs btn-primary text-white">make user</button>
                                        :
                                        <button onClick={() => handleUpdateUserRole(one?.user_id, "ADMIN-X")} className="btn btn-xs btn-success text-white">make admin</button>
                                }
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admin_Users_page
