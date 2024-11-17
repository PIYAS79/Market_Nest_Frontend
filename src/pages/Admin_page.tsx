import React from 'react'
import Add_Category from '../components/Add_Category'
import Add_Product from '../components/Add_Product'

const Admin_page = () => {
    return (
        <div className='w-full'>
            <h1 className='bg-pink-700 text-3xl font-bold text-center py-3'>Admin Page</h1>

            <div className=' flex justify-around mt-3'>
                <div className='w-[140px] aspect-square bg-red-500 flex justify-center items-center relative text-3xl font-bold rounded-xl'><span className='text-lg font-medium absolute top-2'>Total category </span>30</div>
                <div className='w-[140px] aspect-square bg-red-500 flex justify-center items-center relative text-3xl font-bold rounded-xl'><span className='text-lg font-medium absolute top-2'>Total category </span>30</div>
                <div className='w-[140px] aspect-square bg-red-500 flex justify-center items-center relative text-3xl font-bold rounded-xl'><span className='text-lg font-medium absolute top-2'>Total Orders </span>30</div>
                <div className='w-[140px] aspect-square bg-red-500 flex justify-center items-center relative text-3xl font-bold rounded-xl'><span className='text-lg font-medium absolute top-2'>Total Products </span>200</div>
            </div>
            <div className='flex justify-between gap-5 max-w-3xl mx-auto mt-3'>
                <div className=' w-[50%] bg-pink-400'>
                    <Add_Category/>
                </div>
                <div className=' w-[50%] bg-pink-400'>
                    <Add_Product/>
                </div>
            </div>
        </div>
    )
}

export default Admin_page
