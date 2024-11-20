import Swal from "sweetalert2";
import { Order_Type } from "../constants/types";
import { useDeleteOrderMutation, useGetAllOrderQuery, useUpdateOrderMutation } from "../redux/api/orderApi"


const Admin_Orders = () => {


  const { data: orders } = useGetAllOrderQuery(undefined);
  const [deleteFnc] = useDeleteOrderMutation();
  const [updateFnc] = useUpdateOrderMutation();

  const handleDeleteOrder = (oid: number) => {
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
        const res = await deleteFnc(oid);
        if (res?.data?.affected) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      }
    });
  }

  const handleUpdateOrder = async (oid: number) => {
    const res = await updateFnc({ data: { order_status: true }, pid: oid })
    if (res?.data?.success) {
      Swal.fire("Successfully Delevered");
    } else {
      Swal.fire("There is an server side error");
    }
  }



  return (
    <div>
      <h1 className='bg-pink-700 text-3xl font-bold text-center py-3'>Current Orders</h1>
      <div className="overflow-x-auto m-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-blue-500">
              <th>Order ID</th>
              <th>Time</th>
              <th>User Name</th>
              <th>Prodcut Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>

            {orders?.map((one: Order_Type) => <tr key={one.order_id}>
              <th>{one?.order_id}</th>
              <td>{one?.time}</td>
              <td>{one?.user?.name}</td>
              <td>{one?.product?.name}</td>
              <td>{one?.product?.category}</td>
              <td>{one?.quantity}</td>
              <td>
                {
                  one?.order_status ?
                    <span className="text-green-600">delevered</span>
                    :
                    <>
                      <button onClick={() => handleUpdateOrder(one?.order_id)} className="btn btn-xs btn-primary ml-1">delever</button>
                      <button onClick={() => handleDeleteOrder(one?.order_id)} className="btn btn-xs btn-error ml-1">delete</button>
                    </>
                }
              </td>
            </tr>)}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin_Orders
