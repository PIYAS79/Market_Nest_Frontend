import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Rootpage = () => {
  return (
    <div className=' h-screen w-full'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Rootpage
