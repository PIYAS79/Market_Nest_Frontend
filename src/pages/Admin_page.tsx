
import Add_Category from '../components/Add_Category'
import Add_Product from '../components/Add_Product'
import { useGetDashOverviewQuery } from '../redux/api/authApi'

const Admin_page = () => {

    const { data: overflow } = useGetDashOverviewQuery(undefined);

    return (
        <div className='w-full'>
            <h1 className='bg-blue-500 text-white text-3xl font-bold text-center py-3'>Admin Page</h1>

            <div className=' flex justify-around max-w-5xl mx-auto my-5'>
                <div className='w-[140px] aspect-square bg-blue-400 text-white flex justify-center items-center relative text-3xl font-bold rounded-xl'><span className='text-lg font-medium absolute top-2'>Total category </span>{overflow?.data?.total_category}</div>
                <div className='w-[140px] aspect-square bg-blue-400 text-white flex justify-center items-center relative text-3xl font-bold rounded-xl'><span className='text-lg font-medium absolute top-2'>Total User </span>{overflow?.data?.total_user}</div>
                <div className='w-[140px] aspect-square bg-blue-400 text-white flex justify-center items-center relative text-3xl font-bold rounded-xl'><span className='text-lg font-medium absolute top-2'>Total Orders </span>{overflow?.data?.total_order}</div>
                <div className='w-[140px] aspect-square bg-blue-400 text-white flex justify-center items-center relative text-3xl font-bold rounded-xl'><span className='text-lg font-medium absolute top-2'>Total Products </span>{overflow?.data?.total_product}</div>
            </div>
            <div className='flex justify-between gap-5 max-w-3xl mx-auto mt-3'>
                <div className=' w-[50%] bg-gray-200 rounded-t-xl overflow-hidden'>
                    <Add_Category />
                </div>
                <div className=' w-[50%] bg-gray-200 rounded-t-xl overflow-hidden'>
                    <Add_Product />
                </div>
            </div>
        </div>
    )
}

export default Admin_page
